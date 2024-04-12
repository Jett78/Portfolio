import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-center p-4 mt-5 bg-gradient-to-r from-blue-800  ">
        <section className="max-w-[35rem]">
          <h2 className="font-bold text-2xl mb-5">Let's Connect</h2>
          <p className=" text-gray-400">
            I'm currently looking for new opportunities,my inbox is always
            open.Whether you have any queries or just want to connect just leave
            a message I'll try my best to get back to you
          </p>
          <div className='flex gap-3 text-3xl md:my-6 my-4 '>
            <FaFacebook/>
            <FaInstagram/>
            <FaGithub/>
            <FaLinkedin/>
          </div>
        </section>

        <section className="grid w-[40rem] p-2">
            <form action="#" className="">
                <label htmlFor="email">Your Email</label><br />
                <input type="email" placeholder="ram@gmail.com" className="bg-black border border-green-500 p-2 mb-5 w-full rounded-xl"/><br />
                <label htmlFor="subject">Subject</label><br />
                <input type="text" placeholder="Just saying Hi" className="bg-black border border-green-500 p-2 mb-5 w-full rounded-xl" /><br />
                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Let's talk about" className="bg-black border border-green-500 p-2 mb-5 w-full rounded-xl"></textarea><br />
                <button type="submit" className="bg-purple-600 w-full py-2 rounded-lg font-semibold">Send Message</button>
            </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
