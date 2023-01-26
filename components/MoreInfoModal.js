import React from "react";
import { Disclosure } from "@headlessui/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
const MoreInfoModal = () => {
  const info = [
    {
      title: "Whats your turnaround time?",
      des: "It depends with te workload,sometimes it can be same day delivery or 24-48 hours",
    },
    {
      title: "What other services do you offer?",
      des: "Graphic Design,Web Development,Social Media Management,Vehicle Wrapping ,Shop Branding,Photo Shoot,Flyers and business card,T-shirt printing and personalised  school uniform and sportswear",
    },
    {
      title: "Do you bring your own shirt?",
      des: "You can bring your own or can opt for us to supply",
    },
    {
      title: "Do I bring my own cup?",
      des: "No ,we have specified mugs for printing.",
    },
    {
      title: "How much is printing on shirts?",
      des: "It depends with the artwork.Once artwork is provided we can be able to provide a quote",
    },
    {
      title: "How is payment done?",
      des: "We accept Cash,Cards and EFT.",
    },
    {
      title: "Do I need to pay a deposit or on collection?",
      des: "All work is paid 60 % before work commences",
    },
    {
      title: "How can I reach you?",
      des: "All communication will be done via whatsapp on the following number,+27 65 880 8362.",
    },
  ];
  return (
    <div className="container mx-auto py-20">
      <p className="text-gray-500 text-2xl font-medium uppercase my-3">
        MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
        Common questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {info.map((inf, i) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="group">
                  <Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
                    <div className="flex justify-between items-center w-full">
                      <span className="group-hover:text-white  group-focus:text-white">
                        {inf.title}
                      </span>
                      <BsFillPlusCircleFill
                        className={`${
                          open ? "rotate-180 transform" : ""
                        }  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
                      />
                    </div>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
                      {inf.des}
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default MoreInfoModal;
