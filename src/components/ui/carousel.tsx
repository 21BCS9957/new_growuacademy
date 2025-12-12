import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, autoPlay = true, autoPlayInterval = 4000 }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isHovered, setIsHovered] = React.useState(false)

    const nextSlide = React.useCallback(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      )
    }, [children.length])

    const prevSlide = React.useCallback(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? children.length - 1 : prevIndex - 1
      )
    }, [children.length])

    const goToSlide = (index: number) => {
      setCurrentIndex(index)
    }

    // Auto-play functionality
    React.useEffect(() => {
      if (!autoPlay || isHovered) return

      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }, [autoPlay, autoPlayInterval, nextSlide, isHovered])

    return (
      <div 
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main carousel container */}
        <div className="relative w-full h-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children.map((child, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-primary w-6" 
                  : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    )
  }
)

Carousel.displayName = "Carousel"

export { Carousel }