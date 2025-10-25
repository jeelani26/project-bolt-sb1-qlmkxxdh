import { Sparkles } from 'lucide-react';

export function FinalSection() {
  return (
    <section id="final" className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-amber-400 flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Sparkles className="w-16 h-16 text-white mx-auto mb-8 animate-float" />

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
          [Your Final Message]
        </h2>

        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          This section is ready for your special ending message or surprise
        </p>

        <div className="mt-12 text-white/70 text-sm">
          <p>Customize this final section however you like</p>
        </div>
      </div>
    </section>
  );
}
