import React from 'react';
import teacher from '../../assets/Choice/Frame 93.png';

function Choice() {
  return (
    <>
      <div className='flex justify-center mb-8'>
        <h3 className='font-nunito font-bold text-2xl md:text-4xl text-center'>Why should you choose Edudu?</h3>
      </div>

      <div className="relative flex flex-col md:flex-row gap-6 justify-center items-end min-h-screen bg-[#F9F9F9] p-4">
        <div className='w-full bg-[#FAB900] h-[200px] md:h-[250px] absolute z-0'></div>

        {/* Card 1 */}
        <div className='w-full md:w-[30%] lg:w-[25%] p-4 rounded-xl shadow-lg bg-white relative z-10 mb-16'>
          <div className='flex justify-center'>
            <img src={teacher} alt="Teacher" className='w-[60%] md:w-[80%] rounded-full border-4 border-white shadow-md' />
          </div>
          <div className='bg-white flex flex-col items-center mt-4 p-4 rounded-lg shadow-inner'>
            <p className='font-nunito font-semibold text-black text-lg mb-2 text-center'>Experienced teacher</p>
            <p className='font-nunito text-gray-600 text-center'>
              Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-full md:w-[30%] lg:w-[25%] p-4 rounded-xl shadow-lg bg-white relative z-10 mb-16'>
          <div className='flex justify-center'>
            <img src={teacher} alt="Teacher" className='w-[60%] md:w-[80%] rounded-full border-4 border-white shadow-md' />
          </div>
          <div className='bg-white flex flex-col items-center mt-4 p-4 rounded-lg shadow-inner'>
            <p className='font-nunito font-semibold text-black text-lg mb-2 text-center'>Experienced teacher</p>
            <p className='font-nunito text-gray-600 text-center'>
              Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-full md:w-[30%] lg:w-[25%] p-4 rounded-xl shadow-lg bg-white relative z-10 mb-16'>
          <div className='flex justify-center'>
            <img src={teacher} alt="Teacher" className='w-[60%] md:w-[80%] rounded-full border-4 border-white shadow-md' />
          </div>
          <div className='bg-white flex flex-col items-center mt-4 p-4 rounded-lg shadow-inner'>
            <p className='font-nunito font-semibold text-black text-lg mb-2 text-center'>Experienced teacher</p>
            <p className='font-nunito text-gray-600 text-center'>
              Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choice;



