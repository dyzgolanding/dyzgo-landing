"use client";

import React from "react";
import { ArrowLeft, Shield, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20 font-sans selection:bg-neonPink/30 relative overflow-hidden">
      {/* Background Blobs (Igual que Home) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#581c87] opacity-20 blur-[150px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#db2777] opacity-15 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group uppercase text-xs font-bold tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Volver al inicio
        </Link>
        
        <div className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="flex items-center gap-6 mb-12 border-b border-white/10 pb-8">
             <div className="p-5 rounded-3xl bg-neonPurple/20 border border-neonPurple/50"><FileText size={40} className="text-neonPurple"/></div>
             <div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Términos de Servicio</h1>
                <p className="text-gray-400">Las reglas del juego.</p>
             </div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-12">
            <p className="text-xl leading-relaxed font-light">Bienvenido a <span className="text-white font-bold">DyzGO</span>. Al usar nuestra plataforma, aceptas estas condiciones. Nuestro objetivo es crear la mejor experiencia de vida nocturna, segura y justa.</p>
            
            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPink">01.</span> Uso de la Plataforma</h3>
                <p>DyzGO actúa como intermediario entre Organizadores (Productoras) y Usuarios. No organizamos los eventos directamente, pero garantizamos la validez tecnológica de tu acceso.</p>
            </div>

            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPink">02.</span> Tickets y QR Dinámico</h3>
                <p>Tu seguridad es clave. Los tickets son digitales y personales. El código QR se regenera constantemente. <strong>Queda prohibido:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
                   <li>Intentar revender tickets fuera del Marketplace oficial.</li>
                   <li>Falsificar capturas de pantalla (no funcionarán en la puerta).</li>
                </ul>
            </div>

            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPink">03.</span> Marketplace y Reventa</h3>
                <p>Si no asistes, puedes vender tu entrada legalmente en nuestra app. Al venderse, tu ticket se destruye y se crea uno nuevo para el comprador. DyzGO cobra una pequeña comisión por servicio para garantizar la seguridad de la transacción.</p>
            </div>

            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPink">04.</span> Política de Reembolsos</h3>
                <p>Los reembolsos dependen de la política de cada Productora, excepto en caso de cancelación total del evento, donde DyzGO gestionará la devolución del valor del ticket (excluyendo cargos por servicio) según la ley vigente.</p>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 text-center text-gray-500 text-xs font-mono uppercase tracking-widest">
             DyzGO Inc. © 2026. Dudas legales a legal@dyzgo.com
          </div>
        </div>
      </div>
      <style jsx global>{`.glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); }`}</style>
    </div>
  );
}