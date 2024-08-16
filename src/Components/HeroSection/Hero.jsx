import React from 'react';
import girl from '../../assets/adorable-cheerful-asian-kid-little-girl-wearing-glasses-reading-interesting-book-being-involved-education-isolated-white 1.png';
import Group from '../../assets/Group 15.png';

function Hero() {
  return (
    <section>
      <div
        className="  lg:flex lg:flex-row lg:items-center"
        style={{
          backgroundImage: `url(${Group})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="w-full bg-cover bg-center lg:w-1/2"
          style={{
            // backgroundImage: `url(${girl})`,
          }}
        >
          <div className="my-10 px-4 lg:my-0 lg:px-10">
            <h2 className="text-sm font-nunito font-semibold leading-tight text-black sm:text-2xl md:text-3xl lg:text-4xl">
              Knowledge Connection
            </h2>
            <h2 className="text-xl font-nunito lg:font-bold leading-tight text-black sm:text-2xl md:text-3xl lg:text-4xl">
              Open the Door to the Future
            </h2>
            <p className="mt-4 max-w-xl font-nunito text-base leading-relaxed text-gray-600">
              Giving every student the opportunity to access the best education and open the door to the world of knowledge.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-gray-600">
              Start your learning journey today with Edudu to become an outstanding student in our learning community.
            </p>

            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <button
                    type="button"
                    className="rounded-md bg-[#FAB900] px-3 py-2 text-lg font-semibold text-black shadow-sm hover:bg-[#ca9606] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Get started!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={girl}
            alt="Girl Reading Book"
            className="h-full w-3/4 rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
