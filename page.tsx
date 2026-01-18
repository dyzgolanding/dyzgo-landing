"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  Smartphone, BarChart3, Wifi, Trophy, 
  QrCode, Play, Database, CheckCircle2, Crown, 
  Gift, CreditCard, Ticket, Activity, 
  Lock as LockIcon, Globe, Rocket, 
  Filter, Heart, TrendingUp, Wallet, X, Mail,
  XCircle, Shield, Flame, Instagram, FileText, Users
} from "lucide-react";
import Link from "next/link"; 

// --- COMPONENTE FIRMA (TIPOGRAFÍA + ANIMACIÓN DE ESCRITURA) ---
const FounderSignature = ({ name, delay }: { name: string, delay: number }) => {
  return (
    <div className="relative inline-block">
      {/* Texto fantasma invisible para reservar el espacio exacto */}
      <span className="font-signature text-3xl md:text-5xl text-transparent select-none opacity-0">
        {name}
      </span>
      
      {/* Capa de animación que revela el texto */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: delay, ease: "linear" }} // Linear para simular velocidad constante de pluma
        className="absolute top-0 left-0 h-full overflow-hidden whitespace-nowrap"
      >
        <span className="font-signature text-3xl md:text-5xl text-white/90">
          {name}
        </span>
      </motion.div>
    </div>
  );
};

// --- 1. PRELOADER ---
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.random() * 15;
        return Math.min(prev + jump, 100);
      });
    }, 150);

    const timer = setTimeout(onComplete, 2200); 
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[250] bg-black flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-neonPink/10 blur-[100px] md:blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg">
        <motion.h1 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none mb-8 md:mb-12 text-center"
        >
          DyzGO<motion.span 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 1.5, repeat: Infinity }} 
            className="text-neonPink"
          >.</motion.span>
        </motion.h1>

        <div className="w-64 md:w-full h-1.5 md:h-3 bg-zinc-900 rounded-full overflow-hidden relative border border-white/10 shadow-inner">
           <motion.div 
             className="h-full bg-gradient-to-r from-neonPink via-neonPurple to-white shadow-[0_0_30px_rgba(217,70,239,0.9)]"
             initial={{ width: 0 }}
             animate={{ width: `${progress}%` }}
             transition={{ type: "spring", stiffness: 50, damping: 15 }}
           />
        </div>
      </div>
    </motion.div>
  );
};

// --- 2. MODAL EARLY ACCESS ---
const EarlyAccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[250] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.95, y: 20 }} 
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-md glass-panel rounded-[2rem] p-6 md:p-8 relative border border-neonPink/30 shadow-[0_0_50px_rgba(217,70,239,0.2)] bg-[#0a0a0a]"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors"><X size={20} className="text-white" /></button>
            <div className="text-center mb-6 mt-2">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-neonPink to-neonPurple mb-4 shadow-neon"><Rocket size={24} className="text-white fill-white" /></div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Únete a la lista</h3>
              <p className="text-gray-400 text-sm px-4">Sé el primero en saber cuando lancemos.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-neonPink transition-colors" size={20} />
                <input type="email" placeholder="tu@email.com" className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 md:py-4 pl-14 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neonPink transition-all" />
              </div>
              <button className="w-full py-3 md:py-4 rounded-xl bg-white text-black font-black text-base md:text-lg hover:bg-gray-200 transition-colors tracking-wide">
                NOTIFICARME
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- COMPONENTES UI ---
const SpotlightCard = ({ children, className }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <motion.div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0)} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, ease: "easeOut" }} className={`glass-panel rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute -inset-px transition duration-300 z-10 hidden md:block" style={{ background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`, opacity }} />
      {children}
    </motion.div>
  );
};

const LiquidButton = ({ children, icon, primary, onClick }: any) => (
  <motion.button onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`relative w-full px-8 py-2.5 md:px-10 md:py-5 font-bold text-sm md:text-xl flex items-center justify-center gap-3 rounded-full overflow-hidden transition-all group ${primary ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] md:shadow-[0_0_40px_rgba(255,255,255,0.3)]' : 'glass-panel text-white hover:border-neonPink/50'}`}>
    {primary && <div className="absolute inset-0 bg-gradient-to-r from-neonPink to-neonPurple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
    <span className="relative z-10">{children}</span>
    <span className="relative z-10 group-hover:translate-x-1 transition-transform">{icon}</span>
  </motion.button>
);

