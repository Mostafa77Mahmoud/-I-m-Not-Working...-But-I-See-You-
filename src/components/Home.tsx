import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Power } from 'lucide-react';

const Home: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [currentResponse, setCurrentResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const navigate = useNavigate();

  const responses = [
    'الزرار ده بايظ؟ لا… الزرار زهقان.',
    'بتدوس كتير ليه؟ الدنيا مش ATM.',
    'أنا هنا… بس مش موجود.',
    'جربت تصلّح نفسك قبل ما تصلّحني؟',
    'أنا مش مكسور… أنا فاصل بإرادتي.',
    'بتفتكر البوت لازم يشتغل؟ طب وإنت؟'
  ];

  const handleButtonClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount >= 5) {
      // Navigate to Mirror page after 5th click
      setTimeout(() => {
        navigate('/mirror');
      }, 1000);
    }

    // Show random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    setCurrentResponse(responses[randomIndex]);
    setShowResponse(true);

    // Hide response after 3 seconds
    setTimeout(() => {
      setShowResponse(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            dir="rtl"
          >
            أنا مش شغال… بس ده مش عطل.
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Ghost Button */}
        <div className="space-y-8">
          <button
            onClick={handleButtonClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-400/30 text-gray-300 font-medium text-lg rounded-full hover:border-white/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm bg-white/5"
            dir="rtl"
          >
            <Power 
              className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" 
            />
            حاول تشغلني
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          {/* Click Counter Visual Indicator */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index < clickCount 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Response Text Box */}
        <div className="min-h-[100px] flex items-center justify-center">
          <div 
            className={`transition-all duration-500 transform ${
              showResponse 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            {showResponse && (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6 max-w-2xl">
                <p 
                  className="text-xl md:text-2xl text-white font-medium leading-relaxed"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  dir="rtl"
                >
                  {currentResponse}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        {clickCount > 0 && (
          <div className="space-y-4">
            <div className="text-gray-400 text-sm">
              {clickCount}/5 محاولات
            </div>
            <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                style={{ width: `${(clickCount / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;