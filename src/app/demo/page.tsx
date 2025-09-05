'use client';

import React from 'react';

export default function DemoPage() {
  const videoSrc = "/demo.mp4"; // File is in /public folder

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-white px-4 py-12">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Sample MP4 Video</h1>
          <p className="text-indigo-100 mt-1 text-sm">Loaded from <code>/public/sample.mp4</code></p>
        </div>

        <div className="w-full h-[50vh] bg-black">
          <video
            controls
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="px-6 py-4 bg-gray-50 text-center text-gray-600 text-sm">
          Sleek video player with Tailwind styling. Responsive & clean.
        </div>
      </div>
    </main>
  );
}
