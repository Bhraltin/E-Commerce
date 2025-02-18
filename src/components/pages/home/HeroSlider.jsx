
import { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "SUMMER 2020",
    description: "We know how large objects will act, but things on a small scale.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-shop-header-1-A3K8AgpHYJV888dxWke2kDGEkcR9Zb.png",
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
    <div className="relative w-full overflow-hidden bg-cyan-400">
      <div
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <div className="container mx-auto px-4 flex items-center min-h-[600px]">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white space-y-6">
                  <span className="text-xl font-medium">{slide.subtitle}</span>
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
                  <p className="text-lg md:text-xl">{slide.description}</p>
                  <button className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-600 ">
                    {slide.buttonText}
                  </button>
                </div>
                <div className="hidden md:block">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt="Collection Preview"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-black p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-black p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

