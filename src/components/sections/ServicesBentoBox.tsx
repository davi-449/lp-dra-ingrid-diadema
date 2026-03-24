import { motion } from 'framer-motion';
import { Sparkles, Sun, ShieldCheck, SmilePlus, Star, Heart } from 'lucide-react';
import { MouseFollowCard } from '../ui/MouseFollowCard';

export const ServicesBentoBox = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 md:py-36 bg-surface-1 relative z-10 section-rounded" id="servicos">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Especialidades</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main tracking-tight mb-6">
            Uma nova experiência em <span className="italic font-light text-primary">Cuidado Dental.</span>
          </h2>
          <p className="text-xl text-text-muted font-light">
            Procedimentos focados na sua saúde, estética e bem-estar, com a exclusividade que você procura em Diadema.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {/* Card 1 - Span 2 */}
          <motion.div variants={item} className="md:col-span-2 group h-full">
            <MouseFollowCard className="h-full flex flex-col pt-8 px-8 pb-8 justify-between">
              <div className="bg-white p-4 rounded-full w-max shadow-sm border border-primary/10">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold font-serif text-text-main mb-2">Estética Dental</h3>
                <p className="text-text-muted leading-relaxed font-light text-sm md:text-base">
                  Facetas em resina e porcelana, corrigindo formato, cor e alinhamento para o sorriso dos seus sonhos com naturalidade absoluta.
                </p>
              </div>
            </MouseFollowCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="group h-full">
            <MouseFollowCard className="h-full flex flex-col pt-8 px-8 pb-8 justify-between">
              <div className="bg-white p-4 rounded-full w-max shadow-sm border border-primary/10">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold font-serif text-text-main mb-2">Clareamento</h3>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  Resultados rápidos e seguros, devolvendo o branco natural dos dentes sem sensibilidade prolongada.
                </p>
              </div>
            </MouseFollowCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="group h-full">
            <MouseFollowCard className="h-full flex flex-col pt-8 px-8 pb-8 justify-between">
              <div className="bg-white p-4 rounded-full w-max shadow-sm border border-primary/10">
                <SmilePlus className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold font-serif text-text-main mb-2">Ortodontia</h3>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  Aparelhos estéticos e alinhadores invisíveis para um sorriso alinhado com o máximo de conforto.
                </p>
              </div>
            </MouseFollowCard>
          </motion.div>

          {/* Card 4 - Span 2 */}
          <motion.div variants={item} className="md:col-span-2 group h-full">
            <MouseFollowCard className="h-full flex flex-col pt-8 px-8 pb-8 justify-between bg-white border-primary/20">
              <div className="bg-surface-1 p-4 rounded-full w-max">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold font-serif text-text-main mb-2">Implantes Dentários</h3>
                <p className="text-text-muted leading-relaxed font-light text-sm md:text-base">
                  Recupere a mastigação e o sorriso completo com implantes de titânio de altíssima qualidade. Procedimento indolor com tecnologia guiada.
                </p>
              </div>
            </MouseFollowCard>
          </motion.div>

          {/* Card 5 */}
          <motion.div variants={item} className="group h-full">
            <MouseFollowCard className="h-full flex flex-col pt-8 px-8 pb-8 justify-between">
              <div className="bg-white p-4 rounded-full w-max shadow-sm border border-primary/10">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold font-serif text-text-main mb-2">Harmonização</h3>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  Botox e preenchimento labial com moderação, valorizando seus traços com total segurança.
                </p>
              </div>
            </MouseFollowCard>
          </motion.div>

          {/* Card 6 - Span 3 */}
          <motion.div variants={item} className="md:col-span-3 group h-full">
            <MouseFollowCard className="h-full flex flex-col md:flex-row items-start md:items-center pt-8 px-8 pb-8 gap-8 border-primary/30">
              <div className="bg-primary/10 p-5 rounded-full w-max shrink-0">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-text-main mb-2">Atendimento Humanizado</h3>
                <p className="text-text-muted leading-relaxed font-light">
                  Esqueça a pressa. Nossas consultas são desenhadas para entender você, seus medos e seus desejos. Ambiente acolhedor premium onde seu conforto é nossa maior prioridade.
                </p>
              </div>
            </MouseFollowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
