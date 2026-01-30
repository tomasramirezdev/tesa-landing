import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="TESA Logo"
                        width={240}
                        height={80}
                        className="h-20 w-auto object-contain"
                    />
                </Link>

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
            </div>
        </nav>
    );
}
