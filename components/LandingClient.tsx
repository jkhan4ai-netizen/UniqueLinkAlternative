'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { dictionaries, Lang } from '@/lib/i18n';
import { trackEvent } from '@/lib/analytics';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  ArrowRight, 
  Instagram, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  Globe,
  Briefcase,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Ism juda qisqa'),
  phone: z.string().min(9, 'Telefon raqam xato'),
  company: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function LandingClient() {
  const [lang, setLang] = useState<Lang>('uz');
  const d = dictionaries[lang];
  const [apiError, setApiError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    trackEvent('page_view', { param: 'landing', lang });
  }, [lang]);

  const toggleLang = () => {
    const newLang = lang === 'uz' ? 'ru' : 'uz';
    setLang(newLang);
    trackEvent('language_switch', { from: lang, to: newLang });
  };

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    trackEvent('form_submit', data);
    setApiError('');
    setIsSuccess(false);
    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed to send');
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch(error) {
      setApiError(d.form.error);
    }
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0038FF] text-white font-sans selection:bg-[#CCFF00] selection:text-black overflow-hidden relative">
      
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50" />

      {/* Navigation */}
      <nav className="relative z-50 pt-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter flex items-center gap-2">
            <div className="bg-white text-[#0038FF] p-1.5 rounded-xl">
              <Zap className="w-5 h-5" />
            </div>
            UN1QUE
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-[#CCFF00] transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:block px-6 py-2.5 outline outline-2 outline-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#0038FF] transition-all"
            >
              {d.nav.book}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-20 lg:pt-32 pb-40 px-6 max-w-6xl mx-auto">
        <div className="text-center relative">
          
          {/* Floating Decorative Elements (Glassmorphism) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute top-0 -left-10 w-44 h-52 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 flex-col items-center justify-between shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 mb-2 border-2 border-white/50 shadow-inner flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <div className="text-white font-black uppercase tracking-wider text-sm mt-2">@un1que.uz</div>
            <div className="w-full h-3 flex gap-1 justify-center mt-2">
              <div className="w-4 h-1.5 bg-white/40 rounded-full" />
              <div className="w-10 h-1.5 bg-white rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, 15, 0], opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute top-20 -right-4 w-48 h-56 bg-[#CCFF00]/10 backdrop-blur-xl border border-[#CCFF00]/30 rounded-[2rem] p-5 flex-col items-center justify-between shadow-2xl z-20"
          >
            <div className="text-[#CCFF00] font-black w-full text-left text-xs mb-2">#CASESTUDY</div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0038FF] to-purple-600 mb-2 border-2 border-white/50 flex items-center justify-center overflow-hidden relative">
              <TrendingUp className="w-10 h-10 text-white relative z-10" />
            </div>
             <div className="w-full bg-[#CCFF00] h-6 rounded-full mt-auto flex items-center justify-center text-[10px] font-black text-[#0038FF]">+300% ROI</div>
          </motion.div>

          {/* Typography Heavy Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center text-[3.5rem] sm:text-[6rem] md:text-[8rem] font-black uppercase leading-none tracking-tighter"
          >
            <div className="flex items-center">
               <div className="text-[#CCFF00] -rotate-3 mb-4 mr-4 hidden md:block text-5xl">#</div>
               <div className="text-[#CCFF00]">BRAND</div>
            </div>
            <div className="text-white">MARKETING</div>
            <div 
              className="text-transparent" 
              style={{ WebkitTextStroke: '2px white' }}
            >
              AGENCY
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-medium mt-10 mb-12"
          >
            {d.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-30"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-[#CCFF00] text-[#0038FF] rounded-full text-sm font-black uppercase tracking-widest hover:scale-[1.05] active:scale-[0.98] transition-transform shadow-[0_0_40px_rgba(204,255,0,0.4)]"
            >
              {d.hero.ctaPrimary}
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-[#0038FF] transition-all"
            >
              {d.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </main>

      {/* White Bottom Panel */}
      <div className="relative z-20 bg-white text-black min-h-screen rounded-t-[40px] md:rounded-t-[80px] pt-16 px-6 pb-24 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Quick Actions (Overlapping the edge) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-30">
            <ActionCard 
              icon={<Send className="w-8 h-8 text-[#0038FF]" />} 
              title={d.quickActions.telegram}
              desc="Tezkor yozish uchun"
              onClick={() => window.open('https://t.me/escanorzed', '_blank')}
            />
            <ActionCard 
              icon={<Instagram className="w-8 h-8 text-pink-500" />} 
              title={d.quickActions.instagram}
              desc="Kuzatib boring"
              onClick={() => window.open('https://www.instagram.com/un1que.uz', '_blank')}
            />
             <ActionCard 
              icon={<Briefcase className="w-8 h-8 text-[#0038FF]" />} 
              title={d.quickActions.portfolio}
              desc="Bizning ishlarimiz"
              onClick={() => window.open('https://t.me/Sferamoonsmm', '_blank')}
              highlight
            />
          </section>

          {/* Services */}
          <section id="services" className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0038FF] mb-6">{d.services.title}</h2>
              <div className="w-24 h-2 bg-[#CCFF00] mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {d.services.items.map((item, idx) => (
                <motion.div 
                  whileHover={{ y: -8 }}
                  key={idx} 
                  className="p-10 md:p-12 bg-[#f8f9fa] rounded-[3rem] border border-gray-100 flex flex-col gap-6 group"
                >
                  <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center shadow-sm group-hover:bg-[#CCFF00] group-hover:rotate-6 transition-all">
                    {idx === 0 && <Briefcase className="w-10 h-10 text-[#0038FF] group-hover:text-black transition-colors" />}
                    {idx === 1 && <TrendingUp className="w-10 h-10 text-[#0038FF] group-hover:text-black transition-colors" />}
                    {idx === 2 && <Award className="w-10 h-10 text-[#0038FF] group-hover:text-black transition-colors" />}
                    {idx === 3 && <Globe className="w-10 h-10 text-[#0038FF] group-hover:text-black transition-colors" />}
                  </div>
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                     <p className="text-gray-500 leading-relaxed font-medium text-lg">
                       {item.description}
                     </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0038FF] mb-6">{d.caseStudies.title}</h2>
              <div className="w-24 h-2 bg-[#CCFF00] mx-auto rounded-full" />
            </div>
            
            <div className="bg-[#0038FF] text-white rounded-[3rem] p-10 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-16 relative overflow-hidden shadow-2xl">
              {/* Inner grid noise */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
              
              {d.caseStudies.items.map((item, idx) => (
                <div key={idx} className="text-center space-y-4 relative z-10 hover:scale-105 transition-transform">
                  <div className="text-7xl md:text-8xl font-black text-[#CCFF00] tracking-tighter mb-4">{item.metric}</div>
                  <div className="text-xl font-bold uppercase tracking-widest leading-tight">{item.label}</div>
                  <div className="text-sm text-white/50 font-bold uppercase tracking-widest">{item.client}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form & FAQ grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Form */}
            <section id="contact" className="bg-[#f8f9fa] rounded-[3rem] p-10 md:p-14 border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <div className="w-32 h-32 bg-[#CCFF00]/10 rounded-full blur-3xl absolute -right-10 -top-10" />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0038FF] leading-tight">
                    {d.form.title}
                  </h2>
                  <p className="text-gray-500 font-medium text-lg">{d.form.subtitle}</p>
                </div>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#CCFF00]/20 text-[#303f01] p-10 rounded-[2rem] flex flex-col items-center justify-center text-center gap-6 border border-[#CCFF00]/50 h-80"
                  >
                    <CheckCircle2 className="w-20 h-20 text-[#8ac700]" />
                    <p className="font-black text-2xl uppercase tracking-tighter">{d.form.success}</p>
                    <p className="font-medium text-lg text-[#5a7a00]">Arizangiz muvaffaqiyatli Telegram orqali yuborildi!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#0038FF] mb-3 ml-2">{d.form.name}</label>
                      <input 
                        {...register('name')}
                        className="w-full px-6 py-5 bg-white border-2 border-transparent focus:border-[#CCFF00] rounded-2xl outline-none transition-all font-bold text-lg shadow-sm"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-2 font-bold px-2">{errors.name.message}</p>}
                    </div>
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-[#0038FF] mb-3 ml-2">{d.form.phone}</label>
                      <input 
                        {...register('phone')}
                        placeholder="+998"
                        className="w-full px-6 py-5 bg-white border-2 border-transparent focus:border-[#CCFF00] rounded-2xl outline-none transition-all font-bold text-lg shadow-sm"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-2 font-bold px-2">{errors.phone.message}</p>}
                    </div>
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 ml-2">{d.form.company}</label>
                      <input 
                        {...register('company')}
                        className="w-full px-6 py-5 bg-white border-2 border-transparent focus:border-[#CCFF00] rounded-2xl outline-none transition-all font-bold text-lg shadow-sm"
                      />
                    </div>

                    {apiError && <p className="text-red-500 text-sm font-bold bg-red-50 p-4 rounded-xl border border-red-100">{apiError}</p>}

                    <button 
                      disabled={isSubmitting}
                      className="w-full mt-4 px-8 py-6 bg-[#0038FF] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-black disabled:opacity-70 transition-all flex justify-center items-center gap-3 shadow-xl hover:shadow-[#0038FF]/30 hover:shadow-2xl"
                    >
                      {isSubmitting ? '...' : d.form.submit}
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </form>
                )}
              </div>
            </section>

            {/* FAQ */}
            <section className="space-y-6 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0038FF] mb-4">{d.faq.title}</h2>
                <div className="w-24 h-2 bg-[#CCFF00] rounded-full" />
              </div>
              <div className="space-y-4">
                {d.faq.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-sm"
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left font-black text-lg transition-colors hover:text-[#0038FF]"
                    >
                      {item.q}
                      <ChevronDown className={`w-6 h-6 text-gray-300 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#0038FF]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-8 pb-8 text-gray-500 font-medium text-lg leading-relaxed border-t border-gray-50/50 pt-4"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              {/* Extra Email Box */}
              <div 
                onClick={() => window.open('mailto:un1quexpertuz@gmail.com')}
                className="mt-8 bg-black text-white p-8 rounded-[2rem] flex items-center justify-between group cursor-pointer hover:bg-gray-900 transition-all hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                <div>
                   <div className="text-[#CCFF00] font-black uppercase tracking-widest text-xs mb-2">Email</div>
                   <div className="text-xl md:text-2xl font-bold">un1quexpertuz@gmail.com</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#CCFF00] transition-colors">
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </section>

          </div>

        </div>
      </div>

      <footer className="bg-white text-center py-12 text-sm font-bold text-gray-400 w-full border-t border-gray-100 relative z-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
           <div className="flex items-center gap-2 text-[#0038FF] font-black text-xl mb-4 md:mb-0">
              <Zap className="w-5 h-5 fill-current" /> UN1QUE
           </div>
           <div>&copy; {new Date().getFullYear()} UN1QUE AGENCY. {d.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}

function ActionCard({ icon, title, desc, onClick, highlight = false }: { icon: React.ReactNode, title: string, desc: string, onClick: () => void, highlight?: boolean }) {
  return (
    <button 
      onClick={ onClick }
      className={`flex flex-col items-center gap-4 p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-3 transition-transform text-center w-full relative overflow-hidden group ${
        highlight ? 'bg-[#CCFF00] text-black border-2 border-[#CCFF00]' : 'bg-white border-2 border-gray-100/50 text-black'
      }`}
    >
      <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-colors ${
        highlight ? 'bg-black/10 text-black' : 'bg-[#f5f5f7] group-hover:bg-[#0038FF] group-hover:text-white'
      }`}>
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10' })}
      </div>
      <div>
        <h3 className={`font-black uppercase tracking-tight text-2xl mb-2 ${highlight ? 'text-black' : 'text-[#0038FF]'}`}>{title}</h3>
        <p className={`text-base font-medium ${highlight ? 'text-black/60' : 'text-gray-500'}`}>{desc}</p>
      </div>
      <ArrowRight className={`absolute top-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 ${highlight ? 'text-black/50' : 'text-[#0038FF]/50'}`} />
    </button>
  );
}
