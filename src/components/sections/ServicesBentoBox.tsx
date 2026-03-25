import { motion } from 'framer-motion';
import { Sparkles, Sun, ShieldCheck, SmilePlus, Star, Heart } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Estética Dental',
    desc: 'Facetas em resina e porcelana — formato, cor e alinhamento exatos para naturalidade absoluta.',
    accent: 'from-rose-100 to-orange-50',
    iconBg: 'bg-rose-100 text-rose-500',
  },
  {
    icon: Sun,
    title: 'Clareamento',
    desc: 'Resultados rápidos, sem sensibilidade prolongada. Branco natural de volta em poucas sessões.',
    accent: 'from-amber-50 to-yellow-50',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    icon: SmilePlus,
    title: 'Ortodontia',
    desc: 'Aparelhos estéticos e alinhadores invisíveis para um sorriso alinhado com conforto.',
    accent: 'from-sky-50 to-cyan-50',
    iconBg: 'bg-sky-100 text-sky-500',
  },
  {
    icon: ShieldCheck,
    title: 'Implantes',
    desc: 'Titânio de altíssima qualidade. Mastigação total de volta com tecnologia guiada e indolor.',
    accent: 'from-emerald-50 to-green-50',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Star,
    title: 'Harmonização',
    desc: 'Botox e preenchimento com moderação, valorizando seus traços com segurança.',
    accent: 'from-violet-50 to-purple-50',
    iconBg: 'bg-violet-100 text-violet-500',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    desc: 'Consultas sem pressa. Ambiente acolhedor premium onde seu conforto é prioridade absoluta.',
    accent: 'from-pink-50 to-rose-50',
    iconBg: 'bg-pink-100 text-pink-500',
  },
];

export const ServicesBentoBox = () => {
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
          <p className="text-lg text-text-muted font-light">
            Procedimentos focados na sua saúde, estética e bem-estar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Featured (Estética Dental) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_12px_40px_rgba(201,168,130,0.2)]"
          >
            <div className="absolute inset-0 bg-surface-2">
              <img 
                src="/assets/dra_ingrid.png" 
                alt="Estética Dental" 
                className="w-full h-full object-cover object-top opacity-60 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-rose-100">
                <Sparkles className="w-3.5 h-3.5" />
                Mais Procurado
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-2">{services[0].title}</h3>
              <p className="text-white/80 font-light text-sm sm:text-base max-w-md">{services[0].desc}</p>
            </div>
          </motion.div>

          {/* Cards 2 a 5: Médios (Coloridos) */}
          {services.slice(1, 5).map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${svc.accent} p-6 border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-primary/20 h-full flex flex-col`}>
                <div className={`${svc.iconBg} p-3 rounded-2xl w-max mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-text-main mb-2">{svc.title}</h3>
                <p className="text-text-muted leading-relaxed font-light text-sm flex-1">{svc.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Card 6: Compacto Horizontal (Atendimento Humanizado) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="group col-span-1 sm:col-span-2 lg:col-span-2 sm:col-start-1 lg:col-start-2"
          >
            <div className="bg-surface-0 border border-primary/20 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(201,168,130,0.1)] h-full">
              <div className={`${services[5].iconBg} p-4 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                <Heart className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold font-serif text-text-main">{services[5].title}</h3>
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase bg-primary/5 px-2 py-1 rounded-md w-max">Padrão Ouro</span>
                </div>
                <p className="text-text-muted font-light text-sm">{services[5].desc}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
