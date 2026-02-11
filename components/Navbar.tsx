"use client";

import { motion, useMotionValueEvent, MotionValue } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
    scrollYProgress: MotionValue<number>;
}

export default function Navbar({ scrollYProgress }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.05) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-500 border-b border-transparent ${isScrolled ? "bg-black/50 backdrop-blur-md border-accent-gold/10" : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <span className="font-orbitron font-bold text-xl tracking-widest text-white uppercase">
                        Lamborghini
                    </span>
                </div>

                {/* CTA */}
                <button
                    className="group relative px-6 py-2 overflow-hidden border border-white/20 hover:border-accent-gold transition-colors duration-300"
                >
                    <span className="relative z-10 font-rajdhani font-medium tracking-widest text-sm text-white group-hover:text-accent-gold transition-colors duration-300">
                        INQUIRE
                    </span>
                    <div className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </div>
        </motion.nav>
    );
}
