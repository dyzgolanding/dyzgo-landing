"use client";

import React from "react";
import { ArrowLeft, FileText, Gavel, AlertTriangle, CreditCard, Users, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function TermsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neonPink/30 relative overflow-x-hidden flex flex-col items-center justify-center py-4 md:py-8">
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#db2777]/15 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#581c87]/20 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        // ANCHO EXTENDIDO PERO CONTENIDO: max-w-6xl
        className="w-[95%] md:max-w-6xl relative z-10 flex flex-col items-center"
      >
        <div className="w-full mb-4 flex justify-start">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-neonPink transition-colors group uppercase text-[10px] font-bold tracking-widest">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Volver
          </Link>
        </div>
        
        {/* Panel Estilo Dashboard */}
        <div className="glass-panel w-full p-4 md:p-8 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl">
          
          {/* Header Compacto */}
          <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
             <div className="w-10 h-10 rounded-lg bg-neonPink/10 border border-neonPink/30 flex items-center justify-center shrink-0">
                <FileText className="text-neonPink w-5 h-5"/>
             </div>
             <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-2">
                <div>
                    <h1 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white leading-none">Términos de Uso</h1>
                    <p className="text-[10px] md:text-xs text-gray-400 font-medium mt-1">
                      Acuerdo legal entre el Usuario y DyzGO Inc. Normas de la comunidad.
                    </p>
                </div>
                <span className="text-[9px] text-gray-600 font-mono uppercase tracking-widest border border-white/10 px-2 py-1 rounded">Vigencia: 2026</span>
             </div>
          </div>
          
          {/* GRID DE 2 COLUMNAS (Información Densa) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6 text-gray-300">
            
            {/* Columna Izquierda */}
            <div className="space-y-4">
                <section>
                  <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-2">
                    <Gavel className="text-neonPink w-3 h-3" /> 1. Naturaleza del Servicio
                  </h3>
                  <div className="bg-white/5 p-3 rounded border border-white/5 text-[10px] md:text-xs leading-relaxed text-gray-400 text-justify">
                    DyzGO es una plataforma intermediaria (Marketplace).
                    <br/><strong className="text-white">No organizamos eventos.</strong> No somos responsables por cancelaciones, calidad del show o seguridad física en el recinto. Solo garantizamos la validez del ticket.
                  </div>
                </section>

                <section>
                  <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-2">
                    <CreditCard className="text-neonPink w-3 h-3" /> 3. Pagos & Reventa
                  </h3>
                  <div className="text-[10px] md:text-xs leading-relaxed text-gray-400 text-justify space-y-2">
                    <p>
                      <strong>Service Fee:</strong> Comisión no reembolsable por uso de plataforma.
                    </p>
                    <p>
                      <strong>Marketplace:</strong> Reventa permitida <strong className="text-neonPink">solo en la App</strong>. Al vender, el ticket original muere y nace uno nuevo. Adiós estafas.
                    </p>
                  </div>
                </section>
            </div>

            {/* Columna Derecha */}
            <div className="space-y-4">
                <section>
                  <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-2">
                    <ShieldAlert className="text-neonPink w-3 h-3" /> 2. Sistema de Tickets
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="bg-white/5 p-2 rounded border border-white/5 text-[10px] md:text-xs flex justify-between">
                      <strong className="text-white">Licencia</strong> <span>Digital y personal.</span>
                    </li>
                    <li className="bg-white/5 p-2 rounded border border-white/5 text-[10px] md:text-xs flex justify-between">
                      <strong className="text-white">QR Dinámico</strong> <span>Rota cada 15s.</span>
                    </li>
                    <li className="bg-white/5 p-2 rounded border border-white/5 text-[10px] md:text-xs text-center text-neonPink font-bold">
                      Capturas de pantalla INVÁLIDAS.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-2">
                    <Users className="text-neonPink w-3 h-3" /> 4. Sanciones
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                     <div className="p-2 rounded bg-red-900/10 border border-red-500/20 text-red-200 text-[9px] md:text-[10px] font-bold flex items-center gap-1.5">
                        <AlertTriangle size={10}/> Fraude Tarjetas
                     </div>
                     <div className="p-2 rounded bg-red-900/10 border border-red-500/20 text-red-200 text-[9px] md:text-[10px] font-bold flex items-center gap-1.5">
                        <AlertTriangle size={10}/> Hacking App
                     </div>
                     <div className="p-2 rounded bg-red-900/10 border border-red-500/20 text-red-200 text-[9px] md:text-[10px] font-bold flex items-center gap-1.5">
                        <AlertTriangle size={10}/> Reventa Masiva
                     </div>
                     <div className="p-2 rounded bg-red-900/10 border border-red-500/20 text-red-200 text-[9px] md:text-[10px] font-bold flex items-center gap-1.5">
                        <AlertTriangle size={10}/> Acoso Social
                     </div>
                  </div>
                </section>

                <section>
                   <h3 className="text-white text-xs md:text-sm font-bold mb-1">5. Propiedad Intelectual</h3>
                   <p className="text-[10px] text-gray-400 leading-snug">El código, diseño y marca "DyzGO" son propiedad exclusiva de DyzGO Inc. Prohibida copia.</p>
                </section>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-center flex justify-between items-center">
             <p className="text-white/20 text-[8px] md:text-[10px] font-mono uppercase">
               DyzGO Inc. © 2026.
             </p>
             <p className="text-gray-500 text-[9px] md:text-xs font-sans">
               Legal: <span className="text-neonPink hover:underline cursor-pointer">legal@dyzgo.com</span>
             </p>
          </div>
        </div>
      </motion.div>
      
      <style jsx global>{`
        .glass-panel { 
          background: rgba(15, 15, 15, 0.85); 
          backdrop-filter: blur(25px); 
        }
      `}</style>
    </div>
  );
}
