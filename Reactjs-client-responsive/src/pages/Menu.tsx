import React from 'react';

const Menu = () => {
  const menuSections = [
    {
      title: 'Starters',
      items: [
        {
          name: 'Bruschetta',
          description: 'Fresh tomatoes, basil, olive oil, and toasted baguette slices',
          price: '$8.50',
        },
        {
          name: 'Caesar Salad',
          description: 'Crisp romaine with homemade Caesar dressing',
          price: '$9.00',
        },
      ],
    },
    {
      title: 'Main Courses',
      items: [
        {
          name: 'Grilled Salmon',
          description: 'Served with lemon butter sauce and seasonal vegetables',
          price: '$22.00',
        },
        {
          name: 'Ribeye Steak',
          description: '12 oz prime cut with garlic mashed potatoes',
          price: '$28.00',
        },
        {
          name: 'Vegetable Risotto',
          description: 'Creamy Arborio rice with wild mushrooms',
          price: '$18.00',
        },
      ],
    },
    {
      title: 'Desserts',
      items: [
        {
          name: 'Tiramisu',
          description: 'Classic Italian dessert with mascarpone',
          price: '$7.50',
        },
        {
          name: 'Cheesecake',
          description: 'Creamy cheesecake with berry compote',
          price: '$7.00',
        },
      ],
    },
    {
      title: 'Beverages',
      items: [
        {
          name: 'Red Wine (Glass)',
          description: 'A selection of Italian reds',
          price: '$10.00',
        },
        {
          name: 'White Wine (Glass)',
          description: 'Crisp and refreshing',
          price: '$9.00',
        },
        {
          name: 'Craft Beer',
          description: 'Local artisan brews',
          price: '$6.00',
        },
        {
          name: 'Espresso',
          description: 'Strong and aromatic',
          price: '$3.00',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-burgundy text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-burgundy-light leading-relaxed">
            Discover our carefully curated selection of dishes, crafted with the finest ingredients 
            and inspired by traditional Italian cuisine with a modern twist
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-burgundy mb-4">
                  {section.title}
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto"></div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-6">
                          <span className="text-2xl font-bold text-burgundy">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Ready to Experience Our Cuisine?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Reserve your table today and let us take you on a culinary journey 
            that celebrates the art of fine dining
          </p>
          <a
            href="/reservations"
            className="inline-block bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-4 px-8 rounded-md transition-colors duration-300 transform hover:scale-105"
          >
            Make a Reservation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;