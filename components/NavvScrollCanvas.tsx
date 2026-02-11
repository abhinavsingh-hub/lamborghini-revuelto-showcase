"use client";

import { useRef, useEffect, useState } from "react";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

interface NavvScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames?: number;
    imageFolderPath?: string;
}

export default function NavvScrollCanvas({
    scrollYProgress,
    totalFrames = 240,
    imageFolderPath = "/navv-sequence",
}: NavvScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Map scroll (0-1) to frame index (0-239) with easing
    // Cinematic easing: slightly slower at start/end for control
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1], {
        clamp: true,
        ease: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, // EaseInOutCubic
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        const loadImages = async () => {
            for (let i = 1; i <= totalFrames; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `${imageFolderPath}/ezgif-frame-${paddedIndex}.jpg`;

                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                }).catch((e) => console.error(`Failed to load frame ${i}`, e));

                loadedImages[i - 1] = img;
                loadedCount++;
            }
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, [totalFrames, imageFolderPath]);

    // Render loop
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        const img = images[index];

        // Canvas sizing (handle retina)
        const dpr = window.devicePixelRatio || 1;
        // We rely on CSS to set display size, here we set actual buffer size matches display * dpr
        // But we need to check if canvas buffer size is already correct to avoid flicker/perf hit on every frame?
        // Actually best to set it on resize event only. 

        // For object-fit: cover logic
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.width;
        const ih = img.height;

        const scale = Math.max(cw / iw, ch / ih);
        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);

        // Subtle Vignette Overlay directly on canvas for performance
        const gradient = ctx.createRadialGradient(cw / 2, ch / 2, Math.max(cw, ch) * 0.3, cw / 2, ch / 2, Math.max(cw, ch));
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(1, "rgba(0,0,0,0.6)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, cw, ch);

        // Subtle Lighting Overlay (Simulated studio light)
        // Moves slightly opposite to scroll or based on scroll? 
        // Let's make it subtle.
        const lightX = cw * (0.3 + (index / totalFrames) * 0.4); // Moves from 30% to 70% width
        const lightGrad = ctx.createRadialGradient(lightX, ch * 0.3, 10, lightX, ch * 0.3, cw * 0.5);
        lightGrad.addColorStop(0, "rgba(255,255,255,0.05)");
        lightGrad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = lightGrad;
        ctx.globalCompositeOperation = "overlay";
        ctx.fillRect(0, 0, cw, ch);
        ctx.globalCompositeOperation = "source-over"; // Reset
    };

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current) return;
            const dpr = window.devicePixelRatio || 1;
            canvasRef.current.width = window.innerWidth * dpr;
            canvasRef.current.height = window.innerHeight * dpr;
            // Force re-render of current frame
            render(Math.round(frameIndex.get()));
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images]); // Re-bind if images load (to ensure render works)

    // React to scroll changes
    useMotionValueEvent(frameIndex, "change", (latest) => {
        requestAnimationFrame(() => render(Math.round(latest)));
    });

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
    );
}
