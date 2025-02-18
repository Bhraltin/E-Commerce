import { Link } from "react-router-dom";

export default function CategoryPick() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Men - Large Image */}
          <div className="md:col-span-1">
            <Link to="/category/men" className="relative block group">
              <img
                src="/placeholder.svg"
                alt="Men's Fashion"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white px-6 py-2 text-sm font-bold text-gray-900">
                  MEN
                </span>
              </div>
            </Link>
          </div>

          {/* Women - Large Image */}
          <div className="md:col-span-1">
            <Link to="/category/women" className="relative block group">
              <img
                src="/placeholder.svg"
                alt="Women's Fashion"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white px-6 py-2 text-sm font-bold text-gray-900">
                  WOMEN
                </span>
              </div>
            </Link>
          </div>

          {/* Right Column (Stacked Accessories & Kids) */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {/* Accessories */}
            <div className="relative block group">
              <Link to="/category/accessories">
                <img
                  src="/placeholder.svg"
                  alt="Accessories"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white px-6 py-2 text-sm font-bold text-gray-900">
                    ACCESSORIES
                  </span>
                </div>
              </Link>
            </div>

            {/* Kids */}
            <div className="relative block group">
              <Link to="/category/kids">
                <img
                  src="/placeholder.svg"
                  alt="Kids Fashion"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white px-6 py-2 text-sm font-bold text-gray-900">
                    KIDS
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
