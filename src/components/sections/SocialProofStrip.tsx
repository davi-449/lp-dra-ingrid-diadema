import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Star } from 'lucide-react';

function AnimatedCounter({ from, to, duration = 1.5 }: { from: number, to: number, duration?: number }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    // Format to 5.038 instead of 5038
    return Math.round(latest).toLocaleString('pt-BR');
  });

  useEffect(() => {
    if (!hasAnimated) return;
    const controls = animate(count, to, { duration, ease: "circOut" });
    return () => controls.stop();
  }, [count, to, duration, hasAnimated]);

  return (
    <motion.span 
      onViewportEnter={() => setHasAnimated(true)} 
      viewport={{ once: true }}
    >
      {rounded}
    </motion.span>
  );
}

export const SocialProofStrip = () => {
  return (
    <section className="relative bg-linear-to-r from-rose-50 via-white to-rose-50 border-y border-[#e8e0d5] py-6 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center justify-center gap-3 text-center relative z-10">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent-star text-accent-star" />
          ))}
        </div>
        <span className="text-lg font-bold text-text-main font-serif">5.0 no Google</span>
        <span className="text-primary/40 text-sm hidden sm:inline">|</span>
        <span className="text-text-muted text-sm font-medium">
          Mais de <strong className="text-primary font-bold"><AnimatedCounter from={0} to={5038} /></strong> pacientes transformados
        </span>
      </div>
    </section>
  );
};
