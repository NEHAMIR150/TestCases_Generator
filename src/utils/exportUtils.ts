import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

export const exportToCSV = (data: string) => {
  const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, "test_cases.csv");
};

export const exportToPDF = (data: string) => {
  const doc = new jsPDF();
  doc.text(data, 10, 10);
  doc.save("test_cases.pdf");
};

export const exportToExcel = (data: string) => {
  const ws = XLSX.utils.aoa_to_sheet([[data]]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Test Cases");
  XLSX.writeFile(wb, "test_cases.xlsx");
};
