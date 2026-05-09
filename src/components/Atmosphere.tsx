import { motion } from 'motion/react';

function PalmTree({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
       <path d="M50,100 Q45,70 50,20" stroke="currentColor" strokeWidth="4" fill="none" />
       <path d="M50,25 Q30,25 15,45" stroke="currentColor" strokeWidth="2" fill="none" />
       <path d="M50,30 Q35,30 25,55" stroke="currentColor" strokeWidth="2" fill="none" />
       <path d="M50,25 Q70,25 85,45" stroke="currentColor" strokeWidth="2" fill="none" />
       <path d="M50,30 Q65,30 75,55" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function Atmosphere() {
  return (
    <div className="fixed inset-0 -z-10 bg-deep-purple overflow-hidden">
      {/* Sun Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-t from-neon-pink via-sunset-orange to-transparent blur-3xl opacity-40"
      />

      {/* Palm Silhouettes */}
      <div className="absolute bottom-0 w-full flex justify-between px-[5vw] pointer-events-none opacity-20 text-black">
        <PalmTree className="w-[40vw] h-[70vh] transform translate-y-20 -scale-x-100" />
        <PalmTree className="w-[35vw] h-[60vh] transform translate-y-24" />
      </div>
      
      {/* Palm shadows / scanlines feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />

      {/* Grid Floor for that synthwave look */}
      <div className="absolute bottom-0 w-full h-[30vh] perspective-1000 rotate-x-60 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(transparent_0%,rgba(255,45,133,0.5)_100%),linear-gradient(90deg,rgba(255,45,133,0.5)_1px,transparent_1px),linear-gradient(rgba(255,45,133,0.5)_1px,transparent_1px)] bg-[size:100%_100%,40px_40px,40px_40px]" />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '110vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.5, 0] }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-neon-pink rounded-full blur-sm"
        />
      ))}
    </div>
  );
}
