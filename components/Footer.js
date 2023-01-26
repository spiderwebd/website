import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-center lg:text-start">
            10 Robert Sobukwe Road ,Bellville,Cape Town,7530
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Company</p>
          <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p className="text-base">Our Services</p>
          </Link>
          <Link
            activeClass="active"
            to="1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p className="text-base">Our Values</p>
          </Link>
          <Link
            activeClass="active"
            to="3"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p className="text-base">Support</p>
          </Link>
          <a href=" https://wa.me/658808362">
            <p className="text-base">Contact</p>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/profile.php?id=100068761522863">
            <BsFacebook className="text-3xl text-gray-500" />
          </a>
          <a href="https://www.instagram.com/spider_web_designs_official/">
            <BsInstagram className="text-3xl text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
