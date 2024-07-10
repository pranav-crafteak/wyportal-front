import React from 'react'
import Image from 'next/image'

const AboutContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Wynoot</h1>
      
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simplifying Web App Creation</h2>
        <p className="text-lg">
          Wynoot is a no-code platform that helps creators and businesses build web apps quickly and easily. We believe great ideas shouldn't be held back by technical barriers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Quick Launch</h3>
          <p>Turn your concept into a live web app in just a few steps. Our intuitive interface guides you through the entire process.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Customizable Templates</h3>
          <p>Choose from a variety of templates and easily customize them to match your brand and vision.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Business-Ready Features</h3>
          <p>From e-commerce to booking systems, we provide the tools you need to run your online business effectively.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
          <p>Your web app will look great on all devices, ensuring a smooth experience for all your users.</p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Select a template or start from scratch</li>
          <li>Customize your design with our user-friendly editor</li>
          <li>Add your content and set up features</li>
          <li>Preview and test your web app</li>
          <li>Publish with a single click</li>
        </ol>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Create Your Web App?</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Start Building for Free
        </button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          Join the community of creators and businesses who have simplified their online presence with Wynoot.
        </p>
      </div>
    </div>
  )
}

export default AboutContent