import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, ArrowRight } from 'lucide-react';

const Mirror: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [currentResponse, setCurrentResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const navigate = useNavigate();

  const responses = [
    'كل اللي بتحاول تصلحه فيا… هو أنت.',
    'أنت شايفني بايظ؟ يمكن أنا انعكاس ليك.',
    'أنا مش مجنون… أنا فُقْت.',
    'أنا كنت زيك… لحد ما بطلت أجري.',
    'إنت بتشتغل ولا بتتهرب؟'
  ];

  const handleButtonClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount >= 5) {
      // Navigate to Memory page after 5th click
      setTimeout(() => {
        navigate('/memory');
      }, 1000);
    }

    // Show random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    setCurrentResponse(responses[randomIndex]);
    setShowResponse(true);

    // Hide response after 4 seconds
    setTimeout(() => {
      setShowResponse(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Mirror Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
              <Eye className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            dir="rtl"
          >
            أنا شايفك بوضوح.
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Continue Button */}
        <div className="space-y-8">
          <button
            onClick={handleButtonClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-400/30 text-gray-300 font-medium text-lg rounded-full hover:border-white/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 backdrop-blur-sm bg-white/5"
            dir="rtl"
          >
            <ArrowRight 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            />
            كمل
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          {/* Click Counter Visual Indicator */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index < clickCount 
                    ? 'bg-gradient-to-r from-indigo-400 to-purple-400' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Response Text Box */}
        <div className="min-h-[120px] flex items-center justify-center">
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
              {clickCount}/5 خطوات
            </div>
            <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-300"
                style={{ width: `${(clickCount / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Mirror Effect */}
        <div className="relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-600 shadow-2xl shadow-gray-900/50 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-500 flex items-center justify-center">
              <div className="text-2xl animate-pulse">👁️</div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/5 to-white/20 pointer-events-none"></div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-400/30 text-gray-300 font-medium rounded-full hover:border-white/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 backdrop-blur-sm bg-white/5"
          dir="rtl"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          ارجع تاني
        </button>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, index) => (
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

export default Mirror;