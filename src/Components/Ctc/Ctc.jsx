import React from "react";

import Math from "../../assets/Ctc/math.png";
import g24573 from "../../assets/Ctc/g24573.png";
import Group1 from "../../assets/Ctc/Group (1).png";
import Group from "../../assets/Ctc/Group.png";

function Ctc() {
  return (
    <>
      <section className="py-10 bg-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full text-center md:max-w-2xl">
            <h2 className="text-3xl font-bold font-nunito leading-tight text-[#0A033C] sm:text-4xl lg:text-4xl">
              Lessons revolve around 4 areas
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Diverse lessons around 4 subjects: Math, literature, English,
              drawing help children improve their comprehensive knowledge
            </p>
          </div>

          {/* Subject images */}
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 justify-center">
            <div className="flex w-full shadow rounded-lg bg-[#FFFFFF] p-4 items-center">
              <div className="flex p-2 h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <img src={Math} alt="Math Icon" />
              </div>
              <h3 className="ml-4 text-lg font-nunito font-semibold text-black">
                Maths
              </h3>
            </div>
            <div className="flex w-full shadow rounded-lg bg-[#FFFFFF] p-4 items-center">
              <div className="flex p-2 h-10 w-10 items-center justify-center rounded-full bg-[#FFECEC]">
                <img src={g24573} alt="English Icon" />
              </div>
              <h3 className="ml-4 text-lg font-nunito font-semibold text-black">
                English
              </h3>
            </div>
            <div className="flex w-full shadow rounded-lg bg-[#FFFFFF] p-4 items-center">
              <div className="flex p-2 h-10 w-10 items-center justify-center rounded-full bg-[#EDFFFD]">
                <img src={Group1} alt="Literature Icon" />
              </div>
              <h3 className="ml-4 text-lg font-nunito font-semibold text-black">
                Literature
              </h3>
            </div>
            <div className="flex w-full shadow rounded-lg bg-[#FFFFFF] p-4 items-center">
              <div className="flex p-2 h-10 w-10 items-center justify-center rounded-full bg-[#FFF8E8]">
                <img src={Group} alt="Drawing Icon" />
              </div>
              <h3 className="ml-4 text-lg font-nunito font-semibold text-black">
                Drawing
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ctc;

