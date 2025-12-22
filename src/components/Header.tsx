import { LoadingButton } from "@/components/LoadingButton";
import logo from "@/assets/logo1.png";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-background/20 backdrop-blur-md border-b border-border/20 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative">
            <img 
              src={logo} 
              alt="GrowU Academy Logo" 
              className="h-20 w-auto sm:h-20 md:h-22 lg:h-24 transition-all duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* CTA Button */}
        <LoadingButton 
          size="lg" 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 lg:py-3 text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          href="https://growumedia.notion.site/2d1ffe2f0dd980318713c3effba1f4b6?pvs=105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Now
        </LoadingButton>
      </div>
    </header>
  );
};

export default Header;