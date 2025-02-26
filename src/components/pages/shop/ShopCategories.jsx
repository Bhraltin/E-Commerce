import React from 'react';
import { Link } from 'react-router-dom';

const ShopCategories = () => {
  const categories = [
    {
      id: 1,
      title: "CLOTHS",
      items: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-shop-cards-18-OAk5GOUHFhi1U8I7MT7ZC0Vsdt6lgA.png",
      color: "bg-gray-800",
    },
    {
      id: 2,
      title: "CLOTHS",
      items: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-shop-cards-18-OAk5GOUHFhi1U8I7MT7ZC0Vsdt6lgA.png",
      color: "bg-cyan-500",
    },
    {
      id: 3,
      title: "CLOTHS",
      items: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-shop-cards-18-OAk5GOUHFhi1U8I7MT7ZC0Vsdt6lgA.png",
      color: "bg-rose-300",
    },
    {
      id: 4,
      title: "CLOTHS",
      items: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-shop-cards-18-OAk5GOUHFhi1U8I7MT7ZC0Vsdt6lgA.png",
      color: "bg-rose-400",
    },
    {
      id: 5,
      title: "CLOTHS",
      items: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-shop-cards-18-OAk5GOUHFhi1U8I7MT7ZC0Vsdt6lgA.png",
      color: "bg-fuchsia-400",
    },
  ];

  return (
    <div className="container px-2 py-2">
      {/* Scrollable container for desktop */}
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-3 md:overflow-x-auto md:scroll-smooth md:snap-x md:snap-mandatory no-scrollbar">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.title.toLowerCase()}`}
              className="relative group w-full md:w-52 lg:w-64 flex-shrink-0 snap-start"
            >
              <div className={`relative aspect-square md:aspect-[4/5] overflow-hidden rounded-lg ${category.color}`}>
                {/* Image */}
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-base font-bold mb-0.5">{category.title}</h3>
                  <p className="text-xs opacity-90">{category.items} Items</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

     
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ShopCategories;