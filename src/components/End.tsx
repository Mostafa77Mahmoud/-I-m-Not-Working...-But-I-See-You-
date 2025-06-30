import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Circle } from 'lucide-react';

const End: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fade in effect
    const fadeInTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Enable button after 3 seconds
    const buttonTimer = setTimeout(() => {
      setButtonEnabled(true);
    }, 3000);

    // Start fade out after 5-7 seconds (6 seconds chosen)
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 6000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(buttonTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  const handleHomeClick = () => {
    if (buttonEnabled) {
      navigate('/');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-8 relative overflow-hidden transition-all duration-[3000ms] ${fadeOut ? 'opacity-0 bg-black' : 'opacity-100'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`max-w-4xl mx-auto text-center space-y-12 transition-all duration-1000 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* End Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-2xl shadow-gray-500/50">
              <Circle className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            dir="rtl"
          >
            أنا مش اختفيت… بس جه وقت نهايتي الحتمية.
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
        </div>

        {/* Return Home Button */}
        <div className="space-y-8">
          <button
            onClick={handleHomeClick}
            disabled={!buttonEnabled}
            className={`group relative inline-flex items-center gap-3 px-8 py-4 border-2 font-medium text-lg rounded-full transition-all duration-300 backdrop-blur-sm ${
              buttonEnabled 
                ? 'border-gray-400/30 text-gray-300 hover:border-white/50 hover:text-white hover:shadow-lg hover:shadow-gray-500/25 bg-white/5 cursor-pointer' 
                : 'border-gray-600/20 text-gray-500 bg-white/2 cursor-not-allowed'
            }`}
            dir="rtl"
          >
            <Home 
              className={`w-5 h-5 transition-transform duration-300 ${
                buttonEnabled ? 'group-hover:scale-110' : ''
              }`} 
            />
            ارجع لبدايتي
            {buttonEnabled && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            )}
          </button>

          {/* Button Status Indicator */}
          {!buttonEnabled && (
            <div className="text-gray-500 text-sm animate-pulse">
              انتظر...
            </div>
          )}
        </div>

        {/* Completion Visualization */}
        <div className="relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-black border-4 border-gray-600 shadow-2xl shadow-gray-900/50 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-500 flex items-center justify-center">
              <div className="text-4xl animate-pulse text-gray-300">∞</div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/5 to-white/20 pointer-events-none"></div>
        </div>

        {/* Floating end particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default End;