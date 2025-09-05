"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthModal } from "@/components/AuthModal";

const AccountPage = () => {
  const router = useRouter();
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to create user: " + res.status);

      toast.success("Signed up successfully!");

      // Optional delay to let toast show before redirect
      setTimeout(() => {
        router.push("/results");
      }, 1000);

      setForm({ name: "", email: "", password: "" });
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-black">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">or</div>

        <button
          onClick={() => setShowGoogleModal(true)}
          className="w-full border border-gray-300 text-black py-2 rounded hover:bg-gray-100"
        >
          Continue with Google
        </button>

        {/* ✅ Added Login Redirect Option */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>

      {showGoogleModal && (
        <AuthModal onClose={() => setShowGoogleModal(false)} />
      )}

      {/* Toasts */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AccountPage;
