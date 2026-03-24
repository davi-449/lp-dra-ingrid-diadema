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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="group"
            >
              <div className={`relative rounded-3xl bg-gradient-to-br ${svc.accent} p-7 sm:p-8 border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,168,130,0.12)] hover:border-primary/20 h-full flex flex-col`}>
                <div className={`${svc.iconBg} p-4 rounded-2xl w-max mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <svc.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-serif text-text-main mb-3">{svc.title}</h3>
                <p className="text-text-muted leading-relaxed font-light text-sm flex-1">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
