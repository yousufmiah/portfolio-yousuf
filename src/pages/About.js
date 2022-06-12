import React from "react";
import selfPic from "../assets/images/Md. Yousuf Miah.jpg";

const About = () => {
  return (
    <div className="mx-auto">
      <div className="text-center my-24 ">
        <h1 className="text-xl md:text-6xl text-primary font-bold">About Me</h1>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-16 justify-between my-8 ">
        <div className="w-full md:w-1/2 mx-auto border rounded ">
          <div className="w-full h-full flex justify-center items-center mx-auto  ">
            <img className=" z-10 rounded-full mx-auto" src={selfPic} alt="" />
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto border rounded ">
          <div className="  text-justify text-xl leading-10 p-12">
            <p>
              Really a great message by the grace of Almighty{" "}
              <strong> "Allah" </strong> inform you about me. This is
              <strong> Md. Yousuf Miah </strong>
              who are getting learn on Web Design & Development course with{" "}
              <strong> JavaScript, React </strong> under esteemed valuable
              organization <strong> "Programming Hero" </strong>
              which is the best learning sector with fun and enjoy by the by
              motivational speech in the world for Bangle spoken people.
              Directed by-
              <strong> "Jhankar Mahbub" </strong>. Believe that after completing
              my course I will be able to get a good situation in future my
              life. That's way, every day in a week I have been hardworking with
              Programing Hero suitable platform. I humble request to you who
              read my text please prayer for me to improve my career, which will
              be highly appreciated very much. <br />
              <br />
              <strong>
                -- again thank you very much for your cooperations with
                sustainable life at this situation in the world, best of Luck.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto p-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#176F6B"
            fill-opacity="1"
            d="M0,32L40,37.3C80,43,160,53,240,69.3C320,85,400,107,480,128C560,149,640,171,720,170.7C800,171,880,149,960,154.7C1040,160,1120,192,1200,224C1280,256,1360,288,1400,304L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
