import React from 'react';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import BookingForm from '../components/BookingForm';
import { mockCars } from '../data/mockData';
import { Car, Zap, Shield, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const popularCars = mockCars.filter(car => car.rating >= 4.5).slice(0, 3);
  const indianCars = mockCars.filter(car => car.category === 'Indian').slice(0, 3);
  const foreignCars = mockCars.filter(car => car.category === 'Foreign').slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Booking Form Section on Home */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Book Your Car Now
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Fill in your details below to reserve your car instantly.
          </p>
          <BookingForm showBackButton={false} />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CarRental?</h2>
            <p className="text-xl text-gray-600">Experience the best car rental service with premium features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Car className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Fleet</h3>
              <p className="text-gray-600">Wide selection of well-maintained vehicles from top brands</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe & Secure</h3>
              <p className="text-gray-600">All vehicles are fully insured and regularly inspected</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔥 Popular Cars</h2>
            <p className="text-xl text-gray-600">Most loved cars by our customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Indian Cars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🇮🇳 Indian Cars</h2>
            <p className="text-xl text-gray-600">Quality vehicles from Indian manufacturers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {indianCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Foreign Cars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌍 Foreign Cars</h2>
            <p className="text-xl text-gray-600">Luxury and performance from international brands</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foreignCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;