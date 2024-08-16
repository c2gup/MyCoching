import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ReactToPrint from "react-to-print";

// Define the PDF component
class PrintComponent extends React.Component {
  render() {
    const { freeTrials } = this.props;

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Free Trials</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {freeTrials.map((trial, index) => (
              <tr key={trial._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.firstName} {trial.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.email || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.phoneNumber || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(trial.dateOfBirth).toLocaleDateString() || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.course || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.message || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const FreeTrailDetail = () => {
  const [freeTrials, setFreeTrials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchFreeTrials = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/free-trials?page=${currentPage}&limit=5`);
        setFreeTrials(response.data.freeTrials);
        setTotalPages(response.data.totalPages); // Ensure your API returns the total page count
      } catch (error) {
        console.error("Error fetching free trials:", error);
      }
    };
    fetchFreeTrials();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePrintPDF = () => {
      const doc = new jsPDF('landscape'); // Set orientation to landscape
    
      // Add the table header
      doc.autoTable({
        head: [['Serial No', 'Name', 'Email', 'Phone Number', 'Date of Birth', 'Course', 'Message']],
        body: freeTrials.map((trial, index) => [
          (index + 1).toString(), // Serial number
          `${trial.firstName} ${trial.lastName}`,
          trial.email || '-',
          trial.phoneNumber || '-',
          new Date(trial.dateOfBirth).toLocaleDateString() || '-',
          trial.course || '-',
          trial.message || '-',
        ]),
        theme: 'striped', // Optional: Add styling
      });
    
      doc.save('free-trials.pdf');
    };
    
    

  return (
    <div className="p-6">
      <div className="mb-4">
        <button onClick={handlePrintPDF} className="bg-blue-500 text-white px-4 py-2 rounded">Print PDF</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {freeTrials.map((trial, index) => (
              <tr key={trial._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(currentPage - 1) * 5 + index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.email || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.phoneNumber || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(trial.dateOfBirth).toLocaleDateString() || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.course || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trial.message || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
          Previous
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default FreeTrailDetail;






