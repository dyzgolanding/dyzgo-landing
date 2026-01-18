"use client";

import React from "react";
import { ArrowLeft, FileText, Gavel, AlertTriangle, CreditCard, Users, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Ajuste responsivo: py-4 en movil, py-10 en desktop
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neonPink/30 relative overflow-x-hidden flex flex-col items-center py-4 md:py-10">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
           animate={{ rotate: 360, scale: [1, 1.2, 1] }}
           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-[#db2777]/15 blur-[100px] rounded-full" 
        />
        <motion.div 
           animate={{ rotate: -360, scale: [1, 1.1, 1] }}
           transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-20%] right-[-10%] w-[90vw] h-[90vw] bg-[#581c87]/20 blur-[100px] rounded-full" 
        />
      </div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        // DESKTOP: Ocupa todo el ancho (w-[98vw])
        className="w-full md:w-[98vw] relative z-10 flex flex-col items-center"
      >
        <div className="w-[92%] md:w-full md:px-8 mb-4 md:mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-neonPink transition-colors group uppercase text-[10px] md:text-sm font-bold tracking-widest">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Volver
          </Link>
        </div>
        
        {/* Panel de Vidrio Adaptativo */}
        <div className="glass-panel w-[95%] md:w-full p-4 md:p-16 rounded-2xl md:rounded-[3rem] border border-white/10 bg-black/70 backdrop-blur-3xl shadow-[0_0_60px_rgba(219,39,119,0.15)]">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 mb-6 md:mb-16 border-b border-white/10 pb-6 md:pb-10">
             <div className="w-10 h-10 md:w-24 md:h-24 rounded-xl md:rounded-3xl bg-neonPink/10 border border-neonPink/30 flex items-center justify-center shrink-0">
                <FileText className="text-neonPink w-5 h-5 md:w-12 md:h-12"/>
             </div>
             <div className="flex-1">
                <h1 className="text-2xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-2">Términos de Uso</h1>
                <p className="text-xs md:text-2xl text-gray-400 font-medium max-w-4xl leading-snug">
                  Acuerdo legal entre el Usuario y DyzGO Inc. Lee atentamente antes de unirte a la experiencia.
                </p>
                <p className="text-[9px] md:text-sm text-gray-600 mt-2 md:mt-4 font-mono uppercase tracking-widest">Vigencia: Enero 2026</p>
             </div>
          </div>
          
          {/* Contenido Legal */}
          <div className="space-y-6 md:space-y-20 text-gray-300">
            
            {/* 1. Naturaleza */}
            <section className="space-y-2 md:space-y-6">
              <h3 className="text-white text-sm md:text-3xl font-bold flex items-center gap-2 md:gap-4">
                <Gavel className="text-neonPink w-4 h-4 md:w-8 md:h-8" /> 1. Naturaleza del Servicio
              </h3>
              <div className="prose prose-invert max-w-none text-[10px] md:text-lg leading-relaxed text-gray-400 text-justify">
                <p className="mb-2">
                  DyzGO es una plataforma tecnológica que actúa como intermediario (Marketplace) entre Productoras y Usuarios.
                </p>
                <p>
                  <strong className="text-white">Importante:</strong> DyzGO no organiza los eventos. No somos responsables por cancelaciones, calidad del show o seguridad física en el recinto. Nuestra responsabilidad se limita a la validez tecnológica del ticket.
                </p>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 border-t border-white/10 pt-6 md:pt-16">
                {/* 2. Tickets */}
                <section className="space-y-2 md:space-y-6">
                  <h3 className="text-white text-sm md:text-3xl font-bold flex items-center gap-2 md:gap-4">
                    <ShieldAlert className="text-neonPink w-4 h-4 md:w-8 md:h-8" /> 2. Sistema de Tickets
                  </h3>
                  <ul className="space-y-2 md:space-y-4">
                    <li className="bg-white/5 p-3 md:p-6 rounded-lg md:rounded-2xl border border-white/5 text-[10px] md:text-base">
                      <strong className="text-white block mb-1">Licencia:</strong> Digital y personal.
                    </li>
                    <li className="bg-white/5 p-3 md:p-6 rounded-lg md:rounded-2xl border border-white/5 text-[10px] md:text-base">
                      <strong className="text-white block mb-1">Anti-Fraude:</strong> QR dinámico (rota cada 15s). <span className="text-neonPink">Capturas de pantalla inválidas.</span>
                    </li>
                    <li className="bg-white/5 p-3 md:p-6 rounded-lg md:rounded-2xl border border-white/5 text-[10px] md:text-base">
                      <strong className="text-white block mb-1">Offline:</strong> Funciona sin internet (si se abrió antes).
                    </li>
                  </ul>
                </section>

                {/* 3. Pagos */}
                <section className="space-y-2 md:space-y-6">
                  <h3 className="text-white text-sm md:text-3xl font-bold flex items-center gap-2 md:gap-4">
                    <CreditCard className="text-neonPink w-4 h-4 md:w-8 md:h-8" /> 3. Pagos & Reventa
                  </h3>
                  <div className="text-[10px] md:text-lg leading-relaxed text-gray-400 text-justify space-y-2 md:space-y-4">
                    <p>
                      <strong>Service Fee:</strong> Comisión no reembolsable por uso de plataforma segura.
                    </p>
                    <p>
                      <strong>Marketplace:</strong> Reventa permitida <strong>solo en la App</strong>.
                    </p>
                    <div className="border-l-2 border-neonPink pl-3 py-1 italic text-gray-300 bg-white/5 rounded-r-lg">
                      "Al vender, el ticket original muere y nace uno nuevo. Adiós estafas."
                    </div>
                  </div>
                </section>
            </div>

            {/* 4. Conducta */}
            <section className="space-y-2 md:space-y-6 border-t border-white/10 pt-6 md:pt-16">
              <h3 className="text-white text-sm md:text-3xl font-bold flex items-center gap-2 md:gap-4">
                <Users className="text-neonPink w-4 h-4 md:w-8 md:h-8" /> 4. Sanciones
              </h3>
              <p className="text-[10px] md:text-lg leading-relaxed text-gray-400 text-justify">
                Suspendemos cuentas por violar las reglas. Tolerancia cero a:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-6">
                 <div className="p-3 md:p-5 rounded-lg md:rounded-2xl bg-red-900/10 border border-red-500/20 text-red-200 text-[10px] md:text-base font-bold flex items-center gap-2">
                    <AlertTriangle size={16}/> Fraude de tarjetas / Chargebacks.
                 </div>
                 <div className="p-3 md:p-5 rounded-lg md:rounded-2xl bg-red-900/10 border border-red-500/20 text-red-200 text-[10px] md:text-base font-bold flex items-center gap-2">
                    <AlertTriangle size={16}/> Hacking / Ingeniería inversa.
                 </div>
                 <div className="p-3 md:p-5 rounded-lg md:rounded-2xl bg-red-900/10 border border-red-500/20 text-red-200 text-[10px] md:text-base font-bold flex items-center gap-2">
                    <AlertTriangle size={16}/> Reventa masiva (Scalping).
                 </div>
                 <div className="p-3 md:p-5 rounded-lg md:rounded-2xl bg-red-900/10 border border-red-500/20 text-red-200 text-[10px] md:text-base font-bold flex items-center gap-2">
                    <AlertTriangle size={16}/> Acoso en funciones sociales.
                 </div>
              </div>
            </section>

            {/* 5. Propiedad */}
            <section className="bg-white/5 rounded-xl md:rounded-[2rem] p-4 md:p-12 border border-white/10">
              <h3 className="text-white text-sm md:text-3xl font-bold mb-2 md:mb-6">5. Propiedad Intelectual</h3>
              <p className="text-[10px] md:text-lg leading-relaxed text-gray-300">
                El código, diseño, algoritmo QR y marca "DyzGO" son propiedad exclusiva de DyzGO Inc. Prohibida su copia.
              </p>
            </section>

          </div>

          {/* Footer Legal */}
          <div className="mt-8 md:mt-24 pt-6 md:pt-10 border-t border-white/10 text-center flex flex-col gap-1 md:gap-4">
             <p className="text-gray-500 text-[9px] md:text-lg font-sans">
               Legal: <span className="text-neonPink hover:underline cursor-pointer">legal@dyzgo.com</span>
             </p>
             <p className="text-white/20 text-[8px] md:text-sm font-mono uppercase">
               DyzGO Inc. © 2026.
             </p>
          </div>
        </div>
      </motion.div>
      
      <style jsx global>{`
        .glass-panel { 
          background: rgba(15, 15, 15, 0.85); 
          backdrop-filter: blur(30px); 
          -webkit-backdrop-filter: blur(30px);
        }
      `}</style>
    </div>
  );
}
