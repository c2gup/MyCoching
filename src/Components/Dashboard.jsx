// Dashboard.js
import React, { useState } from 'react';
import FreeTrailDetail from './Admin/FreeTrailDetail';
import StudentsDetails from './Admin/StudentsDetails'; // Assume this component is similar to FreeTrailDetail
import ContactUsDetail from './Admin/ContactUsDetail'
function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('studentsDetails');

  const switchComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4 px-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </header>
      <div className="p-6">
        <button
          onClick={() => switchComponent('studentsDetails')}
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-300"
        >
          Show Students Details
        </button>
        <button
          onClick={() => switchComponent('freeTrailDetail')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ml-4"
        >
          Show Free Trial Details
        </button>
        <button
          onClick={() => switchComponent('ContactUsDetail')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ml-4"
        >
          Show Contact-UsDetail
        </button>

        <div className="mt-6">
          {activeComponent === 'studentsDetails' && <StudentsDetails />}
          {activeComponent === 'freeTrailDetail' && <FreeTrailDetail />}
          {activeComponent === 'ContactUsDetail' && <ContactUsDetail />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


