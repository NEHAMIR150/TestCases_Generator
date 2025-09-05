"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { exportToCSV, exportToPDF, exportToExcel } from "@/utils/exportUtils";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [testCases, setTestCases] = useState("");

  useEffect(() => {
    const inputText = searchParams.get("text") || "";
    setTestCases(`Generated Test Cases for: ${inputText}`);
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
     
      <div className="mt-10 w-full max-w-md p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Generated Test Cases</h2>
        <textarea
          className="w-full p-2 border rounded h-32 text-black"
          readOnly
          value={testCases}
        />
        <div className="mt-4 flex gap-2">
          <button className="bg-green-500 text-white p-2 rounded flex-1  hover:bg-sky-500 cursor-pointer" onClick={() => exportToCSV(testCases)}>
            Export CSV
          </button>
          <button className="bg-red-500 text-white p-2 rounded flex-1  hover:bg-sky-800 cursor-pointer " onClick={() => exportToPDF(testCases)}>
            Export PDF
          </button>
          <button className="bg-blue-500 text-white p-2 rounded flex-1 hover:bg-sky-200 cursor-pointer" onClick={() => exportToExcel(testCases)}>
            Export Excel
          </button>
        </div>
      </div>
    </div>
  );
}
