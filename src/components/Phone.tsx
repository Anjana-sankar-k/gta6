import { motion } from 'motion/react';
import { Camera, Mail, MessageSquare, Globe, Music, Settings, LayoutGrid, Phone as PhoneIcon } from 'lucide-react';

export default function Phone() {
  const apps = [
    { icon: PhoneIcon, label: 'Contacts', color: 'bg-green-500' },
    { icon: MessageSquare, label: 'Messages', color: 'bg-blue-500' },
    { icon: Mail, label: 'Mail', color: 'bg-red-500' },
    { icon: Globe, label: 'Browser', color: 'bg-indigo-500' },
    { icon: Camera, label: 'Snapmatic', color: 'bg-yellow-500' },
    { icon: Music, label: 'Radio', color: 'bg-pink-500' },
    { icon: LayoutGrid, label: 'Blenny', color: 'bg-purple-500' },
    { icon: Settings, label: 'Settings', color: 'bg-gray-500' },
  ];

  return (
    <motion.div
      initial={{ x: 400, y: 100 }}
      animate={{ x: 0, y: 0 }}
      className="fixed bottom-12 right-12 w-64 h-[440px] glass rounded-[32px] border-[6px] border-black overflow-hidden shadow-2xl z-50 pointer-events-auto"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d85]/30 to-[#1a0b2e] mix-blend-overlay opacity-50" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center -z-10" />

      {/* Screen Content */}
      <div className="relative h-full flex flex-col p-4 pt-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-[10px] font-bold text-white/80">12:47 PM</div>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 bg-white/40 rounded-[1px]" />
            <div className="w-3 h-1.5 bg-white/40 rounded-[1px]" />
            <div className="w-3 h-1.5 bg-neon-pink rounded-[1px]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {apps.map((app, i) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={i}
              className="flex flex-col items-center gap-1 group"
            >
              <div className={`${app.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:glow-pink transition-all`}>
                <app.icon className="w-6 h-6" />
              </div>
              <span className="text-[8px] font-medium text-white/70 uppercase tracking-tighter">{app.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2">
            <div className="glass rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-pink flex items-center justify-center">
                    <Music className="w-4 h-4" />
                </div>
                <div>
                   <div className="text-[9px] font-bold text-white/90">LADY GAGA - APPLAUSE</div>
                   <div className="text-[7px] text-white/50">NON-STOP-POP FM</div>
                </div>
            </div>
            
            <div className="h-1 bg-white/10 rounded-full w-24 mx-auto mb-2" />
        </div>
      </div>
    </motion.div>
  );
}
