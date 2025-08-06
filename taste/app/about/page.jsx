"use client"
import { useState } from 'react'
import { Award, Users, Heart, Star, ChefHat, Globe, Trophy } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story')

  const achievements = [
    { icon: Trophy, title: "15+ Years Experience", desc: "International culinary expertise" },
    { icon: Award, title: "Michelin Trained", desc: "Trained under world-renowned chefs" },
    { icon: Globe, title: "5 Countries", desc: "Worked across multiple continents" },
    { icon: Star, title: "50+ Awards", desc: "Recognition for culinary excellence" }
  ]

  const specialties = [
    {
      title: "Artisan Breads",
      description: "Traditional European techniques with modern twists",
      image: "/placeholder.svg?height=200&width=300&text=Artisan+Breads"
    },
    {
      title: "Wedding Cakes",
      description: "Custom designs for your special moments",
      image: "/placeholder.svg?height=200&width=300&text=Wedding+Cakes"
    },
    {
      title: "French Pastries",
      description: "Authentic French techniques and flavors",
      image: "/placeholder.svg?height=200&width=300&text=French+Pastries"
    },
    {
      title: "Custom Desserts",
      description: "Bespoke creations for any occasion",
      image: "/placeholder.svg?height=200&width=300&text=Custom+Desserts"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About The Taste</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Where passion meets perfection, and every creation tells a story of culinary excellence
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-2">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'chef', label: 'Master Chef' },
              { id: 'specialties', label: 'Specialties' },
              { id: 'values', label: 'Our Values' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      {activeTab === 'story' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Sweet Beginning</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The Taste was born from a simple dream - to bring the finest international baking 
                    traditions to our local community...
                  </p>
                  <p>
                    Our journey began in 2008 when our founder, Chef Rajesh Kumar, returned from his 
                    international culinary adventures...
                  </p>
                  <p>
                    Today, we continue to honor traditional baking methods while embracing innovation...
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">15+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">10,000+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/interior.jpg"
                  alt="The Taste bakery interior"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-red-500" />
                    <span className="font-semibold text-gray-900">Made with Love</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Master Chef */}
      {activeTab === 'chef' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Master Chef</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The culinary genius behind The Taste's extraordinary creations
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=Chef+Rajesh+Kumar"
                  alt="Chef Rajesh Kumar"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Master Chef
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">Chef Rajesh Kumar</h3>
                <p className="text-xl text-red-600 mb-6">Founder & Executive Chef</p>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p>With over 15 years of international culinary experience...</p>
                  <p>Chef Kumar has worked in some of the world's most renowned establishments...</p>
                  <p>"Every dessert should tell a story, evoke an emotion, and create a memory."</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Career Highlights:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <ChefHat className="h-5 w-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Executive Pastry Chef - Taj Hotels</div>
                        <div className="text-sm text-gray-600">Led pastry operations across 5 luxury properties</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">International Training</div>
                        <div className="text-sm text-gray-600">Le Cordon Bleu Paris, Culinary Institute of America</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-red-500 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">Awards & Recognition</div>
                        <div className="text-sm text-gray-600">James Beard Nominee, World Pastry Cup Finalist</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <achievement.icon className="h-6 w-6 text-red-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">{achievement.title}</div>
                      <div className="text-xs text-gray-600">{achievement.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Specialties */}
      {activeTab === 'specialties' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialties</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our signature creations that have made The Taste a culinary destination
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialties.map((specialty, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                    <Image
                      src={specialty.image}
                      alt={specialty.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{specialty.title}</h3>
                      <p className="text-sm text-gray-200">{specialty.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-red-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Orders</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Looking for something special? Our team can create custom cakes, pastries, and desserts 
                for any occasion.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Custom Order
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      {activeTab === 'values' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at The Taste
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                icon: Heart, title: "Passion", desc: "Every creation is made with genuine love..."
              }, {
                icon: Award, title: "Quality", desc: "We use only the finest ingredients..."
              }, {
                icon: Users, title: "Community", desc: "We’re more than a bakery – we’re a part of your life."
              }].map((val, idx) => (
                <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <val.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "To create exceptional baked goods that bring joy to people's lives..."
                </p>
                <div className="mt-6 text-red-600 font-semibold">- Chef Rajesh Kumar, Founder</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience The Taste Difference</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Visit us today and discover why we're the preferred choice for food lovers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Our Store
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Our Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
