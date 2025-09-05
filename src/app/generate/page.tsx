"use client";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuthModal } from "@/components/AuthModal";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const [text, setText] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (!localStorage.getItem("auth")) {
      setShowAuth(true);
      return;
    }

    try {
      setLoading(true);

      // Get logged-in user (you may store this in localStorage/session)
      const userId = localStorage.getItem("userId") || "64f4f42e3ba4df6a905e1a67";

      // Call API
      const res = await fetch("/api/scenario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          scenario_text: text,
          status: 1,
          reminded: true,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save scenario");
      }

      const data = await res.json();

      // redirect to results page with new scenario id
      router.push(`/results?id=${data._id}`);
    } catch (error) {
      console.error("Error submitting scenario:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="mt-10 w-full max-w-md p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Test Case Generator
        </h2>

        <textarea
          placeholder="Enter a scenario"
          className="w-full p-2 border rounded text-black resize-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
        />

        <button
          onClick={handleGenerate}
          disabled={loading || !text}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Start Generating Test Cases"}
        </button>
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}
