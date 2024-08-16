import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function FreeTrial() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    pincode: '',
    dateOfBirth: '',
    course: '',
    gender: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({
        ...prevData,
        gender: value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/free-trials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      toast.success('Registration successful!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        pincode: '',
        dateOfBirth: '',
        course: '',
        gender: '',
        message: ''
      });
    } catch (error) {
      toast.error(`Failed to register. Error: ${error.message}`);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className='flex mt-5 justify-center flex-col items-center'>
        <p className="lg:text-5xl font-nunito font-bold text-gray-900 md:text-4xl">Student Free Trial Registration</p>
        <p className="mt-4 text-xl font-nunito text-gray-600">
          Sign up for a free trial to explore our courses and services.
        </p>
      </div>

      <div className="mx-auto max-w-full px-4 md:py-10">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-screen-md px-4 md:px-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                <div className="grid w-full items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-700" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-700" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="address">
                  Address
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street Address"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid w-full items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="city">
                      City
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      type="text"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="pincode">
                      Pincode
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      type="text"
                      id="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                    />
                  </div>
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="date"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="course">
                  Course
                </label>
                <select
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  id="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Select Course</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="gender">
                  Gender
                </label>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4"
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male" // Updated to match server expectations
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4"
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female" // Updated to match server expectations
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave us a message"
                  cols={3}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Register
              </button>
            </form>
            <div className="flex justify-center mt-8">
              <button
                type="button"
                className="w-full max-w-sm rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
              >
                Schedule Your Free Trial Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeTrial;


