"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MoveRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Hero() {
    // Mouse position state for interactivity
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Transform mouse values to movement for layers (parallax effect)
    // Layer 1 moves opposite to mouse
    const x1 = useTransform(x, [-1000, 1000], [50, -50]);
    const y1 = useTransform(y, [-1000, 1000], [50, -50]);

    // Layer 2 moves with mouse but slower
    const x2 = useTransform(x, [-1000, 1000], [-30, 30]);
    const y2 = useTransform(y, [-1000, 1000], [-30, 30]);

    // Layer 3 moves with mouse faster
    const x3 = useTransform(x, [-1000, 1000], [-80, 80]);
    const y3 = useTransform(y, [-1000, 1000], [-80, 80]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate mouse position relative to center of screen
            const { innerWidth, innerHeight } = window;
            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;

            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-[120vh] flex flex-col justify-center items-center px-6 overflow-hidden bg-black text-white pt-32 pb-40">

            {/* FLUID NEBULA BACKGROUND */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
                {/* Center Glow base */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-indigo-900/40 blur-[120px] rounded-full" />

                <div className="absolute inset-0 opacity-100 mix-blend-hard-light filter blur-[80px]">
                    {/* Layer 1: Blue/Indigo Vortex */}
                    <motion.div
                        style={{ x: x1, y: y1 }}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-[-10%] left-[-20%] w-[90vw] h-[90vh] bg-gradient-to-tr from-blue-700/60 via-indigo-600/50 to-cyan-500/40 rounded-full opacity-80"
                    />

                    {/* Layer 2: Red/Rose/Orange Plasma */}
                    <motion.div
                        style={{ x: x2, y: y2 }}
                        animate={{
                            rotate: [360, 0],
                            scale: [1.1, 0.9, 1.1],
                        }}
                        transition={{
                            duration: 21,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vh] bg-gradient-to-l from-red-600/50 via-rose-500/40 to-orange-500/30 rounded-full opacity-80 mix-blend-plus-lighter"
                    />

                    {/* Layer 3: Violet/Purple Core */}
                    <motion.div
                        style={{ x: x3, y: y3 }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.4, 0.7, 0.4],
                            rotate: [0, -180],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute top-[20%] left-[20%] w-[50vw] h-[50vh] bg-gradient-to-tr from-violet-600/50 via-purple-600/50 to-blue-500/30 rounded-full blur-[80px]"
                    />
                </div>
            </div>

            {/* Bottom smooth fade to black (Seamless transition) - Low z-index */}
            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />

            {/* Content - High z-index to stay above background and fades */}
            <div className="relative z-50 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Stats Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl"
                >
                    <span className="text-xs text-gray-300 font-medium tracking-wide">
                        <span className="text-white font-bold">50+</span> Clientes felices
                    </span>
                    <span className="h-4 w-[1px] bg-white/20" />
                    <span className="text-xs text-gray-300 font-medium tracking-wide">
                        <span className="text-white font-bold">10.000+</span> Ventas procesadas
                    </span>
                    <span className="h-4 w-[1px] bg-white/20" />
                    <span className="text-xs text-gray-300 font-medium tracking-wide">
                        <span className="text-white font-bold">35%</span> Mayor tasa de cierre
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] md:leading-[1.05] text-balance"
                >
                    Tu próximo cliente no debería perderse en un Excel.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
                >
                    Hace que el seguimiento de tu negocio sea fácil.
                    Gestiona ventas, hace seguimiento de clientes y mantente al tanto de tu stock sin desorden.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button
                        size="lg"
                        className="rounded-full bg-white text-black hover:bg-gray-200 h-14 px-8 text-base font-medium transition-transform hover:scale-105"
                    >
                        Empezar a Gestionar
                        <MoveRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white h-14 px-8 text-base font-medium transition-transform hover:scale-105"
                    >
                        Ver Demo
                        <Play className="ml-2 w-3 h-3 fill-current" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
