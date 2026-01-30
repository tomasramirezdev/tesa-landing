"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
    {
        name: "Emiliano Ariel Martin",
        role: "Lead Software Engineer",
        image: "/emiliano.jpg",
        bio: "Ingeniero en Software especializado en arquitectura de sistemas escalables y soluciones tecnológicas de alto rendimiento.",
    },
    {
        name: "Tomás Sebastián Ramírez",
        role: "Lead Product Manager & UX/UI",
        image: "/tomas.jpg",
        bio: "Experto en diseño de interfaces y gestión de producto. Transforma visiones complejas en experiencias digitales fluidas y escalables.",
    },
];

export default function AboutUs() {
    return (
        <section id="nosotros" className="py-32 px-6 bg-zinc-900/50 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header / Philosophy */}
                <div className="flex flex-col md:flex-row gap-16 mb-24 items-start">
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4"
                        >
                            Nosotros
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="h-[1px] w-12 bg-white/20"
                        />
                    </div>

                    <div className="md:w-2/3">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-light leading-tight mb-8"
                        >
                            Creemos que la <span className="text-gray-500">calidad supera a la cantidad</span>.
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-400 leading-relaxed max-w-2xl"
                        >
                            Somos un estudio boutique enfocado en resultados. No somos una fábrica de software ni una agencia masiva. Trabajamos directamente contigo para transformar la manera en que gestionas tu negocio, eliminando el ruido y enfocándonos en lo que realmente importa: cerrar tratos.
                        </motion.p>
                    </div>
                </div>

                {/* Founders Grid */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-8">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.2 }}
                            className="group"
                        >
                            {/* Image Placeholder */}
                            <div className="relative w-full aspect-[4/5] bg-neutral-800 mb-8 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                                {founder.image ? (
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-700 font-bold text-9xl select-none opacity-20">
                                        {index + 1}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Info */}
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                    {founder.name}
                                </h4>
                                <p className="text-sm text-indigo-400 uppercase tracking-wider mb-4 font-medium">
                                    {founder.role}
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    {founder.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
