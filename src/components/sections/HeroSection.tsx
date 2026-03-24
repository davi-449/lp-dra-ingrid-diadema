import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import heroBg from '@/assets/ingrid_hero_bg.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Ivory Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-linear-to-r from-white via-white/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-linear-to-t from-white via-transparent to-transparent pointer-events-none h-1/3 bottom-0 top-auto" />

      <div className="container relative z-10 px-4 mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl py-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center bg-surface-1/80 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-primary/20 shadow-sm"
          >
            <span className="text-xs font-sans font-medium text-primary tracking-widest uppercase">
              Clínica Exclusiva &bull; Vila Nogueira &bull; Diadema
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif text-text-main mb-6 leading-[1.1] tracking-tight"
          >
            Seu Sorriso Merece <span className="text-primary italic font-light">o Melhor Cuidado.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="text-lg sm:text-xl text-text-muted mb-10 leading-relaxed font-light max-w-lg"
          >
            Odontologia humanizada, personalizada e de alto padrão. Trabalhamos exclusivamente particular para garantir resultados que transformam e atenção total a você.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="primary" className="w-full sm:w-auto text-sm h-14" glow>
              <Phone className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto text-sm h-14 hover:bg-surface-2 transition-colors rounded-full">
              <Star className="w-4 h-4 mr-2 text-accent-star" />
              Ver Avaliações
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
