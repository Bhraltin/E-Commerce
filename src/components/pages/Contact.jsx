import React from 'react';

const Contact = () => {
  const locations = [
    {
      city: "Paris",
      address: "1901 Thorn ridge Cir.",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "New York",
      address: "2715 Ash Dr. San Jose,",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "Berlin",
      address: "4140 Parker Rd.",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "London",
      address: "3517 W. Gray St. Utica,",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-700 to-blue-500">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Contact Info */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CONTACT US</h1>
            <p className="text-sm md:text-base opacity-90 mb-8">
              Problems trying to resolve the conflict between
              the two major realms of Classical physics:
              Newtonian mechanics
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition duration-300">
              CONTACT US
            </button>
          </div>

          {/* Right Side - Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-white">
                <h3 className="text-xl font-semibold mb-4">{location.city}</h3>
                <div className="space-y-2 text-sm">
                  <p>{location.address}</p>
                  <p>{location.zipCode}</p>
                  <div className="pt-2">
                    <p>Phone: {location.phone}</p>
                    <p>Fax: {location.fax}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;