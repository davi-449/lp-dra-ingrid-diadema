import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

export const MapSection = () => {
  return (
    <section className="py-24 md:py-36 bg-surface-1 relative border-t border-primary/5 section-rounded overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Visite o Consultório</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-8 leading-[1.1] tracking-tight">
              Esperamos por<span className="text-primary italic font-light"> você.</span>
            </h2>

            <div className="space-y-8 mt-12 text-text-main">
              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-primary/10 transition-colors group-hover:border-primary/30">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif mb-2">Localização Exclusiva</h4>
                  <p className="text-text-muted leading-relaxed font-light">R. Bruno Spinosa, 231<br/>Vila Nogueira, Diadema - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-primary/10 transition-colors group-hover:border-accent-trust/40">
                  <Clock className="w-6 h-6 text-accent-trust" />
                </div>
                <div className="w-full">
                  <h4 className="text-xl font-bold font-serif mb-2">Horário de Atendimento</h4>
                  <div className="text-text-muted font-light space-y-2 mt-3 w-full max-w-[280px]">
                    <p className="flex justify-between gap-4 border-b border-primary/5 pb-1">
                      <span>Seg, Ter, Qui, Sex:</span> <span className="text-text-main font-medium">09:00 – 19:00</span>
                    </p>
                    <p className="flex justify-between gap-4 border-b border-primary/5 pb-1">
                      <span>Sábado:</span> <span className="text-text-main font-medium">09:00 – 14:00</span>
                    </p>
                    <p className="flex justify-between gap-4 pb-1">
                      <span>Qua e Dom:</span> <span className="text-text-main font-medium">Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?kgmid=/g/11rzwvyd12&daddr=R.+Bruno+Spinosa,+231+-+Vila+Nogueira,+Diadema+-+SP,+09951-010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-12 text-text-main hover:text-primary font-medium px-6 py-3 rounded-full transition-colors border border-primary/20 hover:border-primary/50 hover:bg-white shadow-sm"
            >
              Abrir GPS Agora <ArrowUpRight className="w-4 h-4 text-primary" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 h-[500px] w-full bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(201,168,130,0.1)] relative border border-primary/10 isolate"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.116527018873!2d-46.6087563!3d-23.6708388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44e3f11e96a3%3A0xe2a8a7df41566!2sR.%20Bruno%20Spinosa%2C%20231%20-%20Vila%20Nogueira%2C%20Diadema%20-%20SP%2C%2009951-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%) contrast(105%) opacity(90%) sepia(20%) hue-rotate(-15deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Consultório Dra. Ingrid"
              className="absolute inset-0 z-0"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none rounded-[2rem] ring-1 ring-inset ring-primary/10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
