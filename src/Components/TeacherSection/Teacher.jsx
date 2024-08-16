import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Teacher() {
  return (
    <div className="mt-10 mx-auto max-w-7xl flex flex-col gap-8 px-4 md:px-8">

      {/* Teacher Profile Section */}
      <div className="flex flex-col md:flex-row items-start gap-6 border border-gray-200 rounded-lg shadow-md p-4 bg-white">
        
        {/* Profile Image and Contact Info */}
        <div className="w-full md:w-1/4 flex-shrink-0 flex flex-col items-center md:items-start">
          <img
            src="https://media.istockphoto.com/id/1570005292/photo/smiling-teacher-standing-at-the-blackboard.jpg?s=1024x1024&w=is&k=20&c=VbgbB0q0z3N-oh4o42_aRgPRnsuqzYyYXGPgjbLK2Ig="
            alt="Professor John Doe"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
          />
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-800">Contact Information:</h2>
            <p className="mt-2 text-sm text-gray-600">
              Email: <a href="mailto:john.doe@university.edu" className="text-blue-500 hover:underline">john.doe@university.edu</a>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Mobile: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Office: Room 404, Building A, University Campus
            </p>
            
            {/* Social Media Icons */}
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <a href="https://facebook.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-yellow-500 transition-colors duration-300">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-yellow-500 transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-yellow-500 transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Teacher Details */}
        <div className="w-full md:w-3/4">
          <div className="p-4">
            <h1 className="inline-flex items-center text-xl font-semibold text-gray-800">
              About Professor John Doe <ArrowUpRight className="ml-2 h-5 w-5 text-blue-500" />
            </h1>
            <p className="mt-3 text-base text-gray-700">
              Professor John Doe is a seasoned educator with over 20 years of experience in Computer Science. His extensive knowledge and passion for teaching make him a valuable asset to the educational community.
            </p>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Education:</h2>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>Ph.D. in Computer Science, University of Tech</li>
                <li>M.Sc. in Software Engineering, Tech Institute</li>
                <li>B.Sc. in Computer Science, State University</li>
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Subjects Taught:</h2>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>Data Structures and Algorithms</li>
                <li>Web Development</li>
                <li>Machine Learning</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Teacher Profile Section */}
      <div className="flex flex-col md:flex-row items-start gap-6 border border-gray-200 rounded-lg shadow-md p-4 bg-white">
        
        {/* Profile Image and Contact Info */}
        <div className="w-full md:w-1/4 flex-shrink-0 flex flex-col items-center md:items-start">
          <img
            src="https://www.shutterstock.com/image-photo/smiling-handsome-man-blue-polo-600nw-1275773908.jpg"
            alt="Professor Jane Smith"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
          />
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-800">Contact Information:</h2>
            <p className="mt-2 text-sm text-gray-600">
              Email: <a href="mailto:jane.smith@university.edu" className="text-blue-500 hover:underline">jane.smith@university.edu</a>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Mobile: <a href="tel:+0987654321" className="text-blue-500 hover:underline">+0 (987) 654-321</a>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Office: Room 505, Building B, University Campus
            </p>
           
            {/* Social Media Icons */}
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              <a href="https://facebook.com/janesmith" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-yellow-500 transition-colors duration-300">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/janesmith" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-yellow-500 transition-colors duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/janesmith" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-yellow-500 transition-colors duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Teacher Details */}
        <div className="w-full md:w-3/4">
          <div className="p-4">
            <h1 className="inline-flex items-center text-xl font-semibold text-gray-800">
              About Professor Jane Smith <ArrowUpRight className="ml-2 h-5 w-5 text-blue-500" />
            </h1>
            <p className="mt-3 text-base text-gray-700">
              Professor Jane Smith is an accomplished academic with a focus on Artificial Intelligence and Data Science. With over 15 years in the field, she brings a wealth of experience and innovation to her role.
            </p>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Education:</h2>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>Ph.D. in Artificial Intelligence, Elite University</li>
                <li>M.Sc. in Data Science, Innovation Institute</li>
                <li>B.Sc. in Mathematics, Central College</li>
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Subjects Taught:</h2>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
                <li>Advanced Mathematics</li>
                <li>Statistical Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Teacher;





