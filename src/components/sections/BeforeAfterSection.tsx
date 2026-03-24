import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'Facetas em Porcelana',
    desc: 'De formato desgastado para harmonia total e naturalidade absoluta.',
    before: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f1?q=80&w=1200&auto=format&fit=crop&sat=-50',
    after: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Clareamento & Lentes',
    desc: 'Transformação de cor dramática e contornos perfeitamente definidos.',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop&sat=-50',
    after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Implante Total',
    desc: 'Mastigação e estética recuperadas com tecnologia guiada premium.',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop&sat=-50',
    after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  }
];

export const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex >= cases.length) newIndex = 0;
    if (newIndex < 0) newIndex = cases.length - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-24 md:py-36 bg-surface-0 relative z-10 section-rounded overflow-hidden" id="casos">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Transformações</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main tracking-tight mb-6">
            Resultados que <span className="italic font-light text-primary">surpreendem.</span>
          </h2>
          <p className="text-lg text-text-muted font-light max-w-2xl mx-auto">
            Arraste para comparar o antes e depois dos nossos tratamentos premium.
          </p>
        </motion.div>

        <div className="relative">
          {/* Controls Desktop */}
          <button 
            onClick={() => paginate(-1)}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface-1 rounded-full items-center justify-center shadow-sm border border-surface-2 text-text-muted hover:text-primary transition-colors z-20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => paginate(1)}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-surface-1 rounded-full items-center justify-center shadow-sm border border-surface-2 text-text-muted hover:text-primary transition-colors z-20"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="relative h-[60vh] md:h-[70vh] max-h-[600px] w-full max-w-4xl mx-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 flex flex-col items-center"
              >
                <BeforeAfterSlider 
                  key={`slider-${currentIndex}`}
                  beforeImage={cases[currentIndex].before} 
                  afterImage={cases[currentIndex].after} 
                />
                
                <div className="mt-8 text-center max-w-xl px-4">
                  <h3 className="text-2xl font-serif font-bold text-text-main mb-2">
                    {cases[currentIndex].title}
                  </h3>
                  <p className="text-text-muted font-light">
                    {cases[currentIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-primary scale-125' : 'bg-surface-2 hover:bg-primary/50'
                }`}
                aria-label={`Ir para o caso ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
