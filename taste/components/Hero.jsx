"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {'✨ Fresh Baked Daily ✨'}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Welcome to{' '}
                <span className="text-red-600">The Taste</span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700">
                  Bakery & Pastry
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-5 max-w-lg mx-auto lg:mx-0">
                Indulge in our freshly baked cakes, pastries, and artisanal breads. 
                Made with love, served with passion. Experience the perfect blend of 
                traditional recipes and modern flavors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                  Order Now
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Menu
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-10 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">50+</div>
                  <div className="text-sm text-gray-600">Daily Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10">
                <Image
                  src="/cake.png"
                  alt="Delicious chocolate cake with berries"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full"
                />
              </div>

              {/* Floating Images */}
              <div className="absolute -top-4 -left-4 z-20 animate-pulse">
                <Image
                  src="/pastry.png"
                  alt="Fresh croissants"
                  width={150}
                  height={150}
                  className="rounded-full shadow-lg bg-red-200 p-2"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 z-20 animate-pulse">
                <Image
                  src="/cookie.png"
                  alt="Colorful cupcakes"
                  width={120}
                  height={120}
                  className="rounded-full shadow-lg bg-red-200 p-2"
                />
              </div>

              <div className="absolute top-1/2 -right-8 z-20 hidden lg:block animate-pulse">
                <Image
                  src="/cake1.png"
                  alt="Fresh bread"
                  width={100}
                  height={100}
                  className=" shadow-lg bg-red-200 rounded-full p-2"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-red-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/4 -left-12 w-8 h-8 bg-red-400 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-100 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-red-50 to-transparent opacity-30"></div>
      </section>

      {/* Quick Info Bar */}
      
    </div>
  )
}
