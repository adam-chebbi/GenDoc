import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center"
        aria-label="Hero section"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Create Documents with GenDoc</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          AI-powered document generation for reports, resumes, presentations, and more.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/sign-up"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Get started with GenDoc"
          >
            Get Started
          </Link>
          <Link
            to="#why-gendoc"
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Learn more about GenDoc"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Why GenDoc Section */}
      <section id="why-gendoc" className="py-16 px-4 md:px-8" aria-label="Why GenDoc section">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose GenDoc?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
            <p>Generate professional documents with advanced AI models from OpenRouter.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">User-Friendly</h3>
            <p>Intuitive editor and preview tools for seamless document creation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Versatile Exports</h3>
            <p>Export as PDF, Markdown, or plain text with one click.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-200" aria-label="Use cases section">
        <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Reports</h3>
            <p>Create detailed business or academic reports effortlessly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Resumes</h3>
            <p>Design professional resumes with AI-driven templates.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Presentations</h3>
            <p>Generate slide content and infographics with ease.</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 md:px-8" aria-label="Blog section">
        <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Getting Started with GenDoc</h3>
            <p>Learn how to create your first document in minutes.</p>
            <a href="#blog" className="text-blue-500 mt-4 inline-block">Read More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Document Tips</h3>
            <p>Maximize productivity with our AI-powered features.</p>
            <a href="#blog" className="text-blue-500 mt-4 inline-block">Read More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Export Options</h3>
            <p>Explore PDF, Markdown, and text export capabilities.</p>
            <a href="#blog" className="text-blue-500 mt-4 inline-block">Read More</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-gray-200" aria-label="Contact section">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Contact form submitted! (Akismet integration pending)');
          }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={5}
              required
              aria-required="true"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Submit contact form"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center" aria-label="Footer">
        <p>&copy; 2025 GenDoc. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/terms" className="text-blue-300 mx-2">Terms</Link>
          <Link to="/privacy" className="text-blue-300 mx-2">Privacy</Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;