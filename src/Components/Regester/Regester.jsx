import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// Define schema for validation
const schema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  streetAddress: yup.string().required('Street Address is required'),
  city: yup.string().required('City is required'),
  pincode: yup.string().required('Pincode is required'),
  dateOfBirth: yup.date().required('Date of Birth is required'),
  course: yup.string().required('Course is required'),
  gender: yup.string().required('Gender is required'),
  message: yup.string().notRequired()
}).required();

function RegistrationForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = async (data) => {
    try {
      // Log the address and form data
      console.log('Address Details:', {
        streetAddress: data.streetAddress,
        city: data.city,
        pincode: data.pincode
      });
      console.log('Form Data:', data);

      // Send the data to the server
      const response = await axios.post('http://localhost:5000/api/student-registrations', data);

      // Show success message
      toast.success('Registration successful!');
      
      // Clear form fields after successful submission
      reset();
    } catch (error) {
      // Show error message
      toast.error('Error registering student. Please try again.');
      console.error('Error registering student:', error);
    }
  };

  return (
    <>
      <div className='flex mt-5 justify-center flex-col items-center'>
        <p className="lg:text-5xl font-nunito font-bold text-gray-900 md:text-4xl">Student Registration</p>
        <p className="mt-4 text-xl font-nunito text-gray-600">
          Please fill out the form below to register.
        </p>
      </div>
      <div className="mx-auto max-w-full px-4 md:py-10">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-screen-md px-4 md:px-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Form fields */}
              <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                <div className="grid w-full items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-700" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                    type="text"
                    {...register('firstName')}
                    placeholder="First Name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-700" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                    type="text"
                    {...register('lastName')}
                    placeholder="Last Name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                  type="email"
                  {...register('email')}
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                  type="tel"
                  {...register('phoneNumber')}
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="streetAddress">
                  Address
                </label>
                <input
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                  type="text"
                  {...register('streetAddress')}
                  placeholder="Street Address"
                />
                {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress.message}</p>}
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid w-full items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="city">
                      City
                    </label>
                    <input
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                      type="text"
                      {...register('city')}
                      placeholder="City"
                    />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="pincode">
                      Pincode
                    </label>
                    <input
                      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.pincode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                      type="text"
                      {...register('pincode')}
                      placeholder="Pincode"
                    />
                    {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
                  </div>
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                  type="date"
                  {...register('dateOfBirth')}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="course">
                  Course
                </label>
                <select
                  className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.course ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                  {...register('course')}
                >
                  <option value="">Select Course</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  {/* Add more options as needed */}
                </select>
                {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="gender">
                  Gender
                </label>
                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      value="Male"
                      {...register('gender')}
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Female"
                      {...register('gender')}
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Other"
                      {...register('gender')}
                      className="mr-2"
                    />
                    Other
                  </label>
                </div>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  className={`flex h-20 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-400 ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1`}
                  {...register('message')}
                  placeholder="Message"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;






