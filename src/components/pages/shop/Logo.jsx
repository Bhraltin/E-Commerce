import React from 'react';

const Logo = () => {
  const logos = [
    {
      id: 1,
      src: "placeholder.svg",
      alt: "Hooli Logo",
      width: "103",
      height: "34"
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "Lyft Logo",
      width: "83",
      height: "54"
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "Vector Logo",
      width: "102",
      height: "75"
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Stripe Logo",
      width: "104",
      height: "44"
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "AWS Logo",
      width: "104",
      height: "62"
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Reddit Logo",
      width: "85",
      height: "76"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="w-full flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-w-[120px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
