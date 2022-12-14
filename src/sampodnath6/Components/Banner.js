import { faCoffee, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import img from "../img1/img1.png";
import img1 from "../img1/img2.png";
import RatingStart from "./RatingStart";

import { RiShareForwardFill } from "react-icons/ri";
import { createRoot } from 'react-dom/client';

// import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState, } from "react";

import Emoji from "./Emoji/Emoji";

import { toast, Toaster } from "react-hot-toast";
import {CopyToClipboard} from 'react-copy-to-clipboard';



const Banner = ({ openRatingModal }) => {

  const [value, setValue] = useState(2);
  const [text, setText] = useState('')


  return (
    <div className="  ">
      <div className="">
        <img src={img} alt="" className="w-full h-72 md:h-full lg:h-full " />
      </div>
      <div className="relative bottom-12 max-w-[1440px] mx-auto">

        <div className="w-[90%] md:w-[90%] mx-auto p-8  border-2 rounded-2xl bg-white ">
          <div className=" lg:flex lg:justify-between ">
            <div className="flex gap-6 lg:gap-5 w-full">
              <img src={img1} className="w-16 h-16 lg:w-36 lg:h-36" alt="" />
              <div className=" md:flex justify-between w-full  ">
                <div className="relative">

                  <h1 className="text-3xl font-bold flex gap-5 text-[#423D74]">McDonalds </h1>

                  <div className="">
                    <p className=" my-2 text-gray-700 text-xs sm:text-base md:text-xl">
                      Prabhat Center, 505 Fifth floor, Sector 1A, CBD Belapur, Navi
                      Mumbai, Maharashtra 400614
                    </p>
                    <CopyToClipboard text={'https://leads4needs.com/businessview/63452ed7d4d81e3a9492bb3e'}

                    >

                      <buttom onClick={() => setText('Copy success..')} className=" flex gap-2 no-underline text-[#484ECE] cursor-pointer">
                        <span>
                          <svg width="22" height="22" className="mt-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.98868 12.0067C9.42057 12.5847 9.97158 13.0629 10.6043 13.4089C11.2371 13.755 11.9368 13.9608 12.656 14.0123C13.3752 14.0639 14.0971 13.96 14.7727 13.7078C15.4482 13.4555 16.0617 13.0608 16.5715 12.5503L19.5885 9.53024C20.5045 8.58092 21.0113 7.30946 20.9998 5.98971C20.9884 4.66995 20.4596 3.4075 19.5273 2.47426C18.5949 1.54102 17.3338 1.01166 16.0153 1.00019C14.6969 0.988722 13.4267 1.49606 12.4784 2.41295L10.7486 4.13438" stroke="#484ECE" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M13.0113 9.99331C12.5795 9.41534 12.0284 8.93711 11.3957 8.59106C10.7629 8.245 10.0632 8.03921 9.344 7.98765C8.6248 7.93609 7.90293 8.03997 7.22736 8.29223C6.55179 8.54449 5.93832 8.93924 5.42855 9.4497L2.41153 12.4698C1.49557 13.4191 0.988733 14.6905 1.00019 16.0103C1.01165 17.33 1.54048 18.5925 2.47278 19.5257C3.40508 20.459 4.66626 20.9883 5.98469 20.9998C7.30311 21.0113 8.57329 20.5039 9.52165 19.5871L11.2414 17.8656" stroke="#484ECE" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                          </svg>
                        </span> <h5 className="text-xs sm:text-base md:text-lg mt-2" title="https://leads4needs.com/businessview/63452ed7d4d81e3a9492bb3e">leads4needs.com</h5> 
                        <span className="bg-indigo-500 text-white px-2 py-2 text-base md:text-lg rounded-lg text-center ">Copy</span>  <span className="text-red-600 font-bold mt-2">{text}</span>
                      </buttom>

                    </CopyToClipboard>

                  </div>

                </div>
                <div className=" flex gap-2 mt-2 md:mt-0">
                  <button className="rounded-md px-2 lg:px-3 border-2  text-black  flex md:w-28 h-14 justify-center items-center">Share <RiShareForwardFill className="text-lg mt-1 mx-1"></RiShareForwardFill> </button>
                  <button className="rounded-md px-2 lg:px-3 bg-indigo-500 text-white md:w-28 h-14">Call Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-around  my-8 bg-slate-100 lg:p-5 p-3 md:w-[65%]  gap-5 rounded-lg ">
            <div className="">
              <h2 className="text-2xl font-bold">52</h2>
              <p className="my-2">Total Businesses</p>
            </div>
            <div className=" border-[1px] border-gray-300 h-14"></div>
            <div className="">
              <h2 className=" text-2xl font-bold">52</h2>
              <p className="my-2">Total Businesses</p>
            </div>
          </div>
          <div className="my-2">
            <h1 className=" text-2xl font-bold">About Us</h1>
            <p className="text-xl text-[#878787] font-medium">
              Welcome to our happy meals store and bring your families and friends
              along and enjoy exciting offers !!!
            </p>



          </div>
        </div>
      </div>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default Banner;
