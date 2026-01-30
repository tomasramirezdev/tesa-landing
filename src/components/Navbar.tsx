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
        <nav className="fixed top-0 w-full z-[50] bg-black/50 backdrop-blur-md border-b border-white/5">
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
                <button
                    className="md:hidden text-white z-[60] p-2"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={32} />
                </button>
            </div>

            {/* Foolproof Mobile Fullscreen Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-black h-screen w-screen flex flex-col">
                    {/* Close Button Header */}
                    <div className="flex justify-end p-6 h-28 items-center">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white p-2"
                        >
                            <X size={40} />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center justify-center flex-1 gap-12">
                        <Link
                            href="#servicios"
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-bold text-white hover:text-gray-300 transition-colors tracking-tighter"
                        >
                            SERVICIOS
                        </Link>
                        <Link
                            href="#proyectos"
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-bold text-white hover:text-gray-300 transition-colors tracking-tighter"
                        >
                            PROYECTOS
                        </Link>
                        <Link
                            href="#nosotros"
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-bold text-white hover:text-gray-300 transition-colors tracking-tighter"
                        >
                            NOSOTROS
                        </Link>

                        <div className="pt-8">
                            <Button
                                onClick={() => setIsOpen(false)}
                                className="bg-white text-black hover:bg-gray-200 text-lg h-14 px-12 uppercase tracking-widest"
                            >
                                Hablemos
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
    );
}
