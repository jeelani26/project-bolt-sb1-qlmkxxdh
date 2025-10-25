import { Sparkles } from 'lucide-react';

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-300 to-amber-300 animate-gradient"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="inline-block animate-float">
            <Sparkles className="w-16 h-16 text-white mx-auto mb-4" strokeWidth={1.5} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight">
            Happy Birthdayyyyyy,
            <br />
            <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-shimmer">
              Ammu
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
            A Million Extra Wishes To Youu From This Fellow
          </p>

          <div className="pt-8">
            <p className="text-lg md:text-xl text-white/80 italic max-w-2xl mx-auto">
              I pray that you win in your life, achieve all your dreams, I really wanna see you on top, and become the person you wanted to,as usaul from the starting of the day I believe in you.
            </p>
          </div>

          <div className="pt-12 animate-bounce">
            <button
              onClick={scrollToNext}
              className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-medium hover:bg-white/30 transition-all duration-300 border-2 border-white/40 hover:border-white/60 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Begin Your Journey
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm animate-pulse">
        
      </div>
    </section>
  );
}
