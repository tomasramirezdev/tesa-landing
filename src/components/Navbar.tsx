"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for the menu
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
                <Link href="/" className="flex items-center z-[101]">
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
                <button
                    className="md:hidden text-white z-[101] p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <Link
                            href="#servicios"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-light text-white hover:text-neutral-400 transition-colors tracking-widest uppercase"
                        >
                            Servicios
                        </Link>
                        <Link
                            href="#proyectos"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-light text-white hover:text-neutral-400 transition-colors tracking-widest uppercase"
                        >
                            Proyectos
                        </Link>
                        <Link
                            href="#nosotros"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-light text-white hover:text-neutral-400 transition-colors tracking-widest uppercase"
                        >
                            Nosotros
                        </Link>
                        <Button
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white hover:text-black uppercase text-sm tracking-widest h-14 px-10 mt-4"
                        >
                            Hablemos
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
