"use client";
import { GoogleLogin } from "@react-oauth/google";

interface AuthModalProps {
  onClose: () => void;
}

export const AuthModal = ({ onClose }: AuthModalProps) => {
  const handleGoogleSuccess = (response: any) => {
    localStorage.setItem("auth", "true");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96 text-center text-black">
        <h2 className="text-xl font-bold mb-4">Sign in to continue</h2>
        <GoogleLogin onSuccess={handleGoogleSuccess} />
        <button className="mt-4 text-red-500" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
