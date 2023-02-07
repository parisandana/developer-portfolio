import React from "react";
import DisplayLottie from "./DisplayLottie";
import contactPerson from "@/assets/lottie/landingPerson";
import ConnectIcon from "./ConnectIcon";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Fade } from "react-reveal";
import { contactInfo } from "@/portfolio";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen pt-16">
      <div className="max-w-[1240px] m-auto px-2 pt-16 w-full">
        <Fade left duration={1000}>
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
        </Fade>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <Fade left duration={1000}>
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <div className="rounded-xl hover:scale-105 ease-in duration-300 w-full h-auto">
                    <DisplayLottie animationData={contactPerson} />
                  </div>
                </div>
                <div>
                  <h2 className="py-2 flex justify-start">
                    {contactInfo.title}
                  </h2>
                  <p className="py-4">{contactInfo.subtitle}</p>
                  <p>{contactInfo.number}</p>
                  <p>{contactInfo.email_address}</p>
                </div>
                <div>
                  <p className="uppercase pt-8 lg:pt-10 text-[#5651e5]">
                    Connect With Me
                  </p>
                  <ConnectIcon
                    cName={
                      "flex items-center justify-between pt-4 overflow-auto"
                    }
                  />
                </div>
              </div>
            </div>
          </Fade>
          {/* right */}
          <Fade right duration={1000}>
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://getform.io/f/56c264d4-a3d1-4ce6-b8af-4f7e5d4fb25d"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="tel"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      rows="5"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
