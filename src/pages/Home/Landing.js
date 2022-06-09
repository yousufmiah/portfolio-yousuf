import React from "react";
import yousufImg from "../../assets/images/yousuf_miah.jpg";

const Landing = () => {
  return (
    <>
      <div class="hero lg:h-[-60vh] bg-accent mt-5">
        <div class="hero-content flex-col lg:flex-row">
          <div
            className="max-w-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-2xl font-bold"> Md. Yousuf Miah</p>
            <h1 class="text-5xl font-bold">
              Professional Web Developer || MERN
            </h1>
            <p class="py-6 max-w-xl">
              I like to effort my best service as your requirements which will
              be acceptable for the success point.
            </p>
            <button class="btn btn-primary">Download Resume</button>
          </div>
          <div className="h-[60vh] shrink-0 ">
            <img className="" src={yousufImg} class="h-full" alt="pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
