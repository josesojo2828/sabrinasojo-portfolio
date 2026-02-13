"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { 
  Menu, X, ArrowRight, Instagram, Linkedin, Mail, 
  TrendingUp, Users, BarChart3, CheckCircle2, 
  Zap, MessageCircle, Layers, Award, ChevronDown, 
  ArrowUpRight, Globe, Play
} from 'lucide-react';

// --- TYPES & INTERFACES ---

interface Stat {
  label: string;
  value: string;
}

interface MethodologyStep {
  step: string;
  title: string;
  desc: string;
}

interface PortfolioItem {
  category: string;
  title: string;
  result: string;
  tags: string[];
  image: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

// --- UTILS & HOOKS ---

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return [domRef, isVisible] as const;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- DATA ---

const stats: Stat[] = [
  { label: "Cuentas Gestionadas", value: "35+" },
  { label: "Inversión Gestionada", value: "$50k+" },
  { label: "Engagement Rate Avg", value: "9.2%" },
  { label: "Años de Experiencia", value: "6+" }
];

const methodology: MethodologyStep[] = [
  {
    step: "01",
    title: "Auditoría Profunda",
    desc: "No adivino. Analizo tu situación actual, tu competencia y tu audiencia para encontrar brechas de oportunidad."
  },
  {
    step: "02",
    title: "Estrategia & Pilares",
    desc: "Diseñamos la personalidad de tu marca y los territorios de conversación que te posicionarán como líder."
  },
  {
    step: "03",
    title: "Creación & Gestión",
    desc: "Ejecución impecable. Contenido visual de alto impacto y copywritting persuasivo, gestionado día a día."
  },
  {
    step: "04",
    title: "Análisis & Optimización",
    desc: "Métricas semanales. Ajustamos el rumbo basándonos en datos reales, no en sensaciones."
  }
];

const portfolio: PortfolioItem[] = [
  {
    category: "Moda & Lifestyle",
    title: "Lanzamiento Colección Verano",
    result: "+45% ROI en primera semana",
    tags: ["Paid Media", "Influencers"],
    image: "https://images.unsplash.com/photo-1550614000-4b9519e0037a?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Tech Startup",
    title: "SaaS B2B Rebranding",
    result: "De 0 a 10k Leads cualificados",
    tags: ["Estrategia", "LinkedIn"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Hospitality",
    title: "Cadena de Hoteles Boutique",
    result: "90% Ocupación vía RRSS",
    tags: ["Reels Viral", "Community"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Personal Brand",
    title: "Coach de Negocios",
    result: "Sold Out de Mentoría High-Ticket",
    tags: ["Lanzamiento", "Email Mkt"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Art & Culture",
    title: "Festival de Música Indie",
    result: "Sold Out 3 meses antes",
    tags: ["Eventos", "Ads"],
    image: "https://images.unsplash.com/photo-1459749411177-287ce35e8b2f?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "Sabrina no es solo una CM, es una estratega de negocios. Entendió nuestra visión mejor que nosotros mismos.",
    author: "Ana G.",
    role: "CEO, ModaSost",
    company: "Fashion Retail"
  },
  {
    quote: "El nivel de detalle en los reportes y la claridad en la estrategia nos dio la confianza para invertir más.",
    author: "Carlos M.",
    role: "Founder",
    company: "TechSolutions"
  },
  {
    quote: "Pasamos de tener seguidores a tener una comunidad que compra y recomienda. El ROI ha sido brutal.",
    author: "Lucía P.",
    role: "Marketing Director",
    company: "OrganicFood"
  }
];

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white rotate-3 group-hover:rotate-12 transition-transform">
              <span className="font-bold text-lg">S</span>
            </div>
            SABRINA.SOJO
          </a>
          
          <div className="hidden md:flex gap-10 text-sm font-medium items-center text-slate-600">
            {['Método', 'Servicios', 'Portafolio', 'Testimonios'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contacto" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all font-semibold text-sm tracking-wide">
              Agenda Estratégica
            </a>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 md:hidden flex flex-col p-6 gap-4 shadow-2xl animate-in slide-in-from-top-5">
            {['Inicio', 'Método', 'Servicios', 'Portafolio', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="text-lg font-medium text-slate-600 hover:text-indigo-600 py-2 border-b border-slate-50 last:border-0">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-100 to-purple-100 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply"></div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 space-y-8">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Aceptando nuevos proyectos Q1 2024
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-slate-900 mb-6">
                Estrategia <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">Digital Real.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Ayudo a marcas ambiciosas a dejar de "publicar por publicar" y empezar a construir activos digitales que generan ventas, autoridad y comunidad.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contacto" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200 hover:translate-y-[-2px]">
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#portafolio" className="group px-8 py-4 rounded-full font-bold text-lg text-slate-700 bg-white border border-slate-200 hover:border-indigo-200 hover:text-indigo-600 transition-all flex items-center justify-center gap-2 shadow-sm">
                  <Play className="w-4 h-4 fill-current opacity-0 group-hover:opacity-100 transition-opacity -ml-2" />
                  Ver Casos de Éxito
                </a>
              </div>
            </FadeInSection>

            <FadeInSection className="pt-8">
              <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-4">Marcas que han confiado:</p>
              <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders de logos simulados */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 bg-slate-300 rounded animate-pulse"></div>
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* Hero Visual */}
          <div className="lg:w-2/5 relative">
            <FadeInSection>
              <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl shadow-indigo-100 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out border border-slate-100">
                 <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
                  alt="Sabrina Sojo Estratega" 
                  className="rounded-2xl w-full object-cover aspect-[4/5]"
                />
                
                {/* Floating Cards */}
                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">ROI Generado</p>
                    <p className="font-bold text-slate-900">+250%</p>
                  </div>
                </div>

                <div className="absolute top-10 -right-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-pulse" style={{ animationDuration: '4s' }}>
                  <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Comunidad</p>
                    <p className="font-bold text-slate-900">Activa</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            {stats.map((stat, index) => (
              <FadeInSection key={index} className="text-center md:text-left pl-4 md:pl-8">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">{stat.value}</div>
                <div className="text-xs lg:text-sm text-slate-400 uppercase tracking-widest font-medium">{stat.label}</div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* --- ABOUT SECTION (NEW) --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="relative">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-indigo-600 -translate-x-4 -translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
                alt="Working" 
                className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-indigo-600 translate-x-4 translate-y-4"></div>
            </div>
          </FadeInSection>
          
          <FadeInSection>
            <h4 className="text-indigo-600 font-bold tracking-widest uppercase mb-4">Sobre Mí</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">No soy solo una Community Manager. Soy tu <span className="underline decoration-indigo-400 decoration-4 underline-offset-4">Partner Estratégica</span>.</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                La mayoría de las marcas fallan en redes sociales no por falta de contenido, sino por falta de dirección. Mi enfoque combina la creatividad visual con el rigor analítico.
              </p>
              <p>
                Llevo más de 6 años descifrando algoritmos y comportamientos de consumo. Mi misión es simple: construir puentes sólidos entre tu marca y las personas que necesitan lo que vendes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-center gap-3">
                <Award className="text-indigo-600" />
                <span className="font-semibold text-slate-800">Certificada en Meta Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="text-indigo-600" />
                <span className="font-semibold text-slate-800">Estrategia Global</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- METHODOLOGY (NEW) --- */}
      <section id="método" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeInSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">El Método <span className="text-indigo-600">Growth</span></h2>
            <p className="text-slate-500 text-lg">Un proceso probado y repetible que elimina la improvisación y garantiza resultados consistentes.</p>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
            
            {methodology.map((item, index) => (
              <FadeInSection key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative group">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-indigo-500/20 group-hover:bg-indigo-600 transition-colors z-10 relative">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeInSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Soluciones a Medida</h2>
              <p className="text-slate-500 max-w-lg text-lg">Paquetes diseñados para diferentes etapas de crecimiento.</p>
            </div>
            <a href="#contacto" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">Ver todos los servicios <ArrowRight size={20}/></a>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeInSection className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Layers size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Estrategia 360°</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">Ideal para marcas que necesitan un norte claro. Auditoría, definición de buyer persona y plan de contenidos trimestral.</p>
              <ul className="space-y-3">
                {['Brand Audit', 'Benchmark', 'Content Pillars'].map(i => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-indigo-500" /> {i}
                  </li>
                ))}
              </ul>
            </FadeInSection>

             {/* Service 2 (Highlighted) */}
             <FadeInSection className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group transform md:-translate-y-4">
               <div className="absolute top-0 right-0 bg-indigo-500 text-xs font-bold px-4 py-2 rounded-bl-xl">POPULAR</div>
              <div className="w-14 h-14 bg-white/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gestión Mensual</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">Me convierto en la voz de tu marca. Creación, publicación y gestión de comunidad diaria.</p>
              <ul className="space-y-3">
                {['12-16 Posts/Mes', 'Gestión de Stories', 'Respuesta a DMs'].map(i => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle2 size={18} className="text-indigo-400" /> {i}
                  </li>
                ))}
              </ul>
            </FadeInSection>

             {/* Service 3 */}
             <FadeInSection className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Paid Media (Ads)</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">Acelera tu crecimiento con campañas publicitarias segmentadas en Meta (IG/FB) y TikTok.</p>
              <ul className="space-y-3">
                {['Setup de Campañas', 'A/B Testing', 'Reporte ROI'].map(i => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-purple-500" /> {i}
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO (MASONRY-LIKE) --- */}
      <section id="portafolio" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <FadeInSection className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-indigo-600 font-bold tracking-widest uppercase mb-2">Work</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Resultados Recientes</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="px-6 py-2 rounded-full bg-slate-900 text-white text-sm font-bold">Todos</button>
              <button className="px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-100">Moda</button>
              <button className="px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-100">Tech</button>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <FadeInSection key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-2 mb-3">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold bg-indigo-600 text-white px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 font-medium flex items-center gap-2">
                      <TrendingUp size={16} className="text-green-400" /> {item.result}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline underline-offset-4">Ver portafolio completo <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (NEW) --- */}
      <section id="testimonios" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-600 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ellos confiaron en el proceso</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeInSection key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="text-indigo-400 mb-6">
                  <MessageCircle size={32} />
                </div>
                <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">{t.role}, {t.company}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (SIMPLE) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Preguntas Frecuentes</h2>
           </FadeInSection>
           <div className="space-y-4">
              <FadeInSection className="border border-slate-200 rounded-xl p-6 hover:border-indigo-200 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-lg text-slate-800">¿Trabajas con marcas personales?</h3>
                   <ChevronDown className="text-slate-400" />
                </div>
              </FadeInSection>
              <FadeInSection className="border border-slate-200 rounded-xl p-6 hover:border-indigo-200 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-lg text-slate-800">¿Cuál es la inversión mínima en Ads?</h3>
                   <ChevronDown className="text-slate-400" />
                </div>
              </FadeInSection>
              <FadeInSection className="border border-slate-200 rounded-xl p-6 hover:border-indigo-200 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-lg text-slate-800">¿Incluyes diseño gráfico en los planes?</h3>
                   <ChevronDown className="text-slate-400" />
                </div>
              </FadeInSection>
           </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contacto" className="py-24 container mx-auto px-6">
        <FadeInSection className="bg-slate-900 rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row gap-16 relative overflow-hidden shadow-2xl">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="md:w-1/2 relative z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">¿Lista para escalar tu marca?</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Actualmente tengo agenda abierta para <strong>2 nuevos clientes</strong> este mes. Si buscas compromiso y estrategia real, conversemos.
            </p>
            
            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">hola@sabrinasojo.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Instagram size={20} />
                </div>
                <span className="text-lg">@sabrinasojo.cm</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="text-lg">/in/sabrinasojo</span>
              </a>
            </div>
          </div>

          <form className="md:w-1/2 w-full space-y-4 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre" className="w-full bg-white/10 border border-white/10 rounded-xl p-4 focus:outline-none focus:bg-white/20 transition-colors text-white placeholder-slate-400" />
              <input type="text" placeholder="Instagram" className="w-full bg-white/10 border border-white/10 rounded-xl p-4 focus:outline-none focus:bg-white/20 transition-colors text-white placeholder-slate-400" />
            </div>
            <input type="email" placeholder="Correo Electrónico" className="w-full bg-white/10 border border-white/10 rounded-xl p-4 focus:outline-none focus:bg-white/20 transition-colors text-white placeholder-slate-400" />
            <select className="w-full bg-white/10 border border-white/10 rounded-xl p-4 focus:outline-none focus:bg-white/20 transition-colors text-slate-300 [&>option]:bg-slate-900">
              <option>¿Qué servicio te interesa?</option>
              <option>Gestión Integral de RRSS</option>
              <option>Estrategia de Contenidos</option>
              <option>Auditoría Express</option>
            </select>
            <textarea placeholder="Cuéntame brevemente tus objetivos..." className="w-full bg-white/10 border border-white/10 rounded-xl p-4 focus:outline-none focus:bg-white/20 transition-colors text-white placeholder-slate-400"></textarea>
            <button className="w-full bg-indigo-600 text-white font-bold p-5 rounded-xl hover:bg-indigo-500 transition-all text-lg shadow-lg shadow-indigo-900/50 mt-4 flex justify-center items-center gap-2 group">
              Enviar Solicitud <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </FadeInSection>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs">S</div>
            SABRINA.SOJO
          </div>
          
          <div className="text-center flex flex-col items-center gap-4">
            <p className="text-slate-500 text-sm">© 2024 Estrategia Digital. Todos los derechos reservados.</p>
            
            {/* Credits - Enhanced Visibility Badge */}
            <a 
              href="https://quanticarch.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-lg hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider group-hover:text-indigo-600 transition-colors">
                Desarrollado por
              </span>
              <span className="text-sm font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                QUANTIC ARCH
              </span>
            </a>
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Términos</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;