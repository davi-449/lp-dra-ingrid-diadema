import { HeroSection } from './components/sections/HeroSection';
import { SocialProofStrip } from './components/sections/SocialProofStrip';
import { ServicesBentoBox } from './components/sections/ServicesBentoBox';
import { TrustSection } from './components/sections/TrustSection';
import { MapSection } from './components/sections/MapSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <main className="min-h-screen bg-surface-0 font-sans selection:bg-primary/20 selection:text-text-main overflow-x-hidden">
      <HeroSection />
      <SocialProofStrip />
      <ServicesBentoBox />
      <TrustSection />
      <MapSection />
      <FloatingWhatsApp />
      
      {/* Footer Minimalista */}
      <footer className="bg-surface-2 py-12 md:py-16 text-center border-t border-primary/10">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center">
          <h2 className="text-xl font-serif font-bold text-text-main mb-4 tracking-wider uppercase">
            Dra. Ingrid Guedes Segatti
          </h2>
          <p className="text-text-muted font-light mb-6">
            Odontologia Premium em Diadema
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted mb-8">
             <a href="https://www.instagram.com/draingridsegatti/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              @draingridsegatti
             </a>
          </div>
          <p className="text-xs text-text-muted/60">
            &copy; {new Date().getFullYear()} Dra. Ingrid Guedes Segatti. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
