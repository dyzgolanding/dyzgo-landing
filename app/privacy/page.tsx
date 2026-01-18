"use client";

import React from "react";
import { ArrowLeft, Lock, Database, Server, Eye, Globe, Cookie, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    // P-2 en movil para maximizar espacio, P-10 en desktop
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neonPurple/30 relative overflow-x-hidden flex flex-col items-center py-4 md:py-10">
      
      {/* --- Fondo Animado --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
           animate={{ rotate: 360, scale: [1, 1.1, 1] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-20%] right-[-10%] w-[90vw] h-[90vw] bg-[#581c87]/20 blur-[100px] rounded-full" 
        />
        <motion.div 
           animate={{ rotate: -360, scale: [1, 1.2, 1] }}
           transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-[#db2777]/15 blur-[100px] rounded-full" 
        />
      </div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        // CAMBIO DESKTOP: w-[98vw] para cubrir casi toda la pantalla
        className="w-full md:w-[98vw] relative z-10 flex flex-col items-center"
      >
        {/* Botón Volver alineado al contenedor */}
        <div className="w-[92%] md:w-full md:px-8 mb-4 md:mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-neonPurple transition-colors group uppercase text-[10px] md:text-sm font-bold tracking-widest">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Volver
          </Link>
        </div>
        
        {/* Panel de Vidrio */}
        {/* MOVIL: p-4 y w-[95%] para ser compacto. DESKTOP: p-16 y w-full para ser inmersivo */}
        <div className="glass-panel w-[95%] md:w-full p-4 md:p-16 rounded-2xl md:rounded-[3rem] border border-white/10 bg-black/70 backdrop-blur-3xl shadow-[0_0_60px_rgba(139,92,246,0.15)]">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 mb-6 md:mb-16 border-b border-white/10 pb-6 md:pb-10">
             <div className="w-10 h-10 md:w-24 md:h-24 rounded-xl md:rounded-3xl bg-neonPurple/10 border border-neonPurple/30 flex items-center justify-center shrink-0">
                <Lock className="text-neonPurple w-5 h-5 md:w-12 md:h-12"/>
             </div>
             <div className="flex-1">
                <h1 className="text-2xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-2">Política de Privacidad</h1>
                <p className="text-xs md:text-2xl text-gray-400 font-medium max-w-4xl leading-snug">
                  Transparencia radical. Así es como DyzGO protege tu identidad digital.
                </p>
                <p className="text-[9px] md:text-sm text-gray-600 mt-2 md:mt-4 font-mono uppercase tracking-widest">Actualizado: Enero 2026</p>
             </div>
          </div>
          
          {/* Contenido Legal */}
          {/* MOVIL: space-y-6 para compactar. DESKTOP: space-y-16 para respirar */}
          <div className="space-y-6 md:space-y-20 text-gray-300">
            
            {/* Intro */}
            <div className="prose prose-invert max-w-none">
              <p className="text-[11px] md:text-xl leading-relaxed text-gray-300 text-justify">
                DyzGO Inc. se toma tu privacidad en serio. Esta política describe cómo recopilamos, usamos y protegemos tus datos personales al utilizar nuestra plataforma. Al acceder a nuestros servicios, aceptas las prácticas descritas a continuación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                {/* 1. Datos Recopilados */}
                <section className="space-y-2 md:space-y-6">
                  <h3 className="text-white text-sm md:text-3xl font-bold flex items-center gap-2 md:gap-4">
                    <Database className="text-neonPurple w-4 h-4 md:w-8 md:h-8" /> 1. Información Recopilada
                  </h3>
                  <p className="text-[10px] md:text-lg leading-relaxed text-gray-400 text-justify">
                    Recopilamos lo estrictamente necesario para operar:
                  </p>
                  <ul className="space-y-2 md:space-y-4">
                    <li className="bg-white/5 p-3 md:p-6 rounded-lg md:rounded-2xl border border-white/5 text-[10px] md:text-base">
                      <strong className="text-white block mb-1 md:mb-2">Identidad:</strong> Nombre, RUT/DNI, fecha nacimiento (+18) y contacto.
                    </li>
                    <li className="bg-white/5 p-3 md:p-6 rounded-lg md:rounded-2xl border border-white/5 text-[10px] md:text-base">
                      <strong className="text-white block mb-1 md:mb-2">Financiero:</strong> Pagos procesados vía Stripe. <span className="text-neonPurple">No guardamos tu tarjeta.</span>
                    </li>
                    <li className="bg-white/5 p-3 md:p-6 rounded-lg md:rounded-2xl border border-white/5 text-[10px] md:text-base">
                      <strong className="text-white block mb-1 md:mb-2">Técnico:</strong> IP, dispositivo y geolocalización (opcional).
                    </li>
                  </ul>
                </section>

                {/* 2. Uso de Datos */}
                <section className="space-y-2 md:space-y-6">
                  <h3 className="text-white text-sm md:text-3xl font-bold flex items-center gap-2 md:gap-4">
                    <Server className="text-neonPurple w-4 h-4 md:w-8 md:h-8" /> 2. Uso de la Información
                  </h3>
                  <p className="text-[10px] md:text-lg leading-relaxed text-gray-400 text-justify">
                    Tus datos impulsan la experiencia DyzGO:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 md:space-y-3 text-[10px] md:text-base text-gray-400">
                    <li>Generación de <strong>Hash IDs</strong> y QR dinámicos para acceso seguro.</li>
                    <li>Prevención de fraudes y bots en el Marketplace.</li>
                    <li>Envío de tickets y notificaciones críticas de eventos.</li>
                    <li>Funciones sociales (NameDrop) iniciadas por ti.</li>
                  </ul>
                </section>
            </div>

            {/* 3. Compartir */}
            <section className="space-y-2 md:space-y-6 border-t border-white/10 pt-6 md:pt-16">
              <h3 className="text-white text-sm md:text-3xl font-bold flex items-center gap-2 md:gap-4">
                <Eye className="text-neonPurple w-4 h-4 md:w-8 md:h-8" /> 3. Divulgación a Terceros
              </h3>
              <p className="text-[10px] md:text-xl leading-relaxed text-gray-400 text-justify max-w-5xl">
                No vendemos tus datos. Compartimos información únicamente con:
                <br/><br/>
                <strong>Productoras:</strong> Solo reciben tu Nombre y RUT para listas de acceso legal. Tienen prohibido usarlo para marketing sin tu permiso.
                <br/>
                <strong>Proveedores:</strong> Servicios de nube (AWS) y seguridad bajo estrictos contratos.
                <br/>
                <strong>Legal:</strong> Solo si existe una orden judicial válida.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 border-t border-white/10 pt-6 md:pt-16">
               <section className="space-y-2 md:space-y-4">
                  <h3 className="text-white text-sm md:text-2xl font-bold flex items-center gap-2 md:gap-3">
                    <Cookie className="text-neonPurple w-4 h-4 md:w-6 md:h-6" /> 4. Cookies
                  </h3>
                  <p className="text-[10px] md:text-lg leading-relaxed text-gray-400 text-justify">
                    Usamos cookies para mantener tu sesión segura y recordar preferencias. Puedes desactivarlas, pero la app podría fallar.
                  </p>
               </section>

               <section className="space-y-2 md:space-y-4">
                  <h3 className="text-white text-sm md:text-2xl font-bold flex items-center gap-2 md:gap-3">
                    <Globe className="text-neonPurple w-4 h-4 md:w-6 md:h-6" /> 5. Internacional
                  </h3>
                  <p className="text-[10px] md:text-lg leading-relaxed text-gray-400 text-justify">
                    Tus datos se procesan en servidores seguros (EE.UU./Global) cumpliendo estándares internacionales de protección.
                  </p>
               </section>
            </div>

            {/* 6. Derechos */}
            <section className="bg-white/5 rounded-xl md:rounded-[2rem] p-4 md:p-12 border border-white/10">
              <h3 className="text-white text-sm md:text-3xl font-bold mb-2 md:mb-6 flex items-center gap-2 md:gap-4"><ShieldCheck className="text-neonPurple w-4 h-4 md:w-8 md:h-8"/> 6. Tus Derechos</h3>
              <p className="text-[10px] md:text-lg leading-relaxed text-gray-300 mb-4 md:mb-8">
                Tienes el control total (Derechos ARCO).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                 <div className="p-3 md:p-6 rounded-lg md:rounded-2xl bg-black/40 border border-white/10">
                    <h4 className="text-neonPurple font-bold text-xs md:text-xl mb-1">Borrar Cuenta</h4>
                    <p className="text-[9px] md:text-base text-gray-400">Solicita la eliminación total de tus datos desde la App.</p>
                 </div>
                 <div className="p-3 md:p-6 rounded-lg md:rounded-2xl bg-black/40 border border-white/10">
                    <h4 className="text-neonPurple font-bold text-xs md:text-xl mb-1">Exportar Datos</h4>
                    <p className="text-[9px] md:text-base text-gray-400">Pide una copia de todo lo que tenemos sobre ti.</p>
                 </div>
              </div>
            </section>

          </div>

          <div className="mt-8 md:mt-24 pt-6 md:pt-10 border-t border-white/10 text-center flex flex-col gap-1 md:gap-4">
             <p className="text-gray-500 text-[9px] md:text-lg font-sans">
               Dudas: <span className="text-neonPurple hover:underline cursor-pointer">privacy@dyzgo.com</span>
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
