import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const StudentsDetails = () => {
  const [data, setData] = useState({ students: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [editStudent, setEditStudent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    registeredDate: '',
    status: '',
    message: '',
    course: '',
    gender: '',
    dateOfBirth: '',
    address: {
      streetAddress: '',
      city: '',
      pincode: '',
    },
  });
  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/admin?page=${page}&limit=${limit}`);
        setData(response.data);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        toast.error('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    if (editStudent) {
      setFormData({
        ...editStudent,
        address: editStudent.address || {
          streetAddress: '',
          city: '',
          pincode: '',
        },
      });
    }
  }, [editStudent]);

  const students = data.students || [];

  const handlePrevious = () => {
    if (page > 1) setPage(prevPage => prevPage - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(prevPage => prevPage + 1);
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/${id}`);
      toast.success('Student deleted successfully.');
      setData(prevData => ({
        ...prevData,
        students: prevData.students.filter(student => student._id !== id)
      }));
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Failed to delete student.');
    }
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`http://localhost:5000/api/admin/${editStudent._id}`, formData);
      toast.success('Student updated successfully.');
      setData(prevData => ({
        ...prevData,
        students: prevData.students.map(student =>
          student._id === editStudent._id ? formData : student
        )
      }));
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating student:', error);
      toast.error('Failed to update student.');
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape, 'mm' for millimeters, 'a4' for paper size
    const tableColumn = ["Serial Number", "Name", "Email", "Registration Date", "Status", "Message", "Course", "Gender", "Date of Birth", "Address"];
    const tableRows = students.map((student, index) => [
      index + 1,
      `${student.firstName} ${student.lastName}`,
      student.email,
      new Date(student.registeredDate).toLocaleDateString(),
      student.status,
      student.message,
      student.course,
      student.gender,
      new Date(student.dateOfBirth).toLocaleDateString(),
      student.address ? `${student.address.streetAddress}, ${student.address.city}, ${student.address.pincode}` : 'N/A'
    ]);

    doc.text("Student Details", 14, 10);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      margin: { top: 30 },
      styles: {
        cellPadding: 2,
        fontSize: 8,
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: [255, 255, 255],
      },
      pageBreak: 'auto',
    });

    doc.save('students-details.pdf');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value
      }
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <Toaster />
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Student Registrations</h2>
          <p className="mt-1 text-sm text-gray-700">This is a list of all student registrations. You can edit or delete existing ones.</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Serial Number</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Name</th>
                    <th className="px-12 py-3.5 text-left text-sm font-normal text-gray-500">Email</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Registration Date</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Status</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Message</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Course</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Gender</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Date of Birth</th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">Address</th>
                    <th className="relative px-4 py-3.5"><span className="sr-only">Edit</span></th>
                    <th className="relative px-4 py-3.5"><span className="sr-only">Delete</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {students.length > 0 ? (
                    students.map((student, index) => (
                      <tr key={student._id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{index + 1}</td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm font-medium text-gray-900">{student.firstName} {student.lastName}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{student.email}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{new Date(student.registeredDate).toLocaleDateString()}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{student.status}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{student.message}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{student.course}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{student.gender}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">{new Date(student.dateOfBirth).toLocaleDateString()}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {student.address ? `${student.address.streetAddress}, ${student.address.city}, ${student.address.pincode}` : 'N/A'}
                        </td>
                        <td className="relative whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <button
                            type="button"
                            onClick={() => handleEdit(student)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </button>
                        </td>
                        <td className="relative whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <button
                            type="button"
                            onClick={() => handleDelete(student._id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="12" className="text-center py-4 text-gray-500">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600"
        >
          Next
        </button>
        <button
          onClick={generatePDF}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600"
        >
          Download PDF
        </button>
      </div>
      {/* Edit Modal */}
      {showEditModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg h-auto max-h-[80vh] overflow-y-auto">
      <h3 className="text-lg font-semibold">Edit Student</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSaveEdit(editStudent);
      }}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={editStudent.firstName || ''}
              onChange={(e) => setEditStudent({ ...editStudent, firstName: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={editStudent.lastName || ''}
              onChange={(e) => setEditStudent({ ...editStudent, lastName: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={editStudent.email || ''}
              onChange={(e) => setEditStudent({ ...editStudent, email: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <input
              type="text"
              name="status"
              value={editStudent.status || ''}
              onChange={(e) => setEditStudent({ ...editStudent, status: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={editStudent.message || ''}
              onChange={(e) => setEditStudent({ ...editStudent, message: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <input
              type="text"
              name="course"
              value={editStudent.course || ''}
              onChange={(e) => setEditStudent({ ...editStudent, course: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={editStudent.gender || ''}
              onChange={(e) => setEditStudent({ ...editStudent, gender: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={editStudent.dateOfBirth?.split('T')[0] || ''}
              onChange={(e) => setEditStudent({ ...editStudent, dateOfBirth: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="streetAddress"
              value={editStudent.address?.streetAddress || ''}
              onChange={(e) => setEditStudent({
                ...editStudent,
                address: { ...editStudent.address, streetAddress: e.target.value }
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Street Address"
            />
            <input
              type="text"
              name="city"
              value={editStudent.address?.city || ''}
              onChange={(e) => setEditStudent({
                ...editStudent,
                address: { ...editStudent.address, city: e.target.value }
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="City"
            />
            <input
              type="text"
              name="pincode"
              value={editStudent.address?.pincode || ''}
              onChange={(e) => setEditStudent({
                ...editStudent,
                address: { ...editStudent.address, pincode: e.target.value }
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Pincode"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setShowEditModal(false)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-600"
          >
            Close
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}


    </section>
  );
};

export default StudentsDetails;




















