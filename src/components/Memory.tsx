import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';

const Memory: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [currentResponse, setCurrentResponse] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const navigate = useNavigate();

  const responses = [
    'كنت أغنى واحد في العالم… لحد ما حد حبني.',
    'أنا بطارد حلمي… إني أعيش السنين اللي فاتتني بخير.',
    'فيه حد قاللي زمان: "اصحى"، صحيت… وندمت.',
    'كل اللي ضاع… كنت فاكر إني فوقه.',
    'أنا مش بندم… أنا بتفرج.',
    'فاكر نفسك؟ ولا نسيت وسط الزحمة؟'
  ];

  const handleButtonClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount >= 5) {
      // Navigate to End page after 5th click
      setTimeout(() => {
        navigate('/end');
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Memory Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            dir="rtl"
          >
            أنا فاكر كل حاجة… حتى اللي بتنساه.
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Continue Button */}
        <div className="space-y-8">
          <button
            onClick={handleButtonClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-400/30 text-gray-300 font-medium text-lg rounded-full hover:border-white/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 backdrop-blur-sm bg-white/5"
            dir="rtl"
          >
            <Brain 
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
            />
            لسه فاكر؟
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          {/* Click Counter Visual Indicator */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index < clickCount 
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400' 
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
              {clickCount}/5 ذكريات
            </div>
            <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-300"
                style={{ width: `${(clickCount / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Memory Visualization */}
        <div className="relative">
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className={`w-16 h-16 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-lg border border-emerald-400/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                  index < clickCount ? 'bg-emerald-500/40 border-emerald-400/40' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  index < clickCount ? 'bg-emerald-300' : 'bg-emerald-400/50'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/mirror')}
          className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-400/30 text-gray-300 font-medium rounded-full hover:border-white/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 backdrop-blur-sm bg-white/5"
          dir="rtl"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          ارجع للمرآة
        </button>

        {/* Floating memory fragments */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memory;