import React from "react";
import BgImage from "../../assets/hero-bg.png";
import HeroImg from "../../assets/hero.png";
import learners from "../../assets/learners.png";
import Navbar from "../navbar/Navbar";

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backroundPosition: "center",
    backroundSize: "cover",
    backroundRepeat: "no-repeat",
};

const Hero = () => {
    return (
        <>
            <section style={bgStyle} className="py-3">
              <Navbar/>
                <div className="container min-h-[600px] grid grid-cols-1 md:grid-cols-2">
                    {/* Text content section */}
                    <div className="flex flex-col justify-center gap-5 h-full">
                        <h1 className=" uppercase text-3xl md:text-4xl font-extrabold">
                            LEARN WHAT SCHOOL DOESN'T TEACH YOU
                        </h1>
                        <p className="text-xs">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error maxime repellat maiores. Exercitationem,
                            corrupti dolores.
                        </p>
                        <div>
                            <button className="bg-white text-red-500 px-16 py-2 rounded-full uppercase font-bold">
                                Explore Courses
                            </button>
                        </div>
                        {/* review section */}
                        <div className="flex items-center gap-4">
                            <img src={learners} alt="" className="max-w-[120px]" />
                            <div className="opacity-50">
                              <p>10000+</p>
                              <p className="text-xs">Happy Learners</p>
                            </div>
                            <div>
                              <p className="text-sm">4.8+ (600+ Ratings)</p>
                              <div>⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    </div>
                    {/* Hero Image  section */}
                    <div className="flex justify-center items-end">
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
