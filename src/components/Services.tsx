"use client";

import { motion } from "framer-motion";

const services = [
    {
        number: "01",
        id: "Cloud Infrastructure",
        title: "Nube Escalable",
        description: "Arquitecturas resilientes diseñadas para el crecimiento ilimitado y la alta disponibilidad global.",
        tags: ["Base de datos escalables", "Seguridad de datos"]
    },
    {
        number: "02",
        id: "Marketing",
        title: "Re-Marketing",
        description: "Ejecución de estrategias de marketing digital para impulsar la visibilidad y el crecimiento de tu negocio.",
        tags: ["No pierdas clientes valiosos", "Mayor conversion"]
    },
    {
        number: "03",
        id: "Software Engineering",
        title: "Desarrollo Custom",
        description: "Ingeniería de software de alto rendimiento enfocada en la experiencia de usuario y eficiencia.",
        tags: ["Diseño centrado en el usuario", "Solucionamos tu problema"]
    }
];

export default function Services() {
    return (
        <section id="servicios" className="py-32 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestras áreas.</h2>
                    <div className="h-1 w-24 bg-white/20" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group border-t border-white/10 pt-8 hover:border-white/40 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-6 text-[10px] tracking-widest text-gray-500 uppercase">
                                <span>{service.number} / {service.id}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-200 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 mb-8 text-sm leading-relaxed min-h-[5rem]">
                                {service.description}
                            </p>

                            <div className="flex flex-col gap-2">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-600 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
