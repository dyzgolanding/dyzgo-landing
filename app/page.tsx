"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Zap, Smartphone, ShieldCheck, Users, 
  BarChart3, Wifi, Trophy, ArrowRight, 
  QrCode, Play, Repeat, Database, 
  CheckCircle2, Crown, Gift, MapPin, 
  CreditCard, Ticket, Megaphone, Activity, 
  Lock as LockIcon, Search, Globe, Rocket, Star, 
  Filter, Heart, Bell, UserPlus, TrendingUp, Wallet, X, Mail,
  Check, XCircle, Shield, Flame, Instagram, FileText
} from "lucide-react";

// --- 1. PRELOADER (LIMPIO: SOLO BARRA Y LOGO) ---
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
      className="fixed inset-0 z-[250] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-neonPink/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none mb-12 text-center"
        >
          DyzGO<motion.span 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 1.5, repeat: Infinity }} 
            className="text-neonPink"
          >.</motion.span>
        </motion.h1>

        {/* BARRA DE PROGRESO SIN TEXTO */}
        <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden relative border border-white/10 shadow-inner">
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
          <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} className="w-full max-w-md glass-panel rounded-[2.5rem] p-8 relative border border-neonPink/30 shadow-[0_0_80px_rgba(168,85,247,0.4)]">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/20 rounded-full transition-colors"><X size={20} className="text-white" /></button>
            <div className="text-center mb-8 mt-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-neonPink to-neonPurple mb-6 shadow-[0_0_30px_rgba(217,70,239,0.5)]"><Rocket size={36} className="text-white fill-white" /></div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-3 leading-none">Early Access</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">La app que cambiará tu vida social está por lanzarse. Asegura tu username y obtén beneficios de fundador.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-neonPink transition-colors" size={20} />
                <input type="email" placeholder="tu@email.com" className="w-full bg-black/60 border border-white/10 rounded-2xl py-5 pl-14 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neonPink transition-all" />
              </div>
              <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-neonPink to-neonPurple text-white font-black text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-neonPink/20 tracking-wide">UNIRME A LA LISTA</button>
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
    <motion.div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0)} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, ease: "easeOut" }} className={`glass-panel rounded-[2.5rem] relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute -inset-px transition duration-300 z-10" style={{ background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`, opacity }} />
      {children}
    </motion.div>
  );
};

const LiquidButton = ({ children, icon, primary, onClick }: any) => (
  <motion.button onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`relative px-8 py-4 font-bold text-lg flex items-center gap-3 rounded-full overflow-hidden transition-all group ${primary ? 'bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.3)]' : 'glass-panel text-white hover:border-neonPink/50'}`}>
    {primary && <div className="absolute inset-0 bg-gradient-to-r from-neonPink to-neonPurple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
    <span className="relative z-10">{children}</span>
    <span className="relative z-10 group-hover:translate-x-1 transition-transform">{icon}</span>
  </motion.button>
);

const FeatureTag = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-white/80 font-medium">
    <div className="w-6 h-6 rounded-full bg-neonPurple/20 flex items-center justify-center border border-neonPurple/30"><CheckCircle2 size={14} className="text-neonPurple" /></div>
    {text}
  </div>
);

// --- SECCIONES PRINCIPALES ---

