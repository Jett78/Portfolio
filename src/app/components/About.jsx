import React from "react";

const About = () => {
  return (
    <main>
      <div className="flex flex-wrap items-center justify-center px-4 gap-6 mt-5">
        <section>
          <img
            src="./avatar.png"
            alt="avatar"
            className="h-[25rem] rounded-md xl:block hidden"
          />
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-center">About me</h2>
          <p className="max-w-[40rem] text-gray-400 lg:pt-6 pt-4 md:text-xl text-l">
            Hello there! I'm Jeet Deula,a passionate frontend developer from
            kathmandu,Nepal. With a keen eye for creating visually stunning and
            user-friendly websites. My journey in the world of web development
            began since 2022, and since then, I've been on a mission to bring
            ideas to life through clean and efficient code.As a dedicated
            frontend enthusiast, I specialize in turning design concepts into
            seamless and responsive web experiences. I thrive on the challenges
            of translating creative visions into reality, ensuring that every
            pixel aligns with both aesthetic and functional perfection.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
