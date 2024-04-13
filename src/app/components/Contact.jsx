import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-center p-4 mt-10 bg-gray-900 ">
        <section className="max-w-[35rem]">
          <h2 className="font-bold text-2xl mb-5">Let's Connect</h2>
          <p className=" text-gray-400">
            I'm currently looking for new opportunities,my inbox is always
            open.Whether you have any queries or just want to connect just leave
            a message I'll try my best to get back to you
          </p>
          <div className='flex gap-3 text-3xl md:my-6 my-4 '>
          <Link href ={"https://www.facebook.com/profile.php?id=100005027238835"} ><FaFacebook className=' text-blue-500 hover:text-4xl ease-in duration-300'/></Link>
            <Link href={"https://www.instagram.com/_jettt__/"}><FaInstagram className='text-red-400 hover:text-4xl ease-in duration-300'/></Link>
            <Link href={"https://github.com/Jett78"}><FaGithub className='hover:text-4xl ease-in duration-300'/></Link>
            <Link href={"https://www.linkedin.com/in/jeet-deula-32642624a/"}> <FaLinkedin className='text-blue-500 bg-white rounded-full p-0.5 hover:text-4xl ease-in-out duration-300'/></Link>
          </div>
        </section>

        <section className="grid w-[40rem] p-2">
            <form action="#" className="">
                <label htmlFor="email">Your Email</label><br />
                <input type="email" placeholder="ram@gmail.com" className="bg-black border border-gray-500 p-3 mb-5 w-full rounded-xl"/><br />
                <label htmlFor="subject">Subject</label><br />
                <input type="text" placeholder="Just saying Hi" className="bg-black border border-gray-500 p-3 mb-5 w-full rounded-xl" /><br />
                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="" cols="30" rows="10" placeholder="Let's talk about" className="bg-black border border-gray-500 p-4 mb-5 w-full rounded-xl"></textarea><br />
                <button type="submit" className="bg-purple-600 w-full py-2 rounded-lg font-semibold">Send Message</button>
            </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
