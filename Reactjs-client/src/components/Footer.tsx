import React from 'react';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">Café Fausse</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span>1234 Culinary Ave, Suite 100<br />Washington, DC 20002</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span>(202) 555-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span>info@cafefausse.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-semibold text-gold mb-4">Hours of Operation</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold" />
                <div>
                  <p>Monday - Saturday</p>
                  <p className="text-gray-300">5:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold" />
                <div>
                  <p>Sunday</p>
                  <p className="text-gray-300">5:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-gold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Stay updated with our latest events and special offers.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Café Fausse. All rights reserved. Crafted with passion for exceptional dining.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;