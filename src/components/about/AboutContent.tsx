import React from 'react'
import Image from 'next/image'

const AboutContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">The WyPortal Story</h1>
      
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg">
          WyPortal was born from a simple idea: everyone should have the power to create web applications, regardless of their technical background. We're on a mission to democratize web development and empower the next generation of digital innovators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">From Frustration to Innovation</h3>
          <p>Our founders experienced firsthand the challenges of bringing ideas to life in the digital world. Tired of complex coding and expensive development cycles, they set out to create a solution that would make web app creation accessible to everyone.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Our Core Values</h3>
          <ul className="list-disc pl-5">
            <li>Empowerment through technology</li>
            <li>Simplicity in design and function</li>
            <li>Continuous innovation</li>
            <li>Customer-centric approach</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Team Behind WyPortal</h2>
        <p className="mb-4">
          Our diverse team of developers, designers, and entrepreneurs brings together decades of experience in web development, UX design, and business strategy. We're united by our passion for making technology accessible and our commitment to our users' success.
        </p>
        {/* Add team member photos or more details here */}
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment to You</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Continuous platform improvements based on user feedback</li>
          <li>Transparent pricing with no hidden fees</li>
          <li>Dedicated customer support to ensure your success</li>
          <li>Regular updates and new features to keep you ahead of the curve</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join the WyPortal Community</h2>
        <p className="mb-4">
          When you choose WyPortal, you're not just getting a product – you're joining a community of creators, innovators, and entrepreneurs. Share ideas, get inspired, and grow together with fellow WyPortal users.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Join Our Community Forum
        </button>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-4">
          Experience the power of no-code development and bring your ideas to life with WyPortal.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Start Your Free Trial
        </button>
      </div>
    </div>
  )
}

export default AboutContent