const HowItWorks = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Salir nunca fue tan fácil</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">Olvídate de los PDF perdidos y las webs que se caen. Tu noche fluye.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Flame size={32} />, title: "1. ELIGE TU MAMBO", desc: "No te pierdas nada. Encuentra las fiestas más prendidas, sigue a tus productoras favoritas y entérate primero de los Early Birds." },
          { icon: <Smartphone size={32} />, title: "2. COMPRA EN SEGUNDOS", desc: "Sin formularios eternos. Compra tu entrada rápido y seguro. Tu ticket queda guardado en la App y en tu Wallet." },
          { icon: <Zap size={32} />, title: "3. ENTRA Y DISFRUTA", desc: "Tu QR carga al instante, incluso con mala señal. Validas en la puerta y listo. Menos tiempo haciendo fila, más tiempo bailando." }
        ].map((item, i) => (
          <SpotlightCard key={i} className="p-10 border border-white/10 bg-white/5 flex flex-col items-center text-center group hover:border-neonPink/50 transition-colors">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neonPink/10 to-neonPurple/10 flex items-center justify-center mb-8 text-white border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500">
                <div className="text-neonPink group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">
                    {item.icon}
                </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase italic tracking-tighter">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">{item.desc}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-tighter leading-tight">
        Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-neonPurple">DyzGO</span> para comprar o vender tus eventos
      </h2>
      <SpotlightCard className="p-0 border border-white/10 bg-black/40">
        <div className="grid grid-cols-3 border-b border-white/10 p-6 text-sm font-bold uppercase tracking-widest text-gray-500">
          <div>Experiencia</div>
          <div className="text-center">Otras Apps</div>
          <div className="text-center text-neonPink">DyzGO App</div>
        </div>
        {[
          { name: "Tu Entrada", bad: "PDF Falsificable", good: "Hash Seguro & Wallet" },
          { name: "Si no puedes ir", bad: "Pierdes la plata o te estafan", good: "Vende seguro en la App" },
          { name: "En la puerta", bad: "Buscando el mail...", good: "QR listo en 1 toque" },
          { name: "Vida Social", bad: "Nula", good: "Conecta con NameDrop" },
          { name: "Beneficios", bad: "Ninguno", good: "Gana XP y Tragos Gratis" },
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 border-b border-white/5 p-6 items-center hover:bg-white/5 transition-colors">
            <div className="font-bold text-white text-sm md:text-base">{row.name}</div>
            <div className="text-center text-gray-500 flex flex-col md:flex-row justify-center items-center gap-2 text-xs md:text-sm font-medium">
                <XCircle size={14} className="text-red-900"/> {row.bad}
            </div>
            <div className="text-center text-white font-bold flex flex-col md:flex-row justify-center items-center gap-2 text-xs md:text-sm shadow-neon">
                <CheckCircle2 size={16} className="text-neonPink drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"/> {row.good}
            </div>
          </div>
        ))}
      </SpotlightCard>
    </div>
  </section>
);

