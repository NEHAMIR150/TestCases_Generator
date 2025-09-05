import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <main className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h1>
        <p className="mt-2 text-gray-600 text-center">
          Have questions or need support? Fill out the form below, and we’ll get back to you soon.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-bold text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="+92 300 1234567"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-bold text-gray-700">Country</label>
            <select
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="">Select your country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold text-gray-700">Message</label>
            <textarea
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Your Message"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
