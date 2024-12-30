import React from "react";
import { IoChatboxEllipsesSharp } from "react-icons/io5";

const FocusOn = () => {
    return (
        <>
            <section className="bg-[#222222]">
                <div className="container py-12 md:py-24">
                    {/* Title section */}
                    <p className="text-3xl md:text-5xl font-bold text-center uppercase">
                        WHAT WE FOCUS ON
                    </p>
                    {/* Card section */}
                    <div className=" 'mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8  ">
                        <div className=" space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
                            <div className="flex flex-wrap xl:flex-nowrap gap-6 justify-between ">
                                <p className="text-4xl pr-5 font-bold">REAL WORLD SKILLS</p>
                                <div className=" bg-white text-black h-24 w-24 flex-shrink-0 flex justify-center items-center rounded-3xl">
                                    <IoChatboxEllipsesSharp className="text-5xl"/>
                                </div>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque unde?</p>
                        </div>
                        <div className=" space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
                            <div className="flex flex-wrap xl:flex-nowrap gap-6 justify-between ">
                                <p className="text-4xl pr-5 font-bold">REAL WORLD SKILLS</p>
                                <div className=" bg-white text-black h-24 w-24 flex-shrink-0 flex justify-center items-center rounded-3xl">
                                    <IoChatboxEllipsesSharp className="text-5xl"/>
                                </div>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque unde?</p>
                        </div>
                        <div className=" space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
                            <div className="flex flex-wrap xl:flex-nowrap gap-6 justify-between ">
                                <p className="text-4xl pr-5 font-bold">REAL WORLD SKILLS</p>
                                <div className=" bg-white text-black h-24 w-24 flex-shrink-0 flex justify-center items-center rounded-3xl">
                                    <IoChatboxEllipsesSharp className="text-5xl"/>
                                </div>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque unde?</p>
                        </div>
                        
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                        <div className=" space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
                            <div className="flex flex-wrap xl:flex-nowrap gap-6 justify-between ">
                                <p className="text-4xl pr-5 font-bold">REAL WORLD SKILLS</p>
                                <div className=" bg-white text-black h-24 w-24 flex-shrink-0 flex justify-center items-center rounded-3xl">
                                    <IoChatboxEllipsesSharp className="text-5xl"/>
                                </div>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque unde?</p>
                        </div>
                        <div className=" space-y-4 bg-[#111111] px-8 py-14 rounded-3xl">
                            <div className="flex flex-wrap xl:flex-nowrap gap-6 justify-between ">
                                <p className="text-4xl pr-5 font-bold">REAL WORLD SKILLS</p>
                                <div className=" bg-white text-black h-24 w-24 flex-shrink-0 flex justify-center items-center rounded-3xl">
                                    <IoChatboxEllipsesSharp className="text-5xl"/>
                                </div>
                            </div>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque unde?</p>
                        </div>
                        </div>
                    
                </div>
            </section>
        </>
    );
};

export default FocusOn;
