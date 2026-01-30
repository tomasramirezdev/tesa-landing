"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for the menu
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <nav className="fixed top-0 w-full z-[9999] bg-black/50 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
                    <Link href="/" className="flex items-center z-[60]">
                        <Image
                            src="/logo.png"
                            alt="TESA Logo"
                            width={240}
                            height={80}
                            className="h-20 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link href="#servicios" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                            Servicios
                        </Link>
                        <Link href="#proyectos" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                            Proyectos
                        </Link>
                        <Link href="#nosotros" className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                            Nosotros
                        </Link>
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black uppercase text-xs tracking-widest h-11 px-8">
                            Hablemos
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    {!isOpen && (
                        <button
                            className="md:hidden text-white z-[60] p-2"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu size={32} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu Overlay - PORTAL to Body */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-xl flex flex-col md:hidden"
                        >
                            {/* Header (Close Button) */}
                            <div className="flex justify-end items-center px-6 h-28 border-b border-white/5">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white p-2"
                                >
                                    <X size={40} />
                                </button>
                            </div>

                            {/* Links Container */}
                            <div className="flex flex-col items-center justify-center flex-1 gap-12">
                                <Link
                                    href="#servicios"
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-black text-white hover:text-neutral-400 transition-colors tracking-tighter uppercase"
                                >
                                    Servicios
                                </Link>
                                <Link
                                    href="#proyectos"
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-black text-white hover:text-neutral-400 transition-colors tracking-tighter uppercase"
                                >
                                    Proyectos
                                </Link>
                                <Link
                                    href="#nosotros"
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-black text-white hover:text-neutral-400 transition-colors tracking-tighter uppercase"
                                >
                                    Nosotros
                                </Link>

                                <div className="mt-8">
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        className="bg-white text-black hover:bg-zinc-200 text-lg font-bold h-16 px-16 rounded-full uppercase tracking-widest"
                                    >
                                        Hablemos
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
