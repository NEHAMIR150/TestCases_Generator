import React from "react";


export default function Contact() {
  return (
    <div>
      
      <main className="p-8">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-4">Feel free to reach out for any inquiries.</p>

        <form className="mt-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
