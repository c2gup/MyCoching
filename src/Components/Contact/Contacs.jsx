import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import Group_Girl from '../../assets/Contact/Group 20.png';

const locations = [
  {
    title: 'Bengaluru office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN',
  },
  {
    title: 'Head office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN',
  },
  {
    title: 'Karnataka office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: '42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN',
  },
];

function Contacts() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/contact-us', formData);
      toast.success(response.data.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      toast.error('Error sending message. Please try again.');
      
    }
  };

  return (
    <>
       {/* Ensure the Toaster is placed here for toast notifications */}
      <div>
        <div
          style={{
            backgroundImage: `url(${Group_Girl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '350px',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex flex-col items-center justify-center px-4 sm:px-8"
        >
          <div className="text-3xl sm:text-4xl -mt-16 font-nunito font-bold text-black text-center">
            Contact us
          </div>
          <div className="mt-2 w-full sm:w-[70%] flex flex-col items-center sm:flex-row sm:justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-nunito font-semibold">
                Edudu offers you a 30% discount this season
              </div>
              <div className="mt-2 text-base sm:text-lg font-nunito text-gray-600">
                Edudu offers you a 30% discount this season
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="rounded-md bg-[#FAB900] px-4 py-2 text-lg font-semibold text-black shadow-sm hover:bg-[#ca9606] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Get started!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-12 md:py-24">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="flex items-center justify-center w-full">
                <div className="px-2 md:px-12 w-full">
                  <p className="text-2xl sm:text-4xl font-nunito font-bold text-gray-900 text-center sm:text-left">
                    Get In Touch Today
                  </p>
                  <p className="mt-4 text-lg font-nunito text-gray-600 text-center sm:text-left">
                    Our friendly team would love to hear from you.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div className="grid w-full gap-y-4 sm:gap-x-4 sm:grid-cols-2">
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
                      <label className="text-sm font-medium leading-none text-gray-700" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Leave us a message"
                        rows="4"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <img
                alt="Contact us"
                className="hidden lg:block max-h-full w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="rounded-lg bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-10 sm:py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4 text-center sm:text-left">
                <p className="text-2xl sm:text-4xl font-nunito font-bold text-gray-900">Get in touch</p>
                <p className="text-lg text-gray-700">
                  Fill in the form and our team will get back to you within 24 hours.
                </p>
                <div className="text-lg font-nunito font-semibold text-gray-800 mt-6">Locations</div>
                {locations.map((location, index) => (
                  <div key={index} className="mt-2 text-base sm:text-lg font-nunito text-gray-600">
                    <strong>{location.title}</strong>
                    <br />
                    {location.timings}
                    <br />
                    {location.address}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{location.title}</h3>
                    <p className="text-sm text-gray-700">{location.timings}</p>
                    <p className="mt-2 text-sm text-gray-700">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;

