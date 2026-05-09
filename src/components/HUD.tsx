import { motion } from 'motion/react';
import { Heart, Shield, Star, Zap, MapPin } from 'lucide-react';

export default function HUD() {
  return (
    <div className="fixed inset-0 pointer-events-none p-8 font-display">
      {/* Top Left: Location / Wanted Level */}
      <div className="absolute top-8 left-8 flex flex-col gap-2">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-6 h-6 ${i < 3 ? 'fill-neon-pink text-neon-pink glow-pink' : 'text-white/20'}`} 
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold uppercase tracking-tighter italic neon-text"
        >
          VICE CITY | WASHINGTON BEACH
        </motion.div>
      </div>

      {/* Top Right: Cash & Weapon info */}
      <div className="absolute top-8 right-8 flex flex-col items-end gap-2">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-4xl font-black text-neon-pink italic neon-text"
        >
          $12,450,230
        </motion.div>
        <motion.div
           initial={{ x: 50, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.1 }}
           className="glass px-4 py-2 rounded-lg flex items-center gap-4"
        >
          <div className="text-right">
             <div className="text-xs opacity-50 uppercase font-mono">Special</div>
             <div className="text-xl font-bold font-mono">30 / 120</div>
          </div>
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center p-2">
            <Zap className="w-full h-full text-neon-pink" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Left: Minimap */}
      <div className="absolute bottom-8 left-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="w-48 h-48 rounded-full border-4 border-neon-pink ring-8 ring-black/20 overflow-hidden relative glass shadow-2xl"
        >
          {/* Mock Map Content */}
          <div className="absolute inset-0 bg-[#2d1a4a] opacity-50" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#ff2d85" strokeWidth="2" strokeDasharray="4 2" className="opacity-40" />
            <path d="M50,0 Q75,25 50,50 T50,100" fill="none" stroke="#ff2d85" strokeWidth="2" strokeDasharray="4 2" className="opacity-40" />
            <circle cx="50" cy="50" r="2" fill="white" className="animate-pulse" />
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="origin-center"
            >
              <path d="M50,50 L50,0" stroke="#ff2d85" strokeWidth="0.5" className="opacity-20" />
            </motion.div>
          </svg>
          <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-neon-pink neon-text" />
        </motion.div>
      </div>

      {/* Bottom Center: Vital Stats */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-2 items-center"
        >
          <div className="flex gap-4">
            <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[90%]" />
              </div>
            </div>
            <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
              <Shield className="w-4 h-4 text-blue-500 fill-blue-500" />
              <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[70%]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
