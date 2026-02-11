"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { clsx } from "clsx";

interface NavvExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function NavvExperience({ scrollYProgress }: NavvExperienceProps) {
    // HERO PHASE (0% - 30%)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

    // DESIGN PHASE (30% - 65%)
    const designOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
    const designY = useTransform(scrollYProgress, [0.25, 0.35], [50, 0]);

    // POWER PHASE (65% - 100%)
    const powerOpacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
    const powerY = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-6 md:px-20 h-screen w-full">
            {/* HERO SECTION */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 max-w-2xl"
            >
                <h1 className="text-6xl md:text-9xl font-orbitron font-bold tracking-tighter text-white mb-2">
                    REVUELTO
                </h1>
                <div className="h-0.5 w-24 bg-accent-gold mb-6" />
                <p className="text-xl md:text-2xl font-rajdhani text-muted-white tracking-widest uppercase mb-4">
                    Hybrid V12 Supercar
                </p>
                <p className="text-lg text-soft-gold mb-8">Starting at $608,000</p>
                <button className="pointer-events-auto border border-accent-gold text-accent-gold px-8 py-3 font-rajdhani hover:bg-accent-gold hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm">
                    Inquire Now
                </button>
            </motion.div>

            {/* DESIGN SECTION */}
            <motion.div
                style={{ opacity: designOpacity, y: designY }}
                className="absolute w-full flex justify-between items-center px-6 md:px-20 top-1/2 -translate-y-1/2"
            >
                <div className="text-left">
                    <h2 className="text-5xl md:text-8xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        DESIGN
                    </h2>
                </div>
                <div className="text-right max-w-sm md:max-w-md">
                    <div className="h-[1px] w-full bg-accent-gold mb-6 origin-right" />
                    <p className="text-lg md:text-xl font-rajdhani text-muted-white leading-relaxed">
                        Sculpted aerodynamics. Carbon fiber architecture. Precision-cut intakes engineered for airflow dominance.
                    </p>
                </div>
            </motion.div>

            {/* POWER SECTION */}
            <motion.div
                style={{ opacity: powerOpacity, y: powerY }}
                className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 text-right"
            >
                <div className="flex flex-col gap-8">
                    <div className="group">
                        <h3 className="text-sm text-gray-500 tracking-widest mb-1">ENGINE</h3>
                        <p className="text-3xl md:text-5xl font-orbitron text-white">6.5L V12</p>
                        <div className="h-[1px] w-full bg-gray-800 mt-2 group-hover:bg-accent-gold transition-colors duration-500" />
                    </div>

                    <div className="group">
                        <h3 className="text-sm text-gray-500 tracking-widest mb-1">POWER</h3>
                        <p className="text-3xl md:text-5xl font-orbitron text-accent-gold glow-sm">1001 HP</p>
                        <div className="h-[1px] w-full bg-gray-800 mt-2 group-hover:bg-accent-gold transition-colors duration-500" />
                    </div>

                    <div className="group">
                        <h3 className="text-sm text-gray-500 tracking-widest mb-1">LAYOUT</h3>
                        <p className="text-3xl md:text-5xl font-orbitron text-white">Mid-Engine Hybrid</p>
                        <div className="h-[1px] w-full bg-gray-800 mt-2 group-hover:bg-accent-gold transition-colors duration-500" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
