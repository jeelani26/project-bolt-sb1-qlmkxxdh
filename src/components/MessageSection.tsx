import { Heart } from 'lucide-react';

export function MessageSection() {
  return (
    <section id="message" className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-rose-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-amber-300 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-pink-300 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 border-2 border-rose-300 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
            A Letter to You
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-rose-300"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-rose-300"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-rose-300"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-rose-300"></div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-serif italic mb-6">
              Dear Ammu,
            </p>

            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                [Write your heartfelt message here. This is your space to express everything Ammu means to you -
                the memories you cherish, the qualities you admire, the laughter you've shared, and the incredible
                person she is.]
              </p>

              <p>
                [Share specific moments, inside jokes, or the ways she has touched your life. Make it personal,
                warm, and filled with love.]
              </p>

              <p>
                [Express your birthday wishes and hopes for her future. Let her know how much she is valued
                and appreciated.]
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-serif italic mt-8 text-right">
              With all my love,<br />
              [Your Name]
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
              <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-500 italic text-sm">
            Replace the placeholder text with your personal message
          </p>
        </div>
      </div>
    </section>
  );
}
