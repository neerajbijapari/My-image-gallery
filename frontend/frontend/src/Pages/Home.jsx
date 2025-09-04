import React from "react";
import { Camera, Upload as UploadIcon, Shield, Eye, Image, Lock, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* ================= Hero Section ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Personal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Image Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Store, organize, and showcase your precious memories in a secure, beautiful gallery. Login to upload unlimited photos and access them anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Browse Gallery
            </button>
          </div>
        </div>

        {/* Hero Gallery Preview */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className={`aspect-square rounded-2xl shadow-lg transform ${idx % 2 === 0 ? "rotate-2" : "-rotate-1"} hover:rotate-0 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-500`}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Image className="h-8 w-8 text-white/80" />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 text-center">
              <Camera className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 font-semibold text-lg">Your Beautiful Photos</p>
              <p className="text-gray-500 text-sm">Login to start uploading</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Key Features ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why ImageGallery?</h2>
            <p className="text-xl text-gray-600">Simple, secure, and beautiful photo management</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secure Login Required</h3>
              <p className="text-gray-600">Only authenticated users can upload photos. Your gallery is completely private and secure.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <UploadIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Easy Upload</h3>
              <p className="text-gray-600">Once logged in, upload multiple photos instantly. Supports all popular image formats.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Beautiful Gallery</h3>
              <p className="text-gray-600">View all your uploaded photos in a stunning, organized gallery interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real users</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {["Alice", "Bob", "Charlie"].map((user, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <p className="text-gray-600 mb-4">"ImageGallery has completely transformed the way I store and organize my memories. Fast, secure, and beautiful!"</p>
                <h3 className="font-semibold text-gray-900">{user}</h3>
                <p className="text-gray-400 text-sm">Happy User</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Pricing Plans ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 mb-12">Choose the plan that fits you best</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Free", price: "$0", features: ["10 uploads", "Basic gallery"] },
              { name: "Pro", price: "$9.99", features: ["Unlimited uploads", "Premium gallery", "Priority support"] },
              { name: "Premium", price: "$19.99", features: ["All Pro features", "Custom themes", "Advanced analytics"] }
            ].map((plan, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-900 text-xl font-bold mb-4">{plan.price}</p>
                <ul className="text-gray-600 mb-4">
                  {plan.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Select Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ Section ================= */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Answers to common questions about ImageGallery</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "Is my gallery private?", a: "Yes! Only you can access your gallery after logging in." },
              { q: "What file types are supported?", a: "All popular image formats such as JPG, PNG, and GIF are supported." },
              { q: "Can I upgrade my plan?", a: "Yes, you can switch to Pro or Premium anytime in the Pricing section." },
              { q: "Is there a mobile app?", a: "Currently web-only, but mobile-friendly and responsive." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ================= Final CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-3xl shadow-2xl">
            <Camera className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Building Your Gallery Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join ImageGallery and keep your memories safe, organized, and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                Login Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold text-lg transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">ImageGallery</span>
              </div>
              <p className="text-gray-400">Your secure personal image gallery for storing and organizing precious memories.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                <li className="hover:text-white transition-colors cursor-pointer">All Pictures</li>
                <li className="hover:text-white transition-colors cursor-pointer">Upload</li>
                <li className="hover:text-white transition-colors cursor-pointer">Login</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Secure Storage</li>
                <li>Easy Upload</li>
                <li>Private Gallery</li>
                <li>Fast Access</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ImageGallery. All rights reserved. Built with ❤️ for photo lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
