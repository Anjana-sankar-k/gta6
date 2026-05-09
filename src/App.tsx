/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Atmosphere from './components/Atmosphere';
import HUD from './components/HUD';
import Phone from './components/Phone';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-screen h-screen select-none">
      <Atmosphere />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
             <motion.div
                initial={{ letterSpacing: '0.5em', opacity: 0 }}
                animate={{ letterSpacing: '0.2em', opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-center"
             >
                <div className="text-sm font-mono text-neon-pink mb-2 tracking-widest">ROCKSTAR GAMES PRESENTS</div>
                <h1 className="text-8xl font-black italic tracking-tighter text-white neon-text">
                  GRAND THEFT AUTO <span className="text-neon-pink">VI</span>
                </h1>
                <div className="mt-8 text-neutral-500 font-display uppercase tracking-[1em] text-xs">LEONIDA STATE</div>
             </motion.div>
             <div className="absolute bottom-12 left-12">
                <div className="flex gap-2 items-center text-neutral-600 text-[10px] font-mono">
                    <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full animate-bounce" />
                    LOADING SESSION...
                </div>
             </div>
          </motion.div>
        ) : (
          <motion.div
            key="game-ui"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full h-full"
          >
            <HUD />
            <Phone />
            
            {/* Context Hints Overlay */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1 }}
               className="absolute top-1/2 left-8 -translate-y-1/2 space-y-4"
            >
               <Hint keybind="TAB" action="WEAPON WHEEL" />
               <Hint keybind="UP" action="OPEN PHONE" />
               <Hint keybind="V" action="QUICK SWITCH" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Hint({ keybind, action }: { keybind: string; action: string }) {
  return (
    <div className="flex items-center gap-3">
       <div className="w-10 h-10 glass rounded-lg flex items-center justify-center text-xs font-black ring-1 ring-white/20">
          {keybind}
       </div>
       <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{action}</div>
    </div>
  );
}
