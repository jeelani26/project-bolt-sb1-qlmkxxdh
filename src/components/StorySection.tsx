import { Image as ImageIcon } from 'lucide-react';

// --- 1. Import all four images ---
import ammuImage2 from '../assets/AMMU2.jpg'; // Father picture
import ammuImage1 from '../assets/AMMU1.jpg'; // Mother picture
import ammuImage3 from '../assets/AMMU3.jpg'; // Brother picture
import ammuImage4 from '../assets/AMMU4.jpg'; // Fourth picture

// --- 2. Update titles, descriptions, and assign images ---
const milestones = [
  {
    title: 'A Father\'s Pride', // Updated Title
    description: 'The Best Daughter in the world He will be so Proud of you for sure He might not always say it out loud, but you can see it in his eyes. You’re his biggest pride. He’s watched you grow up, and still stand strong, and so yeah that makes him so proud, No matter how old you get, you’ll always be his little girl .', // Updated Description Prompt
    imageUrl: ammuImage2, // Assign Father picture
  },
  {
    title: 'A Mother\'s Love', // Updated Title
    description: 'I Don’t No, the bond between you and Aunty but i can say the days you doubted yourself, the times you worked hard without saying a word, and the moments you smiled even when things weren’t easy. And through it all, they’ve just looked at you with love but to them, you’re their biggest achievement. You’ve grown into someone kind, strong, and real and that’s all they ever wanted.', // Updated Description Prompt
    imageUrl: ammuImage1, // Assign Mother picture
  },
  {
    title: 'The Best Sister(abadham, as a little brother’s team)', // Updated Title
    description: ' He might tease you or act stubborn sometimes, but deep down, he looks up to you more than he’ll ever admit. You’re his example, his role model, and the person he quietly learns from, To be frank anuokonta vadu kuda na laga tayar avali ani you know na how good i am just kidding i want him to protect you from everything he will for sure nan kuda minchipovali ala grow avali', // Updated Description Prompt
    imageUrl: ammuImage3, // Assign Brother picture
  },
  {
    title: 'My Fav', // EDIT Title for 4th card
    description: '[Describe the moment or feeling this picture captures...]', // EDIT Description for 4th card
    imageUrl: ammuImage4, // Assign 4th picture
  }
];

export function StorySection() {
  return (
    <section id="story" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Cherished Connections
          </h2> {/* Updated Section Title */}
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Moments with the people who mean the world to her. Nen Nik Lekapoina Nen Ekkada unta barabar list lo.
          </p> {/* Updated Section Subtitle */}
        </div>

        {/* Grid for Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Area */}
              <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100">
                {milestone.imageUrl ? (
                  <img
                    src={milestone.imageUrl}
                    alt={milestone.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  // Placeholder shown only if image fails to load
                  <div className="flex flex-col items-center justify-center h-full text-center p-4">
                    <ImageIcon className="w-16 h-16 text-pink-300/60 mb-2" />
                    <p className="text-pink-400/50 text-sm font-medium">Image Error</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}