import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900 px-6 py-12">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-6">
          About <span className="text-blue-600">Supertech Company</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          At Supertech, we are committed to revolutionizing software testing by
          automating test case generation. Our mission is to improve efficiency,
          accuracy, and coverage through modern tools, machine learning, and
          cutting-edge frameworks.
        </p>

        {/* Section 1 - Company + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
            <p className="mb-4">
              Supertech is a student-led innovation, developed as part of our
              Final Year Project (FYP). In collaboration with{" "}
              <span className="font-bold">Disrupt (formerly Gaditek)</span>, we
              are building a Test Case Generation System powered by advanced
              technologies and AI-driven automation.
            </p>
            <p>
              Our system analyzes user requirements, breaks them down, and
              automatically generates structured test cases reducing manual
              effort and improving accuracy.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/about us slider.jpg"
              alt="Supertech Team"
              width={450}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Section 2 - Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Next.js</h3>
              <p>
                A modern React framework we use to build a fast, scalable, and
                SEO-friendly front end for our web application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">React.js</h3>
              <p>
                Powers our dynamic user interface, ensuring responsiveness and a
                smooth user experience across devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">MongoDB</h3>
              <p>
                A NoSQL database used to store structured test cases and logs,
                integrated seamlessly with MongoDB Compass.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                Windows Service
              </h3>
              <p>
                Our project leverages Windows Services for background processing
                and real-time monitoring of automated tasks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">Python</h3>
              <p>
                Used for NLP and machine learning model training, enabling
                automation of test case generation from user scenarios.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                Libraries
              </h3>
              <p>
                Fetching real time dataset to maximize system's accuracy  
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 - Model Training + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="/about us.jpg"
              alt="Model Training"
              width={450}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Model Training</h2>
            <p className="mb-4">
              Our NLP-powered models analyze natural language scenarios and
              generate test cases automatically. Trained on diverse datasets,
              they improve test coverage and reduce human error.
            </p>
            <p>
              This hybrid approach, combining "AI, rule-based systems, and
              backend automation", makes Supertech a step forward in smarter
              quality assurance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
