import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TESA - IT Solutions & Engineering",
  description: "Elevamos la infraestructura tecnológica de tu empresa con precisión quirúrgica y visión de futuro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
