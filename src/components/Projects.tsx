"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Sistema de Gestión de Punto de Venta",
        category: "Retail & E-commerce",
        description: "Solución integral para comercios minoristas y mayoristas. Control de stock en tiempo real, facturación electrónica y métricas de venta instantáneas.",
        tags: ["React", "Node.js", "AWS"],
        gradient: "from-blue-600 to-cyan-500"
    },
    {
        title: "Sistema de Ingreso a Gimnasios",
        category: "Health & Fitness",
        description: "Plataforma de control de acceso biométrico y gestión de membresías. Automatización de pagos y reservas de clases.",
        tags: ["IoT", "Mobile App", "BioHub"],
        gradient: "from-violet-600 to-purple-500"
    },
    {
        title: "Control Gastronómico",
        category: "Hospitality",
        description: "Sistema para restaurantes y bares. Comandas digitales, gestión de mesas y control de inventario de cocina optimizado.",
        tags: ["Real-time", "Tablet View", "Analytics"],
        gradient: "from-orange-500 to-red-600"
    }
];

export default function Projects() {
    return (
        <section id="proyectos" className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Proyectos Seleccionados.</h2>
                        <div className="h-1 w-24 bg-indigo-500" />
                    </div>
                    <p className="text-gray-400 max-w-md text-sm md:text-base mb-2">
                        Soluciones reales que transformaron la operativa de nuestros clientes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                                <div className="space-y-4 max-w-2xl">
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-xs font-medium tracking-widest uppercase text-gray-500 group-hover:text-white/80 transition-colors">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-lg group-hover:text-gray-200 transition-colors">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 bg-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
