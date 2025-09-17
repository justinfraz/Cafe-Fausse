import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Star, Users } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Cuisine',
      description: 'Recognized for culinary excellence and innovative dishes that blend tradition with modern flair.',
    },
    {
      icon: Star,
      title: 'Exceptional Service',
      description: 'Our dedicated team ensures every dining experience is memorable and perfectly executed.',
    },
    {
      icon: Users,
      title: 'Intimate Atmosphere',
      description: 'An elegant setting perfect for romantic dinners, business meetings, and special celebrations.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
            Café Fausse
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 leading-relaxed">
            Where Italian Tradition Meets Modern Innovation
          </p>
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of authentic flavors and contemporary culinary artistry 
            in the heart of Washington, DC
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="bg-gold hover:bg-gold-dark text-gray-900 font-semibold py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Make a Reservation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/menu"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 flex items-center justify-center"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              An Unforgettable Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2010, we've been crafting exceptional dining experiences that celebrate 
              the finest ingredients and time-honored techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-burgundy bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy group-hover:bg-opacity-20 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-burgundy" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Restaurant Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Where Passion Meets Perfection
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chef Antonio Rossi and restaurateur Maria Lopez founded Café Fausse with a simple vision: 
                to create a dining destination where exceptional food meets warm hospitality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every dish tells a story of carefully selected ingredients, masterful preparation, 
                and the love of bringing people together around the table.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-burgundy font-semibold hover:text-burgundy-dark transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef preparing food"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default Home;