// --- PÁGINA PRINCIPAL ---
export default function DyzgoFinalVFinal() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scrollToBottom = () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); };
  const scrollToGodMode = () => { document.getElementById('god-mode-section')?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <div className="min-h-[400vh] bg-black text-white selection:bg-neonPink/30 font-sans relative overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonPink via-neonPurple to-neonPink z-[200] origin-left shadow-[0_0_15px_rgba(217,70,239,0.8)]" style={{ scaleX }} />
      <AnimatePresence mode="wait">{loading && <Preloader onComplete={() => setLoading(false)} />}</AnimatePresence>
      <EarlyAccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 1.5 }}>
        <div className="fixed inset-0 z-0">
           <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#581c87] opacity-40 blur-[150px] animate-pulse" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#db2777] opacity-30 blur-[150px] animate-pulse" />
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden z-10">
           <div className="relative z-10 max-w-[95vw]">
               <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="flex flex-col">
                  <div className="mb-10 w-fit group">
                     <div className="relative inline-flex overflow-hidden rounded-full p-[2px] shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all duration-700 group-hover:shadow-[0_0_60px_rgba(217,70,239,0.7)]">
                        <span className="absolute inset-[-1000%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d946ef_0%,#a855f7_50%,#d946ef_100%)]" />
                        <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-black/95 px-8 py-3 text-sm font-black text-white backdrop-blur-3xl tracking-[0.3em] uppercase gap-4">
                           <div className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonPink opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-neonPink"></span></div>
                           EL CARRETE CAMBIÓ
                        </div>
                     </div>
                  </div>
                  <h1 className="text-[11vw] leading-[0.85] font-black tracking-tighter text-white mix-blend-overlay opacity-60 uppercase">Aquí empieza,</h1>
                  <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neonPink via-white to-neonPurple animate-pulse -mt-2 md:-mt-8 drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">DyzGO.</h1>
               </motion.div>
               
               <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-12">
                  <p className="text-xl md:text-3xl font-light max-w-2xl text-white/90 leading-tight">
                      Tu entrada segura, tus amigos, tu noche.
                      <br/>La app que esperabas para salir tranquilo.
                      <br/><span className="text-neonPink font-bold">Sin estafas. Sin dramas.</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                      <LiquidButton primary icon={<Smartphone size={20}/>} onClick={scrollToBottom}>Descargar App</LiquidButton>
                      <LiquidButton icon={<BarChart3 size={20}/>} onClick={scrollToGodMode}>Soy Productor</LiquidButton>
                  </div>
               </div>
           </div>
        </section>

        {/* 2. USER EXPERIENCE MODULES */}
        <section className="py-32 px-6 md:px-12 relative z-10 space-y-40">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter">Decide <span className="text-neonPink">Rápido.</span></h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-10">¿No sabes dónde ir? DyzGO te muestra lo que está pasando ahora mismo. Sigue a tus Djs y clubes favoritos.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><FeatureTag text="Filtros por Género y Mood" /><FeatureTag text="Eventos Guardados" /><FeatureTag text="Alertas FOMO" /><FeatureTag text="Compra en 1 min" /></div>
               </div>
               <SpotlightCard className="lg:w-1/2 h-[500px] border border-white/10 flex items-center justify-center p-12 bg-white/5 backdrop-blur-xl">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex gap-4 overflow-hidden opacity-30">{[1,2].map(i => (<div key={i} className="min-w-[200px] h-32 glass-panel rounded-2xl border-white/10" />))}</div>
                    <div className="glass-panel p-6 rounded-3xl border-neonPink/50 transform scale-105 z-10">
                      <div className="flex justify-between items-center mb-4"><div className="h-4 w-32 bg-white/20 rounded-full" /><Heart className="text-neonPink fill-neonPink" size={20} /></div>
                      <div className="h-12 w-full bg-gradient-to-r from-neonPink/20 to-transparent rounded-xl mb-4" />
                      <div className="flex justify-between gap-4"><div className="h-12 flex-1 bg-neonPink rounded-xl flex items-center justify-center font-bold text-black text-sm uppercase">Comprar</div><div className="h-12 w-12 glass-panel rounded-xl flex items-center justify-center border-white/20"><Filter size={18}/></div></div>
                    </div>
                  </div>
               </SpotlightCard>
           </div>

           {/* --- SECCIÓN PROXIMITY CONNECT: ANIMACIÓN WIFI GIGANTE --- */}
           <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="lg:w-1/2 relative">
                  <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter relative z-10">Tocar es <span className="text-neonPurple">Conectar.</span></h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-10 relative z-10">
                    Olvídate de buscar en Instagram o WhatsApp. Acercas tu iPhone al de tu amigo y listo. 
                    Haz amigos con <strong>NameDrop</strong> y transfiere entradas en un segundo. Sin intermediarios, solo tú y tu grupo.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10"><FeatureTag text="NFC Friend Request" /><FeatureTag text="Transferencia de Tickets" /><FeatureTag text="Envío Directo" /><FeatureTag text="Conexión Magica" /></div>
               </div>
               
               <SpotlightCard className="lg:w-1/2 aspect-square flex items-center justify-center border border-white/10 bg-black/80 backdrop-blur-3xl overflow-hidden relative p-0">
                   {/* NUEVA ANIMACIÓN DE ONDAS WIFI/NFC GIGANTES */}
                   <div className="relative flex items-center justify-center w-full h-full">
                     {/* Icono Central Gigante */}
                     <div className="absolute z-20 p-8 bg-black/50 rounded-full backdrop-blur-md border border-neonPurple shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                        <Wifi size={80} className="text-neonPurple drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                     </div>

                     {/* Ondas Expansivas Masivas */}
                     {[0, 1, 2].map((index) => (
                       <motion.div
                         key={index}
                         className="absolute rounded-full border border-neonPurple/30"
                         initial={{ scale: 0.5, opacity: 0 }}
                         animate={{
                           scale: [0.5, 3.5], // Escala mucho mayor para efecto "Gigante"
                           opacity: [0.8, 0],
                           borderWidth: ["1px", "4px", "0px"]
                         }}
                         transition={{
                           duration: 3,
                           repeat: Infinity,
                           delay: index * 0.8,
                           ease: "easeOut",
                         }}
                         style={{
                           width: '200px',
                           height: '200px',
                           boxShadow: '0 0 30px rgba(168, 85, 247, 0.2) inset',
                         }}
                       />
                     ))}
                   </div>
               </SpotlightCard>
           </div>

           {/* GAMIFICATION ENGINE */}
           <div className="w-full">
               <SpotlightCard className="w-full border border-white/10 p-0 flex flex-col md:flex-row overflow-hidden bg-white/[0.03] backdrop-blur-2xl">
                   <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-20">
                      <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Sube de <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-neonPurple">Nivel.</span></h2>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">Cada salida cuenta. Suma XP, sube en el ranking y gana recompensas reales: tragos, descuentos y accesos exclusivos.</p>
                      <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="glass-panel p-4 rounded-2xl border-neonPink/20 bg-white/5"><TrendingUp size={20} className="text-neonPink mb-2" /><div className="text-xs text-gray-400 font-bold uppercase">Tu Ranking</div><div className="text-2xl font-black text-white">#12 <span className="text-[10px] text-neonPink uppercase">STGO</span></div></div>
                        <div className="glass-panel p-4 rounded-2xl border-neonPurple/20 bg-white/5"><Gift size={20} className="text-neonPurple mb-2" /><div className="text-xs text-gray-400 font-bold uppercase">Recompensas</div><div className="text-2xl font-black text-white">4 <span className="text-[10px] text-neonPurple uppercase">READY</span></div></div>
                      </div>
                      <div className="space-y-4"><FeatureTag text="Party Stats Mensuales" /><FeatureTag text="Desbloqueo de Medallas" /><FeatureTag text="XP por Asistencia" /></div>
                   </div>
                   <div className="md:w-1/2 relative flex items-center justify-center p-10 z-20">
                      <motion.div whileHover={{ y: -10, rotateX: 5, rotateY: 5 }} className="w-full max-w-sm glass-panel rounded-[2.5rem] p-8 shadow-2xl border border-white/20 backdrop-blur-3xl bg-white/[0.05]">
                          <div className="flex items-center gap-4 mb-8">
                             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neonPink to-neonPurple p-[2px] relative flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center overflow-hidden"><Crown size={32} className="text-white" /></div>
                                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-black rounded-full border border-neonPurple flex items-center justify-center"><Trophy size={14} className="text-neonPurple"/></div>
                             </div>
                             <div><div className="text-2xl font-bold text-white">Party King</div><div className="text-neonPink font-bold tracking-widest text-xs">LEVEL 12 VIP</div></div>
                          </div>
                          <div className="space-y-3">
                             <div className="flex justify-between text-[10px] text-white/60 font-black uppercase tracking-widest"><span>Experience Progress</span><span>92%</span></div>
                             <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5"><motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-neonPurple via-neonPink to-neonPurple rounded-full" /></div>
                          </div>
                          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3">
                             {[1,2,3].map(i => (<div key={i} className="aspect-square glass-panel rounded-xl border-white/10 flex flex-col items-center justify-center opacity-60 bg-white/5"><Star size={16} className="text-neonPink mb-1" /><span className="text-[8px] text-white font-bold uppercase">Badge</span></div>))}
                          </div>
                      </motion.div>
                   </div>
               </SpotlightCard>
           </div>

           {/* 4. COMPARISON TABLE */}
           <ComparisonTable />

           {/* WALLET */}
           <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter">Blindado & <span className="text-neonPink">Wallet.</span></h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-10">Tus entradas son tuyas. Guárdalas en Apple Wallet. Si no puedes ir, véndelas de forma segura en el marketplace oficial. <span className="text-white font-bold">El código QR se regenera automáticamente solo cuando alguien compra tu ticket</span>, eliminando cualquier riesgo de estafa o clonación.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><FeatureTag text="Hash Dinámico" /><FeatureTag text="Reventa Segura" /><FeatureTag text="Apple Wallet" /><FeatureTag text="Storage" /></div>
               </div>
               <SpotlightCard className="lg:w-1/2 aspect-[4/3] flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl">
                   <div className="flex gap-4 md:gap-8 items-center w-full justify-center">
                      <div className="w-32 md:w-40 h-48 md:h-60 bg-red-900/10 border border-red-500/30 rounded-2xl flex flex-col items-center justify-center relative opacity-50"><LockIcon className="text-red-500 mb-2"/><span className="text-[10px] text-red-500 font-bold uppercase">Invalidado</span></div>
                      <div className="w-40 md:w-48 h-56 md:h-72 bg-neonPink/10 border border-neonPink rounded-2xl flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(217,70,239,0.3)]">
                         <div className="absolute top-0 w-full h-1 bg-neonPink animate-scan" /><QrCode className="text-white w-24 h-24 mb-4"/><span className="text-xs text-neonPink font-mono font-bold uppercase">Hash_Active</span>
                         <div className="mt-4 flex items-center gap-2 glass-panel px-3 py-1 rounded-full border-white/20"><Wallet size={12} className="text-white" /><span className="text-[8px] font-black uppercase text-white tracking-widest">Añadir a Wallet</span></div>
                      </div>
                   </div>
               </SpotlightCard>
           </div>
        </section>

        {/* 5. PRODUCER GOD MODE SECTION */}
        <section id="god-mode-section" className="py-40 px-6 relative scroll-mt-20">
           <div className="max-w-[1800px] mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-6">
                   <div>
                      <div className="flex items-center gap-3 text-neonPurple font-bold mb-4 tracking-widest uppercase text-sm"><Database size={18}/> Producer Suite</div>
                      <h2 className="text-6xl md:text-9xl font-black leading-none text-white uppercase">God <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonPink">Mode.</span></h2>
                   </div>
                   <div className="text-right max-w-lg hidden md:block"><p className="text-gray-300 text-lg">Deja de pelear con Excel. Ten el control total de tu plata y tus accesos en tiempo real. Dedícate a producir.</p></div>
               </div>

               <SpotlightCard className="w-full rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-[0_0_100px_rgba(168,85,247,0.2)] border border-white/10 bg-white/5 backdrop-blur-2xl">
                   <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                      <div className="flex flex-col"><span className="text-xs text-gray-400 font-bold tracking-widest uppercase">Dashboard Activo</span><span className="text-xl font-bold text-white uppercase">Neon Santiago Festival</span></div>
                      <div className="px-4 py-2 rounded-full bg-neonPink/10 border border-neonPink/20 text-neonPink text-xs font-bold animate-pulse flex items-center gap-2"><div className="w-2 h-2 bg-neonPink rounded-full shadow-[0_0_10px_#d946ef]"/> LIVE DATA FEED</div>
                   </div>
                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4 flex flex-col gap-6">
                         <div className="glass-panel rounded-[2rem] p-8 flex-1 bg-gradient-to-br from-neonPurple/20 to-transparent border-neonPurple/30"><div className="flex justify-between items-start mb-6"><div className="p-3 bg-white/10 rounded-xl"><CreditCard className="text-white"/></div><span className="text-neonPurple text-sm font-bold">+24%</span></div><div className="text-sm text-gray-300 font-bold tracking-widest mb-1 uppercase">Total Revenue</div><div className="text-5xl font-black text-white">$14.5M</div></div>
                         <div className="glass-panel rounded-[2rem] p-8 flex-1"><div className="flex justify-between items-center mb-4 text-gray-300 font-bold tracking-widest uppercase text-sm">Tickets Sold <Ticket size={16}/></div><div className="text-4xl font-black text-white mb-4">1,240 <span className="text-lg text-gray-500 font-normal">/ 1,500</span></div><div className="w-full bg-white/10 h-3 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "82%" }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-neonPurple to-neonPink shadow-[0_0_10px_#d946ef]"/></div></div>
                      </div>
                      <div className="lg:col-span-5 glass-panel rounded-[2rem] p-8 relative flex flex-col bg-white/5 h-[400px] lg:h-auto"><div className="flex justify-between items-center mb-6 text-gray-300 font-bold tracking-widest uppercase text-sm">Acceso en Vivo <Globe size={16}/></div><div className="flex-1 flex items-end justify-between gap-1">{Array(30).fill(0).map((_, i) => (<motion.div key={i} animate={{ height: `${Math.random() * 70 + 20}%` }} transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror", delay: i*0.05 }} className="flex-1 bg-gradient-to-t from-neonPink/40 via-neonPurple/40 to-transparent rounded-t-sm" />))}</div></div>
                      <div className="lg:col-span-3 flex flex-col gap-4">
                         <div className="glass-panel rounded-[2rem] p-6 h-full flex flex-col gap-3 bg-white/5">
                            <span className="text-gray-300 font-bold uppercase text-xs mb-3">Management</span>
                            <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-4 px-4 transition-all group border border-white/5"><div className="p-2 bg-neonPink/20 rounded-lg text-neonPink"><Gift size={16}/></div><div className="text-left font-bold text-xs uppercase">Cortesías</div></button>
                            <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-4 px-4 transition-all group border border-white/5"><div className="p-2 bg-neonPurple/20 rounded-lg text-neonPurple"><Users size={16}/></div><div className="text-left font-bold text-xs uppercase">PR Embajadores</div></button>
                            <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-xl flex items-center gap-4 px-4 transition-all border border-white/5"><div className="p-2 bg-neonCyan/20 rounded-lg text-neonCyan"><Activity size={16}/></div><div className="text-left font-bold text-xs uppercase">Analytics</div></button>
                         </div>
                      </div>
                   </div>
               </SpotlightCard>
           </div>
        </section>

        {/* 6. FOOTER (CORREGIDO Y ORDENADO) */}
        <footer id="footer-section" className="py-40 px-6 text-center relative overflow-hidden z-10">
           <div className="absolute inset-0 bg-gradient-to-t from-neonPurple/20 to-transparent pointer-events-none" />
           <div className="max-w-4xl mx-auto relative z-10">
              <h3 className="text-5xl md:text-8xl font-black mb-16 text-white tracking-tighter uppercase italic">ARE YOU READY?</h3>
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-24">
                 <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3 justify-center shadow-[0_0_50px_rgba(255,255,255,0.5)]"><span className="text-3xl"></span> App Store</button>
                 <button className="glass-panel text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-colors flex items-center gap-3 justify-center border border-white/20"><Play size={24} className="fill-white"/> Google Play</button>
              </div>
              
              {/* Elementos de Confianza y Links Legales - BOTONES PREMIUM ALINEADOS */}
              <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
                 {/* COPY */}
                 <div className="flex items-center gap-2 mb-4 md:mb-0 text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                    <Zap className="text-neonPink fill-neonPink" size={20}/> 
                    © 2026 DyzGO Inc. Todos los derechos reservados.
                 </div>
                 
                 {/* LINKS (SINGLE ROW) */}
                 <div className="flex flex-row gap-4 items-center">
                    <a href="/terms" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neonPurple/50 transition-all text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center gap-2 shadow-lg backdrop-blur-sm">
                       <FileText size={14}/> Términos
                    </a>
                    <a href="/privacy" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neonPurple/50 transition-all text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center gap-2 shadow-lg backdrop-blur-sm">
                       <Shield size={14}/> Privacidad
                    </a>
                    <a href="https://instagram.com/dyzgoapp" target="_blank" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neonPink/50 transition-all text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center gap-2 shadow-lg backdrop-blur-sm group">
                       <Instagram size={14} className="group-hover:text-neonPink transition-colors"/> @dyzgoapp
                    </a>
                 </div>
              </div>
           </div>
        </footer>

      </motion.div>
      <style jsx global>{`
        @keyframes scan { 0% { top: 0; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 3s linear infinite; }
        .glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
      `}</style>
    </div>
  );
}