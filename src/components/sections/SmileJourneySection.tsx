import { motion } from 'framer-motion';
import { Smartphone, Stethoscope, FileSignature, Sparkles, SmilePlus } from 'lucide-react';
import { PulseRing } from '../ui/PulseRing';
import { Button } from '../ui/Button';

const steps = [
  {
    icon: Smartphone,
    title: 'Primeiro Contato',
    desc: 'Agende pelo WhatsApp ou telefone. Sem burocracia.',
  },
  {
    icon: Stethoscope,
    title: 'Avaliação Completa',
    desc: 'Exame clínico detalhado com fotos intra-orais e planejamento digital preciso.',
  },
  {
    icon: FileSignature,
    title: 'Plano Personalizado',
    desc: 'Apresentamos as melhores opções de tratamento, prazos e valores com total transparência.',
  },
  {
    icon: Sparkles,
    title: 'Tratamento Premium',
    desc: 'Procedimentos executados com materiais de última geração, conforto e sem dor.',
  },
  {
    icon: SmilePlus,
    title: 'Sorriso Novo',
    desc: 'Resultado natural e harmonioso. Acompanhamento pós-tratamento 100% incluído.',
  },
];

export const SmileJourneySection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-surface-1 to-surface-0 relative z-10 section-rounded" id="jornada">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Processo</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main tracking-tight mb-6">
            A sua <span className="italic font-light text-primary">Jornada do Sorriso.</span>
          </h2>
          <p className="text-lg text-text-muted font-light">
            Transparência do primeiro contato ao resultado final.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line Desktop/Mobile */}
          <div className="absolute left-[24px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-primary/15 -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-12 lg:gap-16 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-start lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Left Space for alternating */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Bubble */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-[24px] lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-surface-0 bg-primary/10 flex items-center justify-center shadow-sm"
                  >
                    <step.icon className="w-5 h-5 text-primary" />
                  </motion.div>

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${isEven ? 'lg:pr-12 text-left lg:text-right' : 'lg:pl-12 text-left'}`}
                  >
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 transition-colors">
                      <span className="text-primary/40 font-serif text-4xl block mb-2">{`0${index + 1}`}</span>
                      <h3 className="text-xl font-bold font-serif text-text-main mb-3">{step.title}</h3>
                      <p className="text-text-muted leading-relaxed font-light text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative">
            <PulseRing>
              <div className="bg-emerald-50 text-emerald-600 px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                VAGAS DISPONÍVEIS
              </div>
            </PulseRing>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-text-main font-bold mb-8">
            Pronto para transformar seu sorriso?
          </h3>
          <Button className="!bg-emerald-500 !text-white hover:!bg-emerald-600 px-10 rounded-full font-medium shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.4)] hover:-translate-y-1">
            Agendar Avaliação
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
