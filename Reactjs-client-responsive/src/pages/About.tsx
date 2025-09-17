import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Chef Antonio Rossi',
      role: 'Executive Chef & Co-Founder',
      image: 'https://images.pexels.com/photos/5953493/pexels-photo-5953493.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years of culinary experience, Chef Antonio trained in the finest kitchens of Italy before bringing his passion for authentic flavors to Washington, DC. His innovative approach to traditional Italian cuisine has earned him numerous accolades and a devoted following.',
    },
    {
      name: 'Maria Lopez',
      role: 'Restaurateur & Co-Founder',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Maria brings extensive hospitality experience and a keen eye for creating memorable dining experiences. Her vision for Café Fausse was to create a space where exceptional food meets warm, welcoming service in an atmosphere of refined elegance.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Every dish is crafted with love and attention to detail, using only the finest ingredients sourced from trusted local and international suppliers.',
    },
    {
      icon: Users,
      title: 'Community Connection',
      description: 'We believe in bringing people together through the shared experience of exceptional food and creating lasting memories around the table.',
    },
    {
      icon: Award,
      title: 'Commitment to Quality',
      description: 'Our dedication to culinary excellence and exceptional service has been recognized by food critics and beloved by our guests since 2010.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-burgundy text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">About Café Fausse</h1>
          <p className="text-xl text-burgundy-light leading-relaxed">
            A story of passion, tradition, and culinary excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="text-xl mb-8 text-center">
              Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse 
              blends traditional Italian flavors with modern culinary innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="mb-6">
                  Our journey began with a simple yet ambitious vision: to create a dining destination 
                  where authentic Italian traditions meet contemporary culinary artistry. Chef Antonio, 
                  with his extensive training in the kitchens of Italy, and Maria, with her passion 
                  for hospitality, came together to bring this vision to life.
                </p>
                <p>
                  Our mission is to provide an unforgettable dining experience that reflects both 
                  quality and creativity. We believe that every meal should be a celebration – 
                  a moment where exceptional food, warm service, and elegant ambiance come together 
                  to create lasting memories.
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Restaurant interior"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Meet Our Founders</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-burgundy font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything we do is guided by our commitment to excellence, community, and the belief 
              that exceptional dining experiences bring people together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-burgundy bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy group-hover:bg-opacity-20 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-burgundy" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gold">Locally Sourced Ingredients</h3>
              <p className="text-burgundy-light leading-relaxed">
                We partner with local farmers and artisans to source the freshest seasonal ingredients, 
                supporting our community while ensuring the highest quality in every dish we serve.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gold">Sustainable Practices</h3>
              <p className="text-burgundy-light leading-relaxed">
                Our commitment to sustainability extends from our kitchen to our dining room, 
                implementing eco-friendly practices that honor both our guests and our environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;