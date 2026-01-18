"use client";

import React from "react";
import { ArrowLeft, Lock, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20 font-sans selection:bg-neonPink/30 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#581c87] opacity-20 blur-[150px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#db2777] opacity-15 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group uppercase text-xs font-bold tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Volver al inicio
        </Link>
        
        <div className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="flex items-center gap-6 mb-12 border-b border-white/10 pb-8">
             <div className="p-5 rounded-3xl bg-neonPink/20 border border-neonPink/50"><Lock size={40} className="text-neonPink"/></div>
             <div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Privacidad</h1>
                <p className="text-gray-400">Tus datos están blindados.</p>
             </div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-12">
            <p className="text-xl leading-relaxed font-light">En DyzGO, la privacidad es parte de la experiencia. Solo usamos tus datos para hacer tu noche mejor y más segura.</p>
            
            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPurple">01.</span> Información que Recopilamos</h3>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-400">
                   <li><strong>Datos de Cuenta:</strong> Nombre, email, edad (validación +18).</li>
                   <li><strong>Ubicación:</strong> Opcional. Se usa para mostrarte eventos cercanos y activar el "Check-in Rápido".</li>
                   <li><strong>Pagos:</strong> Procesados por proveedores certificados (Stripe/MercadoPago). DyzGO nunca ve ni almacena los datos completos de tu tarjeta.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPurple">02.</span> NameDrop y Social</h3>
                <p>Las funciones sociales (como compartir perfil por NFC) son iniciadas 100% por ti. No compartimos tu perfil públicamente a menos que tú lo configures así.</p>
            </div>

            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPurple">03.</span> Compartir con Productoras</h3>
                <p>Al comprar un ticket, la productora recibe solo los datos esenciales para la admisión (Nombre y RUT/DNI). Tienen prohibido usar estos datos para marketing externo sin tu consentimiento explícito.</p>
            </div>

            <div>
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-3"><span className="text-neonPurple">04.</span> Eliminación de Datos</h3>
                <p>Eres dueño de tu información. Puedes solicitar la eliminación completa de tu cuenta y datos históricos en cualquier momento desde la configuración de la App o contactando a soporte.</p>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 text-center text-gray-500 text-xs font-mono uppercase tracking-widest">
             Tus secretos están a salvo. DyzGO Inc. © 2026.
          </div>
        </div>
      </div>
      <style jsx global>{`.glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); }`}</style>
    </div>
  );
}