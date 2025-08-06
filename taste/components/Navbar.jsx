"use client"
import React, { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import Link from "next/link";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="relative z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-red-600">The Taste</div>
            <div className="ml-2 text-sm text-red-500 font-medium">
              Bakery & Pastry
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="home"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="products"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="about"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="gallery"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="contact"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-red-500 mr-1" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-red-500 mr-1" />
              <span>7AM - 9PM</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="home"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="products"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                Products
              </Link>
              <Link
                href="about"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                About
              </Link>
              <Link
                href="gallery"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                Gallery
              </Link>
              <Link
                href="contact"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4 text-red-500 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-red-500 mr-2" />
                  <span>Open 7AM - 9PM Daily</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
