import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import draIngridImg from '@/assets/dra_ingrid.png';

export const TrustSection = () => {
  return (
    <section className="py-24 md:py-36 bg-surface-2 relative overflow-hidden" id="sobre">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait e Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 relative group"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-surface-1 shadow-[0_20px_50px_rgba(201,168,130,0.15)] transition-transform duration-500 group-hover:shadow-[0_30px_60px_rgba(201,168,130,0.2)]">
              <img
                src={draIngridImg}
                alt="Dra. Ingrid Guedes Segatti - Odontologia Premium"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Elemento Decorativo flutuante */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 rounded-3xl shadow-xl w-64 backdrop-blur-md bg-white/90 border border-primary/10">
              <div className="flex gap-1 mb-2">
                 {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-star text-accent-star" />
                ))}
              </div>
              <p className="font-serif italic text-text-main leading-tight mb-2">"Excelente dentista, profissional e pessoa admirável."</p>
              <p className="text-xs font-bold text-primary uppercase tracking-widest">— Brenda</p>
            </div>
          </motion.div>

          {/* Textos e Depoimentos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-2"
          >
             <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Sobre a Dra. Ingrid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-text-main mb-8 tracking-tight leading-[1.1]">
              Atenção e cuidado em <br/>
              <span className="italic font-light text-primary">cada detalhe.</span>
            </h2>
            <div className="space-y-6 text-lg text-text-muted font-light leading-relaxed mb-12">
              <p>
                Acredito que a odontologia de alto padrão vai muito além da técnica. Trata-se de <strong>escutar o paciente</strong>, entender suas expectativas e entregar resultados que devolvem a autoestima com naturalidade.
              </p>
              <p>
                Em nosso consultório na Vila Nogueira, cada material é escolhido com rigor e cada tratamento é planejado sob medida. 
                <span className="block mt-4 text-primary font-medium tracking-wide">❌ Trabalhamos exclusivamente particular. Não aceitamos convênios.</span>
              </p>
            </div>

            {/* Lista Depoimentos */}
            <div className="space-y-4">
               <motion.div 
                 whileHover={{ translateY: -4 }}
                 className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 transition-all duration-300 hover:shadow-md"
               >
                 <p className="font-serif italic text-lg text-text-main mb-3">"Tudo ótimo e trabalha bem e preços melhor ainda"</p>
                 <p className="text-xs font-bold text-primary uppercase tracking-widest">— Andrea Barbosa</p>
               </motion.div>

               <motion.div 
                 whileHover={{ translateY: -4 }}
                 className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 transition-all duration-300 hover:shadow-md"
               >
                 <p className="font-serif italic text-lg text-text-main mb-3">"Materiais de alta qualidade e tecnologia."</p>
                 <p className="text-xs font-bold text-primary uppercase tracking-widest">— Daniela Pereira</p>
               </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
