import type { Metadata } from "next";
import "./globals.css"; // Importante: importa el css que está al lado

export const metadata: Metadata = {
  title: "DyzGO - La noche cobra vida",
  description: "La mejor app de eventos y fiestas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#050510] text-white">
        {children}
      </body>
    </html>
  );
}