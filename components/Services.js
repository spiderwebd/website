import React from "react";
import shop from "../public/assets/shop.jpg";
import client from "../public/assets/client.jpg";
import photoshoot from "../public/assets/photoshoot.jpg";
import Image from "next/image";

const Teacher = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl pt-10">
        <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium  text-black text-center	pb-8		">
          Our Services
        </p>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={photoshoot}
              alt="Photo Shoot"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Photo Shoot
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Looking for professional and high-quality photographs? Look no
              further than our premium photoshoot service! Our team of
              experienced photographers will work with you to create stunning
              images that capture the essence of your brand or event. Whether
              you need photos for your website, social media, or marketing
              materials, {`we've`} got you covered. With our premium photoshoot
              service, {`you'll`} get beautiful, high-resolution images that
              will help you stand out from the crowd. Contact us today to
              schedule your photoshoot and start showcasing your brand in the
              best light possible.
            </p>

            <div className="mt-4">
              <a href=" https://wa.me/658808362">
              <a className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                Contact Us Today
                </a>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={shop}
              alt="Become A Partner"
              loading="lazy"
              layout="responsive"
              height="300"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Shop Branding
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              We understand the importance of a strong brand identity.{" "}
              {`That's`} why we offer shop branding services to help businesses
              like yours stand out and make a lasting impression on customers.
              Our team of experts will work with you to create a unique and
              consistent visual identity for your shop, including logo design,
              color schemes, and branding guidelines. {`We'll`} also provide you
              with a variety of materials, such as signs, banners, and
              packaging, to help you promote your brand in-store and online.
              With our shop branding services, {`you'll`} be able to create a
              cohesive and memorable brand that will help you attract and retain
              customers. Contact us today to learn more about how we can help
              you brand your shop.
            </p>

            <div className="mt-4">
              <a className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                {" "}
               <a href=" https://wa.me/658808362">
                Contact Us Today{" "}
                </a>
              </a>
            </div>
          </div>
          <div className="p-6">
            <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={client}
              alt="Get The App"
              loading="lazy"
              layout="responsive"
            />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Our Professional Vehicle Wrapping Services
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Are you looking for a unique and eye-catching way to promote your
              business on the road? Look no further than our vehicle wrapping
              services! We offer full and partial wraps for cars, trucks, vans,
              and even boats. Our team of experts will work with you to create a
              custom design that showcases your brand and message in a bold and
              professional way. Vehicle wraps are a cost-effective and
              long-lasting way to advertise your business, as they can last up
              to 5 years and be seen by thousands of people on a daily basis.
              Plus, they are removable and {`won't`} damage your{` vehicle's`} paint
              job. Contact us today to learn more about how we can help you wrap
              your vehicle and take your brand to the streets!
            </p>

            <div className="mt-4">
              <a className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                 <a href=" https://wa.me/658808362">
                Contact Us Today
                </a>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Teacher;
