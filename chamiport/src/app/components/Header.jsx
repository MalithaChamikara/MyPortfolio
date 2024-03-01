"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
          Hello,I'm{" "}
        </h1>{" "}
        <br></br>
        <TypeAnimation
          sequence={[
            "chamikara",
            1000,
            "Web Developer",
            1000,
            "Software Developer",
            1000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
        />
        <p className="text-[#ADB7BE] text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptatibus cupiditate possimus repellendus.
        </p>
        <div>
          <button className="bg-graddient-to-br from-blue-500 via -purple-500 to-pink-500 px-1 py-1 text-white rounded-full">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
            Download Cv
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/hero_image.png"
            alt="profile_image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
