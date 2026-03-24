import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { PulseRing } from './ui/PulseRing';

export const FloatingWhatsApp = () => {
  const WHATSAPP_NUMBER = '5511972690513';
  const WHATSAPP_MESSAGE = 'Olá, Dra. Ingrid! Vi o site e gostaria de agendar uma consulta.';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10"
    >
      <PulseRing>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-trust text-white shadow-[0_10px_30px_rgba(74,222,128,0.4)] transition-transform duration-300 hover:scale-[1.08] hover:shadow-[0_15px_40px_rgba(74,222,128,0.5)]"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </PulseRing>
    </motion.div>
  );
};
