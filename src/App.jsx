import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/HeroSection/Hero';
import Ctc from './Components/Ctc/Ctc';
import Feathers from './Components/Fethers/Feathers'; // Corrected import name
import Feathers2 from './Components/Feathers2/Feathers2';
import Choice from './Components/Choice/Choice';
import Footer from './Components/Footer/Footer';
import Contacs from './Components/Contact/Contacs';
import Teacher from './Components/TeacherSection/Teacher';
import Regester from './Components/Regester/Regester';
import FreeTrail from './Components/Regester/FreeTrail'; // Corrected import path
import StudentsDetails from './Components/Admin/StudentsDetails';
import FreeTrailDetail from './Components/Admin/FreeTrailDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Ctc />
              <Feathers />
              <Choice />
              <Feathers2 />
            </>
          }
        />
        <Route path="/contact" element={<Contacs />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/freeTrail" element={<FreeTrail />} /> Ensure correct component and path
        <Route path="/students-details" element={<StudentsDetails />} /> {/* Ensure consistent path naming */}
        <Route path="/free-trail-detail" element={<FreeTrailDetail />} /> {/* Ensure consistent path naming */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




