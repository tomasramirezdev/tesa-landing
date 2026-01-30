"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Main CTA */}
                <div className="flex flex-col items-center justify-center text-center mb-32">
                    <p className="text-xs tracking-[0.2em] text-gray-600 uppercase mb-12">
                        Empresas que confían en nosotros
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-40 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative h-6 w-20 md:h-8 md:w-32">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/placeholder-logo.png"
                                    alt="Company Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ))}
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        ¿Construimos el <br />
                        <span className="italic font-light text-gray-400">futuro</span> juntos?
                    </motion.h2>

                    <Link
                        href="mailto:hola@tesa.io"
                        className="text-2xl md:text-3xl border-b border-white hover:border-gray-400 hover:text-gray-300 transition-all pb-1"
                    >
                        hola@tesa.io
                    </Link>

                    <p className="mt-8 text-xs tracking-[0.2em] text-gray-500 uppercase">
                        Córdoba, Argentina
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest border-t border-white/10 pt-8">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <span className="text-white font-bold">TESA ESTUDIO </span>
                        <span>© 2026 — Todos los derechos reservados</span>
                    </div>

                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Linkedin</Link>
                        <Link href="#" className="hover:text-white transition-colors">Twitter (X)</Link>
                        <Link href="#" className="hover:text-white transition-colors">Github</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
