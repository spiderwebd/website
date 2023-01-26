import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHY CHOOSE US
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Free Consultation</p>
          <p className="text-gray-500 text-center">
            We will help you plan out the design you want on your shirt,cup,car
            and other.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Quality control</p>
          <p className="text-gray-500 text-center">
            We will make sure the quality of  <br /> our print  satisfy
             you .
          </p>
        </div>{" "}
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Progress analysis</p>
          <p className="text-gray-500 text-center">
            We collect data from our previous clients <br /> and use that 
            data  <br /> to improve our services to you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
