"use client"
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Heart, Send, Facebook, Instagram, Twitter, Youtube, Award, Star, ChefHat } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Simulate newsletter subscription
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Menu', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Catering', href: '/catering' }
  ]

  const services = [
    { name: 'Custom Cakes', href: '/custom-cakes' },
    { name: 'Wedding Cakes', href: '/wedding-cakes' },
    { name: 'Corporate Orders', href: '/corporate' },
    { name: 'Delivery Service', href: '/delivery' },
    { name: 'Baking Classes', href: '/classes' },
    { name: 'Gift Cards', href: '/gift-cards' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refunds' }
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, name: 'YouTube', href: '#', color: 'hover:text-red-500' }
  ]


  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold text-red-500">The Taste</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting delicious memories since 2008. From artisan breads to custom wedding cakes, 
              we bring passion and expertise to every creation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 text-red-500 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 text-red-500 mr-3" />
                <span>hello@thetaste.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 text-red-500 mr-3 mt-1" />
                <span>123 Baker Street<br />Sweet City, SC 12345</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-3">
                Subscribe to get updates on new items and special offers!
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-600 text-white p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center">
                    <Heart className="h-4 w-4 mr-2" />
                    <span className="text-sm">Thank you for subscribing!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-lg transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Clock className="h-4 w-4 text-red-500 mr-2" />
                Business Hours
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Mon - Fri</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday</span>
                  <span>7:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sunday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Holidays</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        {/* Chef's Message */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <ChefHat className="h-8 w-8 text-red-500 mx-auto mb-3" />
            <blockquote className="text-gray-300 italic mb-3">
              "Every creation at The Taste is made with passion, precision, and love. 
              Thank you for being part of our sweet journey."
            </blockquote>
            <cite className="text-red-400 font-medium">- Chef Rajesh Kumar, Founder</cite>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 The Taste Bakery & Pastry. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs text-gray-500">
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                <span>4.9/5 Customer Rating</span>
              </div>
              <div>Licensed & Insured Bakery</div>
              <div>Health Department Certified</div>
              <div>Established 2008</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm">
            <span className="font-medium">Need urgent assistance?</span>
            <span className="mx-2">•</span>
            <span>Call our priority line: (555) 999-CAKE</span>
            <span className="mx-2">•</span>
            <span>Available during business hours</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
