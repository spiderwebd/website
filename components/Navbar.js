import React from "react";
import Image from "next/image";
import jus from "../public/assets/jus.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 font-bold	">
        <Image src={jus} alt="Spider Web Designers" width="200" height="20" />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 text-white	">
          <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p>Our Services</p>
          </Link>
          <Link
            activeClass="active"
            to="1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p>Our Values </p>
          </Link>

          <Link
            activeClass="active"
            to="3"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p>FAQ</p>
          </Link>
        </div>

        <button className="btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full">
          <a href=" https://wa.me/658808362">Get A Quote</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
