"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";

// Swiper for slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      

      {/* Slider Section */}
      <section className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[400px]"
        >
          <SwiperSlide>
            <img
              src="/Slider 1 - home page.jpg"
              alt="Slider 1"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Slider 2 - home page.jpg"
              alt="Slider 2"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Slider 3 - home page.jpg"
              alt="Slider 3"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Automate Your Test Case Generation with AI
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          Our system transforms user requirements into structured, executable
          test cases automatically. Say goodbye to manual effort and save time
          with AI-powered automation.
        </p>
        <Link href="/generate">
          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Start Generating Test Cases
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center">
          Why Test Case Automation?
        </h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed text-justify">
          Test case generation is one of the most time-consuming tasks in
          software testing. Traditionally, QA engineers spend hours reading
          requirements, breaking them into scenarios, and writing manual test
          cases. This process is not only slow but also prone to human errors.
        </p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed text-justify">
          Our system eliminates these challenges by using Artificial
          Intelligence (AI) and Natural Language Processing (NLP). It reads user
          requirements, breaks them into smaller sentences, identifies relevant
          UI controls, and generates test cases automatically. This ensures
          faster delivery, improved accuracy, and reduced manual effort.
        </p>
      </section>

      {/* Supported Controls */}
      <section className="bg-black-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center">
          Supported Input Controls
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Currently, our system supports automation for the following input
          types:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 max-w-5xl mx-auto">
          <div className="p-6 border rounded-2xl shadow-md bg-white text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700">Textbox</h3>
            <p className="text-gray-600 mt-2">
              Handles input fields where users type text.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-md bg-white text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700">Checkbox</h3>
            <p className="text-gray-600 mt-2">
              Supports scenarios requiring multiple selections.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-md bg-white text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700">
              Radio Button
            </h3>
            <p className="text-gray-600 mt-2">
              Handles single-choice options from a set of inputs.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-md bg-white text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-red-700">Dropdown</h3>
            <p className="text-gray-600 mt-2">
              Automates selection from a list of dropdown items.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <p className="text-center text-gray-600 mt-3">
          Our approach combines Natural Language Processing and AI to generate
          test cases seamlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Step 1 */}
          <div className="p-6 border rounded-2xl shadow-lg bg-white flex flex-col items-center">
            <img
              src="/step 1 - home page.webp"
              alt="Step 1"
              className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">
              Step 1: Input Scenario
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Users provide requirements or scenarios in plain English. The
              system accepts both single sentences and long paragraphs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 border rounded-2xl shadow-lg bg-white flex flex-col items-center">
            <img
              src="/step 2 - home page.png"
              alt="Step 2"
              className="w-28 h-28 object-cover rounded-full border-4 border-green-200 mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">
              Step 2: AI Breaks Down & Extracts Controls
            </h3>
            <p className="text-gray-600 text-center mt-2">
              The input is broken into smaller sentences and analyzed. Using
              fuzzy matching and NLP, our system identifies UI elements like
              textbox, checkbox, radiobutton, and dropdown.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 border rounded-2xl shadow-lg bg-white flex flex-col items-center">
            <img
              src="/step 3 - home page.png"
              alt="Step 3"
              className="w-28 h-28 object-cover rounded-full border-4 border-purple-200 mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700">
              Step 3: Generate Test Cases
            </h3>
            <p className="text-gray-600 text-center mt-2">
              The system automatically generates structured test cases, saves
              them into Excel and MongoDB, and makes them ready for execution.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold">Ready to Automate Testing?</h2>
        <p className="text-gray-700 mt-4">
          Experience the future of testing with AI-powered test case generation.
        </p>
        <Link href="/generate">
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Try It Now
          </button>
        </Link>
      </section>
    </div>
  );
}
