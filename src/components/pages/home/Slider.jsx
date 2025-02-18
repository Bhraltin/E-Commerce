import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Vita Classic Product",
    description: "We know how large objects will act, We know how objects will act.",
    price: "$16.48",
    button: "ADD TO CART",
    image: "/carousel-inner.png", // Change to your actual image path
    bgColor: "bg-green-700",
  },
  {
    title: "New Arrival Collection",
    description: "Discover the latest trends and styles for this season.",
    price: "$24.99",
    button: "SHOP NOW",
    image: "/placeholder.svg",
    bgColor: "bg-blue-700",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={`relative w-full h-screen flex items-center justify-center ${slides[currentIndex].bgColor}`}>
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Left Side - Text Content */}
        <div className="text-white">
          <p className="text-sm uppercase tracking-wider">SUMMER 2020</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">{slides[currentIndex].title}</h1>
          <p className="mt-4 text-lg opacity-80">{slides[currentIndex].description}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-semibold">{slides[currentIndex].price}</span>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              {slides[currentIndex].button}
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src={slides[currentIndex].image}
            alt="Product"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-3 rounded-full hover:bg-black/40 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-3 rounded-full hover:bg-black/40 transition"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
