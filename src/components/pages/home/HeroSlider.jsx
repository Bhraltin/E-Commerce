import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "SUMMER 2020",
    description: "We know how large objects will act, but things on a small scale.",
    image: "/images/hero1.jpg",
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    title: "NEW COLLECTION",
    subtitle: "SUMMER 2020",
    description: "We know how large objects will act, but things on a small scale.",
    image: "/images/hero2.jpg",
    buttonText: "SHOP NOW",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#17C6CA]">
      <div
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
                {/* Text Content */}
                <div className="text-white space-y-6 max-w-xl">
                  <h3 className="text-xl font-medium tracking-wide">
                    {slide.subtitle}
                  </h3>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-lg opacity-90">
                    {slide.description}
                  </p>
                  <button className="bg-[#2DC071] hover:bg-[#248c55] transition-colors duration-300 text-white px-10 py-4 text-base font-bold tracking-wide">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Image - Hidden on mobile */}
                <div className="hidden md:block">
                  <img
                    src={slide.image}
                    alt="Collection Preview"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-opacity hover:opacity-75"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full transition-opacity hover:opacity-75"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
      </button>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30">
        <div 
          className="h-full bg-white transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
