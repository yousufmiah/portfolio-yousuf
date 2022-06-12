import React from "react";
import yousufImg from "../../assets/images/yousuf_miah.jpg";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <div className="hero lg:h-[-60vh] bg-base-200 pt-20 md:py-60">
        <div className="hero-content flex-col lg:flex-row">
          <div
            className="max-w-5xl p-20 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-2xl font-bold"> Md. Yousuf Miah</p>
            <h1 className="sm:text-3xl md:text-5xl font-bold text-primary">
              Professional Web Developer || MERN
            </h1>
            <p className="py-4 max-w-xl text-2xl">
              I like to effort my best service as your requirements which will
              be acceptable for the success point.
            </p>

            <div className="flex mb-5 ">
              <a
                target="blank"
                href="https://github.com/yousufmiah"
                className="text-5xl text-primary rounded cursor-pointer mx-3"
              >
                <BsGithub />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/yousufmiah/"
                className="text-5xl text-primary rounded cursor-pointer mx-3"
              >
                <BsLinkedin />
              </a>

              <a
                target="blank"
                href="https://twitter.com/yousufmiahbd"
                className="text-5xl text-primary cursor-pointer mx-3"
              >
                <FaTwitterSquare />
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1AfYUIwAyfkllf9jTuntc46xQneGXMFm8/view?usp=sharing"
              target="_blank"
            >
              <button className="btn btn-primary px-8">Download Resume</button>
            </a>
          </div>
          <div
            className="h-[60vh] shrink-0 "
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img
              src={yousufImg}
              class="w-64 h-68 bg-primary rounded-full"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
