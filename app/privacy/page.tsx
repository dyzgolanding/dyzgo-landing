"use client";

import React from "react";
import { ArrowLeft, Lock, Database, Server, Eye, Globe, Cookie, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function PrivacyPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neonPurple/30 relative overflow-x-hidden flex flex-col items-center justify-center py-4 md:py-8">
      
      {/* --- Fondo Animado --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#581c87]/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#db2777]/15 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        // DESKTOP: max-w-6xl para ancho controlado pero amplio (DASHBOARD)
        className="w-[95%] md:max-w-6xl relative z-10 flex flex-col items-center"
      >
        <div className="w-full mb-4 flex justify-start">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-neonPurple transition-colors group uppercase text-[10px] font-bold tracking-widest">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Volver
          </Link>
        </div>
        
        {/* Panel Estilo Dashboard */}
        <div className="glass-panel w-full p-4 md:p-8 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl">
          
          {/* Header Compacto */}
          <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
             <div className="w-10 h-10 rounded-lg bg-neonPurple/10 border border-neonPurple/30 flex items-center justify-center shrink-0">
                <Lock className="text-neonPurple w-5 h-5"/>
             </div>
             <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-2">
                <div>
                    <h1 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white leading-none">Política de Privacidad</h1>
                    <p className="text-[10px] md:text-xs text-gray-400 font-medium mt-1">
                      Nivel de seguridad blindado. Transparencia en datos y biometría.
                    </p>
                </div>
                <span className="text-[9px] text-gray-600 font-mono uppercase tracking-widest border border-white/10 px-2 py-1 rounded">Rev: 2026</span>
             </div>
          </div>
          
          {/* GRID DE 2 COLUMNAS (Aprovecha el ancho) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6 text-gray-300">
            
            {/* Intro (Ancho completo) */}
            <div className="md:col-span-2 text-[11px] md:text-sm text-gray-400 leading-snug mb-2">
              Para que DyzGO funcione con su nivel de seguridad blindado, recopilamos datos esenciales para validar identidad y prevenir el mercado negro.
            </div>

            {/* Columna Izquierda */}
            <div className="space-y-4">
                <section>
                  <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-2">
                    <Database className="text-neonPurple w-3 h-3" /> 1. Datos que Recopilamos
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 p-2 rounded border border-white/5 text-[10px]">
                      <strong className="text-white block">Identificación</strong>
                      Nombre, RUT/DNI, Correo, Teléfono.
                    </div>
                    <div className="bg-white/5 p-2 rounded border border-white/5 text-[10px]">
                      <strong className="text-white block">Biometría</strong>
                      FaceID para acceso y anti-clonación.
                    </div>
                    <div className="bg-white/5 p-2 rounded border border-white/5 text-[10px] col-span-2">
                      <strong className="text-white block">Dispositivo & Hash</strong>
                      ID dispositivo y SO para seguridad única.
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-2">
                    <Eye className="text-neonPurple w-3 h-3" /> 3. Compartir con Terceros
                  </h3>
                  <p className="text-[10px] md:text-xs leading-relaxed text-gray-400 text-justify">
                    <strong>No vendemos datos.</strong> Solo compartimos lo estrictamente necesario con:
                    <br/><strong>Organizadores:</strong> Lista de invitados y control de acceso.
                    <br/><strong>Pagos:</strong> Procesadores certificados (Stripe/MercadoPago).
                    <br/><strong>Autoridades:</strong> Solo bajo requerimiento legal formal.
                  </p>
                </section>
            </div>

            {/* Columna Derecha */}
            <div className="space-y-4">
                <section>
                  <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-2">
                    <Server className="text-neonPurple w-3 h-3" /> 2. Uso de la Información
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-[10px] md:text-xs text-gray-400">
                    <li>Procesar compra y entrega de tickets digitales.</li>
                    <li>Prevención de fraude y mercado negro.</li>
                    <li>Gestión de sistema de Ranking y XP.</li>
                    <li>Facilitar transferencias seguras (NFC).</li>
                  </ul>
                </section>

                <div className="grid grid-cols-2 gap-3">
                   <section>
                      <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-1">
                        <Cookie className="text-neonPurple w-3 h-3" /> 4. Seguridad
                      </h3>
                      <p className="text-[10px] text-gray-400 leading-snug">
                        Cifrado SSL y protocolos avanzados. Ninguna transmisión es 100% segura.
                      </p>
                   </section>
                   <section>
                      <h3 className="text-white text-xs md:text-sm font-bold flex items-center gap-2 mb-1">
                        <Globe className="text-neonPurple w-3 h-3" /> 5. Eliminación
                      </h3>
                      <p className="text-[10px] text-gray-400 leading-snug">
                        Solicita borrado total en: Perfil &gt; Seguridad &gt; Eliminar Cuenta.
                      </p>
                   </section>
                </div>

                <section className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <h3 className="text-white text-xs md:text-sm font-bold mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-neonPurple w-3 h-3"/> 6. Tus Derechos (ARCO)
                  </h3>
                  <div className="flex gap-4">
                     <div className="flex-1">
                        <h4 className="text-neonPurple font-bold text-[10px] mb-0.5">Control</h4>
                        <p className="text-[9px] text-gray-400">Acceder, Rectificar, Cancelar u Oponerse.</p>
                     </div>
                     <div className="flex-1">
                        <h4 className="text-neonPurple font-bold text-[10px] mb-0.5">Normativa</h4>
                        <p className="text-[9px] text-gray-400">Cumplimiento Apple/Google y leyes locales.</p>
                     </div>
                  </div>
                </section>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-center flex justify-between items-center">
             <p className="text-white/20 text-[8px] md:text-[10px] font-mono uppercase">
               DyzGO Inc. © 2026.
             </p>
             <p className="text-gray-500 text-[9px] md:text-xs font-sans">
               Legal: <span className="text-neonPurple hover:underline cursor-pointer">legal@dyzgo.com</span>
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