const FeatureTag = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1.5 md:gap-3 text-white/80 font-medium text-[10px] md:text-base justify-start">
    <div className="w-3.5 h-3.5 md:w-6 md:h-6 rounded-full bg-neonPurple/20 flex items-center justify-center border border-neonPurple/30 flex-shrink-0"><CheckCircle2 size={8} className="text-neonPurple md:w-[14px] md:h-[14px]" /></div>
    {text}
  </div>
);

// --- SECCIONES PRINCIPALES ---

const ComparisonTable = () => {
  const features = [
    { name: "Tu Entrada", bad: "PDF Falsificable", good: "Hash Seguro" },
    { name: "Si no puedes ir", bad: "Pierdes la plata", good: "Vende en la App" },
    { name: "En la puerta", bad: "Buscando mail", good: "QR en 1 toque" },
    { name: "Vida Social", bad: "Nula", good: "Conecta & NameDrop" },
    { name: "Beneficios", bad: "Ninguno", good: "XP y Tragos Gratis" },
  ];

  return (
    <section className="py-8 md:py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-black text-white text-center mb-6 md:mb-16 uppercase tracking-tighter leading-tight">
          Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-neonPurple">DyzGO</span>
        </h2>
        
        {/* VISTA PC: TABLA */}
        <div className="hidden md:block">
          <SpotlightCard className="p-0 border border-white/10 bg-black/40">
              <div className="grid grid-cols-3 border-b border-white/10 p-6 text-sm font-bold uppercase tracking-widest text-gray-500">
                <div className="text-left pl-6">Experiencia</div>
                <div className="text-center">Otras Apps</div>
                <div className="text-center text-neonPink">DyzGO App</div>
              </div>
              {features.map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-white/5 p-6 items-center hover:bg-white/5 transition-colors">
                  <div className="font-bold text-white text-base text-left pl-6">{row.name}</div>
                  <div className="text-center text-gray-500 flex flex-row justify-center items-center gap-2 text-sm font-medium">
                      <XCircle size={14} className="text-red-900 shrink-0"/> {row.bad}
                  </div>
                  <div className="text-center text-white font-bold flex flex-row justify-center items-center gap-2 text-sm shadow-neon">
                      <CheckCircle2 size={16} className="text-neonPink drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] shrink-0"/> {row.good}
                  </div>
                </div>
              ))}
          </SpotlightCard>
        </div>

        {/* VISTA CELULAR: LISTA COMPACTA */}
        <div className="md:hidden space-y-2">
          {features.map((row, i) => (
             <div key={i} className="bg-white/5 rounded-xl p-2.5 flex items-center justify-between border border-white/5">
                <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-[11px] mb-0.5">{row.name}</span>
                    <span className="text-[9px] text-gray-500 line-through decoration-red-900/50">{row.bad}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-neonPink/10 px-2 py-1 rounded-lg border border-neonPink/20">
                    <CheckCircle2 size={10} className="text-neonPink shrink-0"/> 
                    <span className="text-white font-bold text-[9px]">{row.good}</span>
                </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- PÁGINA PRINCIPAL ---
export default function DyzgoFinalVFinal() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const scrollToBottom = () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); };
  const scrollToGodMode = () => { document.getElementById('god-mode-section')?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-neonPink/30 font-sans relative overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonPink via-neonPurple to-neonPink z-[200] origin-left shadow-[0_0_15px_rgba(217,70,239,0.8)]" style={{ scaleX }} />
      <AnimatePresence mode="wait">{loading && <Preloader onComplete={() => setLoading(false)} />}</AnimatePresence>
      <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 1.5 }}>
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#581c87] opacity-40 blur-[150px] animate-pulse" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#db2777] opacity-30 blur-[150px] animate-pulse" />
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[60vh] md:min-h-[90vh] flex flex-col justify-center items-center md:items-start px-4 md:px-20 overflow-hidden z-10 pt-16 md:pt-0">
           <div className="relative z-10 w-full max-w-[95vw] flex flex-col items-center md:items-start text-center md:text-left">
               
               {/* TÍTULOS */}
               <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                  <h1 className="text-5xl md:text-[11vw] leading-none font-black tracking-tight text-white mix-blend-overlay opacity-60 uppercase break-words">Aquí empieza,</h1>
                  <h1 className="text-7xl md:text-[13vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neonPink via-white to-neonPurple animate-pulse pb-4 pr-4 -mt-2 md:-mt-8 drop-shadow-[0_0_40px_rgba(168,85,247,0.5)] break-words">DyzGO.</h1>
               </motion.div>
               
               <div className="mt-8 md:mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-end w-full pb-4 gap-8 md:gap-12">
                  <p className="text-sm md:text-3xl font-light w-full max-w-sm md:max-w-2xl mx-auto md:mx-0 text-white/90 leading-tight text-center md:text-left">
                      Tu entrada segura, tus amigos, tu noche. La app que esperabas para salir tranquilo.
                      <br/><span className="text-neonPink font-bold">Sin estafas. Sin dramas.</span>
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-4 w-full max-w-[280px] md:max-w-none md:w-auto justify-center md:justify-end">
                      <LiquidButton primary icon={<Smartphone size={24}/>} onClick={() => setModalOpen(true)}>Descargar</LiquidButton>
                      <LiquidButton icon={<BarChart3 size={24}/>} onClick={scrollToGodMode}>Productor</LiquidButton>
                  </div>
               </div>
           </div>
        </section>

        {/* 2. USER EXPERIENCE MODULES */}
        <section className="py-8 md:py-32 px-4 md:px-12 relative z-10 space-y-8 md:space-y-40">
           
           {/* DECIDE RAPIDO */}
           <div className="flex flex-col lg:flex-row gap-4 md:gap-16 items-center">
               <div className="lg:w-2/5 order-1 lg:order-1 flex flex-col items-start text-left w-full">
                 <h2 className="text-2xl md:text-7xl font-black mb-2 md:mb-8 text-white uppercase tracking-tighter leading-none">Decide <span className="text-neonPink">Rápido.</span></h2>
                 <p className="text-[11px] md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-10 w-full max-w-lg">¿No sabes dónde ir? DyzGO te muestra lo que está pasando ahora mismo.</p>
                 <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-sm"><FeatureTag text="Filtros Género" /><FeatureTag text="Eventos Guardados" /><FeatureTag text="Alertas FOMO" /><FeatureTag text="Compra Rápida" /></div>
               </div>
               
               <SpotlightCard className="w-full lg:w-3/5 h-[160px] md:h-[500px] border border-white/10 flex items-center justify-center p-4 md:p-12 bg-white/5 backdrop-blur-xl order-2 lg:order-2">
                 <div className="flex flex-col gap-3 w-full max-w-sm md:max-w-2xl mx-auto scale-75 md:scale-100 origin-center">
                   <div className="flex gap-3 overflow-hidden opacity-30 justify-center">{[1,2].map(i => (<div key={i} className="min-w-[80px] md:min-w-[200px] h-16 md:h-32 glass-panel rounded-2xl border-white/10" />))}</div>
                   <div className="glass-panel p-3 md:p-6 rounded-2xl md:rounded-3xl border-neonPink/50 z-10">
                     <div className="flex justify-between items-center mb-2 md:mb-4"><div className="h-2 md:h-4 w-16 md:w-32 bg-white/20 rounded-full" /><Heart className="text-neonPink fill-neonPink w-4 h-4 md:w-5 md:h-5" /></div>
                     <div className="h-6 md:h-12 w-full bg-gradient-to-r from-neonPink/20 to-transparent rounded-lg md:rounded-xl mb-2 md:mb-4" />
                     <div className="flex justify-between gap-3"><div className="h-8 md:h-12 flex-1 bg-neonPink rounded-lg md:rounded-xl flex items-center justify-center font-bold text-black text-[10px] md:text-sm uppercase">Comprar</div><div className="h-8 md:h-12 w-8 md:w-12 glass-panel rounded-lg md:rounded-xl flex items-center justify-center border-white/20"><Filter className="w-3 h-3 md:w-5 md:h-5"/></div></div>
                   </div>
                 </div>
               </SpotlightCard>
           </div>

           {/* --- SECCIÓN PROXIMITY CONNECT --- */}
           <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-16 items-center">
               <div className="lg:w-1/2 relative order-1 lg:order-1 flex flex-col items-start text-left w-full">
                 <h2 className="text-2xl md:text-7xl font-black mb-2 md:mb-8 text-white uppercase tracking-tighter relative z-10 leading-none">Tocar es <span className="text-neonPurple">Conectar.</span></h2>
                 <p className="text-[11px] md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-10 relative z-10 w-full max-w-lg">
                   Olvídate de buscar en Instagram o WhatsApp. Haz amigos con <strong>NameDrop</strong>.
                 </p>
                 <div className="grid grid-cols-2 gap-2 md:gap-4 relative z-10 w-full max-w-sm"><FeatureTag text="NFC Requests" /><FeatureTag text="Transferencia Tickets" /><FeatureTag text="Envío Directo" /><FeatureTag text="Conexión Magica" /></div>
               </div>
               
               <SpotlightCard className="w-full lg:w-1/2 h-[160px] md:h-auto md:aspect-square flex items-center justify-center border border-white/10 bg-black/80 backdrop-blur-3xl overflow-hidden relative p-0 order-2 lg:order-2">
                   <div className="relative flex items-center justify-center w-full h-full scale-50 md:scale-100">
                     <div className="absolute z-20 p-6 md:p-8 bg-black/50 rounded-full backdrop-blur-md border border-neonPurple shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                        <Wifi size={50} className="md:w-20 md:h-20 text-neonPurple drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                     </div>
                     {[0, 1, 2].map((index) => (
                       <motion.div
                         key={index}
                         className="absolute rounded-full border border-neonPurple/30"
                         initial={{ scale: 0.5, opacity: 0 }}
                         animate={{ scale: [0.5, 3.5], opacity: [0.8, 0], borderWidth: ["1px", "4px", "0px"] }}
                         transition={{ duration: 3, repeat: Infinity, delay: index * 0.8, ease: "easeOut" }}
                         style={{ width: '120px', height: '120px', boxShadow: '0 0 30px rgba(168, 85, 247, 0.2) inset' }}
                       />
                     ))}
                   </div>
               </SpotlightCard>
           </div>

           {/* GAMIFICATION ENGINE */}
           <div className="w-full">
               <SpotlightCard className="w-full border border-white/10 p-0 flex flex-col lg:flex-row overflow-hidden bg-white/[0.03] backdrop-blur-2xl">
                   <div className="w-full lg:w-1/2 p-4 md:p-16 flex flex-col justify-center relative z-20 text-left items-start order-1 lg:order-1">
                     <h2 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-6 uppercase tracking-tighter leading-none">Sube de <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-neonPurple">Nivel.</span></h2>
                     <p className="text-[11px] md:text-lg text-gray-300 mb-4 md:mb-8 leading-relaxed w-full max-w-lg">Cada salida cuenta. Suma XP y gana recompensas.</p>
                     <div className="grid grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-10 w-full max-w-sm lg:max-w-none">
                       <div className="glass-panel p-2.5 md:p-4 rounded-xl md:rounded-2xl border-neonPink/20 bg-white/5 flex flex-col items-start"><TrendingUp size={14} className="text-neonPink mb-1 md:w-5 md:h-5" /><div className="text-[9px] md:text-xs text-gray-400 font-bold uppercase">Tu Ranking</div><div className="text-sm md:text-2xl font-black text-white">#12 <span className="text-[9px] md:text-[10px] text-neonPink uppercase">STGO</span></div></div>
                       <div className="glass-panel p-2.5 md:p-4 rounded-xl md:rounded-2xl border-neonPurple/20 bg-white/5 flex flex-col items-start"><Gift size={14} className="text-neonPurple mb-1 md:w-5 md:h-5" /><div className="text-[9px] md:text-xs text-gray-400 font-bold uppercase">Recompensas</div><div className="text-sm md:text-2xl font-black text-white">4 <span className="text-[9px] md:text-[10px] text-neonPurple uppercase">READY</span></div></div>
                     </div>
                     <div className="space-y-1 md:space-y-4 flex flex-col items-start"><FeatureTag text="Party Stats Mensuales" /><FeatureTag text="Desbloqueo de Medallas" /><FeatureTag text="XP por Asistencia" /></div>
                   </div>
                   <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 md:p-10 z-20 bg-white/5 lg:bg-transparent order-2 lg:order-2 h-[160px] md:h-auto">
                     <motion.div whileHover={{ y: -10 }} className="w-full max-w-sm glass-panel rounded-2xl md:rounded-[2rem] p-4 md:p-8 shadow-2xl border border-white/20 backdrop-blur-3xl bg-white/[0.05] scale-75 md:scale-100">
                         <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-8">
                            <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-neonPink to-neonPurple p-[2px] relative flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center overflow-hidden"><Crown size={18} className="text-white md:w-8 md:h-8" /></div>
                            </div>
                            <div><div className="text-base md:text-2xl font-bold text-white">Party King</div><div className="text-neonPink font-bold tracking-widest text-[9px] md:text-xs">LEVEL 12 VIP</div></div>
                         </div>
                         <div className="space-y-2 md:space-y-3">
                            <div className="flex justify-between text-[8px] md:text-[10px] text-white/60 font-black uppercase tracking-widest"><span>Experience Progress</span><span>92%</span></div>
                            <div className="h-2 md:h-4 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5"><motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-neonPurple via-neonPink to-neonPurple rounded-full" /></div>
                         </div>
                     </motion.div>
                   </div>
               </SpotlightCard>
           </div>

           {/* 4. COMPARISON TABLE */}
           <ComparisonTable />

           {/* WALLET */}
           <div className="flex flex-col lg:flex-row gap-4 md:gap-16 items-center">
               <div className="lg:w-1/2 order-1 lg:order-1 text-left flex flex-col items-start w-full">
                 <h2 className="text-2xl md:text-7xl font-black mb-2 md:mb-8 text-white uppercase tracking-tighter leading-none">Blindado & <span className="text-neonPink">Wallet.</span></h2>
                 <p className="text-[11px] md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-10 max-w-lg">Tus entradas son tuyas. Guárdalas en Apple Wallet.</p>
                 <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-sm"><FeatureTag text="Hash Dinámico" /><FeatureTag text="Reventa Segura" /><FeatureTag text="Apple Wallet" /><FeatureTag text="Storage" /></div>
               </div>
               <SpotlightCard className="w-full lg:w-1/2 h-[160px] md:h-auto md:aspect-[4/3] flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl order-2 lg:order-2">
                   <div className="flex gap-2 md:gap-8 items-center w-full justify-center px-4 scale-75 md:scale-100">
                     <div className="w-20 md:w-40 h-32 md:h-60 bg-red-900/10 border border-red-500/30 rounded-2xl flex flex-col items-center justify-center relative opacity-50"><LockIcon className="text-red-500 mb-2 w-4 h-4 md:w-6 md:h-6"/><span className="text-[8px] md:text-[10px] text-red-500 font-bold uppercase">Invalidado</span></div>
                     <div className="w-24 md:w-48 h-36 md:h-72 bg-neonPink/10 border border-neonPink rounded-2xl flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(217,70,239,0.3)]">
                        <div className="absolute top-0 w-full h-1 bg-neonPink animate-scan" /><QrCode className="text-white w-10 h-10 md:w-24 md:h-24 mb-3"/><span className="text-[8px] md:text-xs text-neonPink font-mono font-bold uppercase">Hash_Active</span>
                     </div>
                   </div>
               </SpotlightCard>
           </div>
        </section>

        {/* 5. PRODUCER GOD MODE SECTION */}
        <section id="god-mode-section" className="py-8 md:py-40 px-4 md:px-6 relative scroll-mt-10">
           <div className="max-w-[1800px] mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-16 text-left">
                   <div className="flex flex-col items-start">
                     <div className="flex items-center gap-3 text-neonPurple font-bold mb-2 md:mb-4 tracking-widest uppercase text-xs md:text-sm"><Database size={16} className="md:w-5 md:h-5"/> Producer Suite</div>
                     <h2 className="text-3xl md:text-9xl font-black leading-none text-white uppercase">God <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonPink">Mode.</span></h2>
                   </div>
               </div>

               <SpotlightCard className="w-full rounded-[1.5rem] md:rounded-[3rem] p-3 md:p-12 relative overflow-hidden shadow-[0_0_100px_rgba(168,85,247,0.2)] border border-white/10 bg-white/5 backdrop-blur-2xl">
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-12 border-b border-white/10 pb-3 md:pb-6 gap-2 md:gap-4 text-left">
                     <div className="flex flex-col"><span className="text-[9px] md:text-xs text-gray-400 font-bold tracking-widest uppercase">Dashboard Activo</span><span className="text-sm md:text-xl font-bold text-white uppercase">Neon Santiago Festival</span></div>
                     <div className="px-2 py-1 md:px-4 md:py-2 rounded-full bg-neonPink/10 border border-neonPink/20 text-neonPink text-[9px] md:text-xs font-bold animate-pulse flex items-center gap-1.5"><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-neonPink rounded-full shadow-[0_0_10px_#d946ef]"/> LIVE DATA</div>
                   </div>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-8">
                     <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-2 md:gap-4">
                        <div className="glass-panel rounded-xl md:rounded-[2rem] p-3 md:p-8 flex-1 bg-gradient-to-br from-neonPurple/20 to-transparent border-neonPurple/30 flex flex-col justify-between h-[100px] md:h-auto">
                           <div className="flex justify-between items-start mb-0 md:mb-6 w-full"><div className="p-1 md:p-3 bg-white/10 rounded-lg md:rounded-xl"><CreditCard className="text-white w-3 h-3 md:w-6 md:h-6"/></div><span className="text-neonPurple text-[9px] md:text-sm font-bold">+24%</span></div>
                           <div>
                               <div className="text-[8px] md:text-sm text-gray-300 font-bold tracking-widest mb-0.5 uppercase">Revenue</div>
                               <div className="text-base md:text-5xl font-black text-white">$14.5M</div>
                           </div>
                        </div>
                        <div className="glass-panel rounded-xl md:rounded-[2rem] p-3 md:p-8 flex-1 flex flex-col justify-between h-[100px] md:h-auto">
                           <div className="flex justify-between items-center mb-0 md:mb-4 text-gray-300 font-bold tracking-widest uppercase text-[8px] md:text-sm w-full">Sold <Ticket size={16} className="hidden md:block"/></div>
                           <div className="text-base md:text-4xl font-black text-white mb-1 md:mb-4">1,240 <span className="text-[9px] md:text-lg text-gray-500 font-normal">/ 1.5k</span></div>
                           <div className="w-full bg-white/10 h-1 md:h-3 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "82%" }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-neonPurple to-neonPink shadow-[0_0_10px_#d946ef]"/></div>
                        </div>
                     </div>
                     
                     <div className="lg:col-span-5 glass-panel rounded-xl md:rounded-[2rem] p-3 md:p-8 relative flex flex-col bg-white/5 h-[120px] md:h-auto"><div className="flex justify-between items-center mb-4 text-gray-300 font-bold tracking-widest uppercase text-[9px] md:text-sm">Acceso en Vivo <Globe size={14} className="w-3 h-3 md:w-4 md:h-4"/></div><div className="flex-1 flex items-end justify-between gap-1">{Array(30).fill(0).map((_, i) => (<motion.div key={i} animate={{ height: `${Math.random() * 70 + 20}%` }} transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror", delay: i*0.05 }} className="flex-1 bg-gradient-to-t from-neonPink/40 via-neonPurple/40 to-transparent rounded-t-sm" />))}</div></div>
                     
                     <div className="lg:col-span-3 flex flex-col gap-2 md:gap-3">
                        <div className="glass-panel rounded-xl md:rounded-[2rem] p-3 md:p-6 h-full flex flex-col gap-2 md:gap-3 bg-white/5">
                           <span className="text-gray-300 font-bold uppercase text-[9px] md:text-xs mb-0 md:mb-3 text-left">Management</span>
                           <button className="w-full py-2 md:py-4 bg-white/5 hover:bg-white/10 rounded-lg md:rounded-xl flex items-center gap-2 md:gap-4 px-3 md:px-4 transition-all group border border-white/5"><div className="p-1 md:p-2 bg-neonPink/20 rounded-lg text-neonPink"><Gift size={12} className="md:w-4 md:h-4"/></div><div className="text-left font-bold text-[9px] md:text-xs uppercase">Cortesías</div></button>
                           <button className="w-full py-2 md:py-4 bg-white/5 hover:bg-white/10 rounded-lg md:rounded-xl flex items-center gap-2 md:gap-4 px-3 md:px-4 transition-all group border border-white/5"><div className="p-1 md:p-2 bg-neonPurple/20 rounded-lg text-neonPurple"><Users size={12} className="md:w-4 md:h-4"/></div><div className="text-left font-bold text-[9px] md:text-xs uppercase">PR Embajadores</div></button>
                           <button className="w-full py-2 md:py-4 bg-white/5 hover:bg-white/10 rounded-lg md:rounded-xl flex items-center gap-2 md:gap-4 px-3 md:px-4 transition-all border border-white/5"><div className="p-1 md:p-2 bg-neonCyan/20 rounded-lg text-neonCyan"><Activity size={12} className="md:w-4 md:h-4"/></div><div className="text-left font-bold text-[9px] md:text-xs uppercase">Analytics</div></button>
                        </div>
                     </div>
                   </div>
               </SpotlightCard>
           </div>
        </section>

        {/* 6. FOOTER */}
        <footer id="footer-section" className="py-8 md:py-40 px-6 text-center relative overflow-hidden z-10">
           <div className="absolute inset-0 bg-gradient-to-t from-neonPurple/20 to-transparent pointer-events-none" />
           <div className="max-w-4xl mx-auto relative z-10">
             <h3 className="text-2xl md:text-8xl font-black mb-6 md:mb-16 text-white tracking-tighter uppercase italic">ARE YOU READY?</h3>
             <div className="flex flex-row justify-center gap-3 md:gap-8 mb-8 md:mb-24">
                 <button className="w-auto bg-white text-black px-5 py-2.5 md:px-12 md:py-6 rounded-full font-bold text-xs md:text-xl hover:scale-105 transition-transform flex items-center gap-2 md:gap-3 justify-center shadow-[0_0_50px_rgba(255,255,255,0.5)]"><span className="text-base md:text-3xl"></span> App Store</button>
                 <button className="w-auto glass-panel text-white px-5 py-2.5 md:px-12 md:py-6 rounded-full font-bold text-xs md:text-xl hover:bg-white/10 transition-colors flex items-center gap-2 md:gap-3 justify-center border border-white/20"><Play size={14} className="fill-white md:w-6 md:h-6"/> Google Play</button>
             </div>
             
             {/* SIGNATURES - FIRMAS TIPOGRÁFICAS ANIMADAS (SIN BLOQUE DE LUZ) */}
             <div className="mb-12 flex flex-col items-center justify-center gap-3 md:gap-4">
                <span className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.2em]">Founders</span>
                <div className="flex flex-row items-center gap-8 md:gap-16">
                   <FounderSignature name="Clemente Meza" delay={0.2} />
                   <FounderSignature name="Emilio Miserda" delay={1.5} />
                </div>
             </div>

             <div className="border-t border-white/10 pt-6 md:pt-10 flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-8">
                 {/* COPYRIGHT LIMPIO */}
                 <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[9px] md:text-sm">
                   © 2026 DyzGO Inc.
                 </div>
                 
                 <div className="flex flex-row gap-2 md:gap-4 items-center w-auto md:w-auto">
                    <Link href="/terms" className="w-auto px-3 py-1.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neonPurple/50 transition-all text-[8px] md:text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center justify-center gap-1.5 shadow-lg backdrop-blur-sm">
                       <FileText size={10} className="md:w-[14px]"/> Términos
                    </Link>
                    <Link href="/privacy" className="w-auto px-3 py-1.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neonPurple/50 transition-all text-[8px] md:text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center justify-center gap-1.5 shadow-lg backdrop-blur-sm">
                       <Shield size={10} className="md:w-[14px]"/> Privacidad
                    </Link>
                    <a href="https://instagram.com/dyzgoapp" target="_blank" className="w-auto px-3 py-1.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neonPink/50 transition-all text-[8px] md:text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center justify-center gap-1.5 shadow-lg backdrop-blur-sm group">
                       <Instagram size={10} className="group-hover:text-neonPink transition-colors md:w-[14px]"/> @dyzgoapp
                    </a>
                 </div>
             </div>
           </div>
        </footer>

      </motion.div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
        .font-signature { font-family: 'Mrs Saint Delafield', cursive; }
        @keyframes scan { 0% { top: 0; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 3s linear infinite; }
        .glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
      `}</style>
    </div>
  );
}
