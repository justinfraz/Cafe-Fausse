import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [
    {
      src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant interior ambiance',
      category: 'Interior',
    },
    {
      src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Grilled Salmon dish',
      category: 'Cuisine',
    },
    {
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant dining setup',
      category: 'Interior',
    },
    {
      src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chef preparing food',
      category: 'Kitchen',
    },
    {
      src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wine selection',
      category: 'Beverages',
    },
    {
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Private dining area',
      category: 'Interior',
    },
    {
      src: 'https://images.pexels.com/photos/33911272/pexels-photo-33911272.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Signature pasta dish',
      category: 'Cuisine',
    },
    {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bar area',
      category: 'Interior',
    },
  ];

  const awards = [
    {
      title: 'Culinary Excellence Award',
      year: '2022',
      icon: Award,
    },
    {
      title: 'Restaurant of the Year',
      year: '2023',
      icon: Star,
    },
    {
      title: 'Best Fine Dining Experience',
      subtitle: 'Foodie Magazine',
      year: '2023',
      icon: Award,
    },
  ];

  const reviews = [
    {
      text: 'Exceptional ambiance and unforgettable flavors.',
      author: 'Gourmet Review',
      rating: 5,
    },
    {
      text: 'A must-visit restaurant for food enthusiasts.',
      author: 'The Daily Bite',
      rating: 5,
    },
    {
      text: 'Outstanding service and incredible attention to detail.',
      author: 'Fine Dining Weekly',
      rating: 5,
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-burgundy text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Gallery</h1>
          <p className="text-xl text-burgundy-light leading-relaxed">
            Discover the beauty of Café Fausse through our collection of memorable moments
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Experience Our Atmosphere
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From our elegant dining rooms to our expertly crafted dishes, 
              every detail reflects our commitment to exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-semibold">{image.category}</p>
                    <p className="text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedication to culinary excellence has been recognized by industry leaders and food critics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gold bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:bg-opacity-20 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  {award.subtitle && (
                    <p className="text-burgundy font-medium mb-2">{award.subtitle}</p>
                  )}
                  <p className="text-gray-600 font-bold">{award.year}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-burgundy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">What Critics Say</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-burgundy-light leading-relaxed max-w-3xl mx-auto">
              Discover why food critics and culinary experts consistently praise our dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium mb-4 text-center">
                  "{review.text}"
                </blockquote>
                <p className="text-gold text-center font-semibold">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-gray-300 z-60"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-gray-300 z-60"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4 text-white">
              <p className="text-lg font-semibold">{images[selectedImage].alt}</p>
              <p className="text-gray-300">{images[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;