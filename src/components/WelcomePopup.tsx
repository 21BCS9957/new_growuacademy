import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { LoadingButton } from "@/components/LoadingButton";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 z-10"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Header with Icon */}
        <div className="text-center pt-8 pb-6 px-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Are You Ready to Begin Your<br />
            <span className="text-pink-500">Video Editing Journey?</span>
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed">
            Join us this <span className="font-semibold text-purple-600">Saturday</span> for a <span className="font-semibold">2-hour FREE</span><br />
            <span className="font-semibold">Offline Video Editing Masterclass</span><br />
            in <span className="font-semibold text-purple-600">Mohali sector 74</span>.
          </p>
        </div>

        {/* Purple Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 mx-6 rounded-xl mb-6">
          <div className="flex items-center text-white">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium">
                You'll get exclusive bonuses and a certificate upon completing the masterclass.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-6 pb-6">
          <LoadingButton
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            href="https://growumedia.notion.site/2d1ffe2f0dd980318713c3effba1f4b6?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎯 Reserve Your Seat
          </LoadingButton>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            Limited seats available. Secure your spot now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;