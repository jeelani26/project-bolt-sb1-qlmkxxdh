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
                Happy Birthday Ammu,
                Nik Appude 19 Antey Nake shocking ga undhi i thought you are 18 now But yeah 19(Auntie)!
                Ni gurinchi kothaga em ledhu chpadaniki 4 to 5 Years nunchi vintune unav na sodhi elantivi ee year kuda vinesei em undhiii,
                Vakapppudu nen nik guide chesthu oche vadni eppudu nuv chesthunav senior antu chepukuntu Ala ani i am not dumb as you think koni sarlu kaval ani ochi information adugutha conversation start kosam koni sarlu nijangane ostha ee majya nijagane osthuna le adhi vere vishyam! Ninu gelike time kuda undatledhu ee CSE1 vala!But ni speed chusthunte nak agali ani ledhuu adhokaroj pakka i will catch up to you in studies! School lo kuda ela unte bagunde nik competition ga topper batch veskoni show dhobali ana asha undedhi asha lane miligipoindhi appudu peaks lo badhakam undedhi le but yeah by god's luck corona pass inam! Main point ke ralekapothuna telsa nuv akkada thitesthav amo ani last year love you ina ana esari type cheyali antene pack ithuna aa impact maintain chesthunav telsa ala ani chetu akabaku na limits lo nen untuna anthey nitho bayapadi kadh sareyna(Bayaperthuna ani mathram asal anukoku)Just kidding
                Nen Anali anukonte second petadhu nuv block cheyali antey second petadhu anthey theda mana edharki! avani pakkana perthe Just listen life lo entha stress una depressed ga una problem una ee fellow appudaina available ga untadu vindaniki solve cheyadaniki nik kantu ochi nuv matladav adhe minus point nene ochi adagali! but adhokati feel free i am not a new person to tell all this right!? eppudu em levu le nuv ochi nak chpadaniki anukuntuna nen ithey! everything is going well in our lyfs stress tapa adhi kuda you will overcome!entha matladi challa rojulu ithundhi nuv ala anukontovu evani cringe oo nibba la talking enti edu ani but in my perceptive i feel so much free,to be frank still i feel like that!And still you are the only person i freely talk like this,
                You changed me a lot, Ammu — a lot. Even though you didn’t do anything, thank you. What I am now is partly because of you. For some reason, I feel relieved sometimes… I’m not like others.I hope the bond we share never fades. You were 13 when we met, and now you’re 19 (Auntie vibes, haha). No matter what circumstances we faced, we stayed together — and for that, a big thanks. You only left in my life(Ardham chesko ega explain cheyalen duram petesa andharni touch lo lekunda simple ga chpli antey just chpthuna nik) Antey frnd ana enemy ana nuvve nak!
              </p>

              <p>
                Kochem limit nunchi bytaki ostha Love you!
                Vaka Chinna Letter type Elantivi birthday ani chepi ani matladesthe better oka excuse(Hehe)Normal days lo ela 
matladam kabatiii!
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed text-lg md:text-xl font-serif italic mt-8 text-right">
              With all my love,<br />
              Jeelani/Your Headache
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
            
          </p>
        </div>
      </div>
    </section>
  );
}
