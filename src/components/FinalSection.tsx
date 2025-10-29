import { Camera } from 'lucide-react';

// --- Import your image ---
import finalFeaturedImage from '../assets/AMMU5.jpg'; // Adjust .jpg if needed

// --- Edit details & Assign image ---
const finalMoment = {
  title: 'Enemies', // Optional: Edit this title
  description: 'Na diste thagile la undhi ee pic chusi!!!kidding na Fav pic edhi adho ekkada adjust chesesa dhini ', // Edit this description
  imageUrl: finalFeaturedImage,
};

export function FinalSection() {
  return (
    <section id="final" className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 py-20 px-4 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
           <Camera className="w-12 h-12 text-rose-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            One Last Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Paina uncle, Aunty, bamar oo sry thammudu unte nen kuda barabar undali ga andhuke eda mana picture.
          </p>
        </div>

        {/* Single Image Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col items-center p-6 md:p-8 text-center mx-4">
          {/* Image Area - UPDATED max-w class */}
          {/* Changed max-w-xl to max-w-2xl */}
          <div className="w-full max-w-2xl aspect-video mb-6 rounded-md overflow-hidden bg-gray-200 shadow-inner"> {/* <--- EDITED THIS LINE */}
            {finalMoment.imageUrl ? (
              <img
                src={finalMoment.imageUrl}
                alt={finalMoment.title || `Final Moment`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400">Image loading error</p>
              </div>
            )}
          </div>

          {/* Optional Title */}
          {finalMoment.title && (
             <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-3">
               {finalMoment.title}
             </h3>
          )}

          {/* Description */}
          <p className="text-slate-600 leading-relaxed text-lg">
            {finalMoment.description}
          </p>
        </div>

         {/* Final Footer Text */}
         <div className="mt-16 text-center text-gray-500 text-sm">
           <p>Made with ❤️ just for you, Ammu.</p>
           <p>By Your's Lovely Headache</p>
         </div>
      </div>
    </section>
  );
}