import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaPinterestSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { ImBehance2 } from "react-icons/im";
import { FaMedium } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <div className="footer py-16 p-10 bg-base-200 text-base-content justify-around">
        <div>
          <span className=" text-2xl text-primary font-bold">Services</span>
          <a className="text-lg text-black-700 ">Web site Developing</a>
          <a className="text-lg text-black-700 ">Web site Design</a>
        </div>
        <div>
          <span className=" text-2xl text-primary font-bold">Information</span>
          <Link to="/about" className="text-lg text-blue-700 link-hover">
            About
          </Link>
          <Link to="/contact" className="text-lg text-blue-700 link-hover">
            Contact
          </Link>
        </div>
        <div className="align-center">
          <span className=" text-2xl text-primary font-bold">Social</span>
          <div className="flex ">
            <a
              target="blank"
              href="https://www.facebook.com/yousufmiahm/"
              className="text-3xl text-blue-700 cursor-pointer mx-3"
            >
              <ImFacebook2 />
            </a>
            <a
              target="blank"
              href="https://twitter.com/yousufmiahbd"
              className="text-3xl text-blue-700 cursor-pointer mx-3"
            >
              <FaTwitterSquare />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/yousufmiah/"
              className="text-3xl text-blue-700 cursor-pointer mx-3"
            >
              <BsLinkedin />
            </a>
            <a
              target="blank"
              href="https://www.pinterest.com/yousufmiahm/"
              className="text-3xl text-blue-700 cursor-pointer mx-3"
            >
              <FaPinterestSquare />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/yousufmiahm/"
              className="text-3xl text-blue-700 cursor-pointer mx-3"
            >
              <ImInstagram />
            </a>
            <a
              target="blank"
              href="https://www.behance.net/yousufmiahm"
              className="text-3xl text-blue-700 cursor-pointer mx-3"
            >
              <ImBehance2 />
            </a>
            <a
              target="blank"
              href="https://medium.com/@yousufbdm"
              className="text-3xl text-blue-700 cursor-pointer mx-3"
            >
              <FaMedium />
            </a>
          </div>
          <div className="grid grid-flow-col gap-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
