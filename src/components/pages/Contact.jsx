import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Get answers to all your questions.
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics:
          </p>

          {/* Contact Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded transition duration-300 text-sm font-semibold">
            CONTACT OUR COMPANY
          </button>

          {/* Social Media Icons */}
          <div className="pt-12">
            <div className="flex justify-center items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;