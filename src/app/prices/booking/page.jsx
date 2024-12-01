"use client";
import { Suspense, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { HomeIcon, PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSearchParams } from "next/navigation";

function BookingPage() {
  const [mode, setMode] = useState("inPerson");
  const [date, setDate] = useState(new Date());

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleMode = (click) => {
    setMode(click);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center my-20">
        {/* Top Navigation */}
        <div className="absolute top-4 left-4 flex items-center">
          {/* Back Button */}
          <Link
            href="/prices"
            className="flex items-center text-black px-4 py-2 rounded-md mr-7"
          >
            <ArrowLeftIcon className="w-8 h-8 items-center" />
          </Link>
        </div>

        <div className="text-center">
          <p className="text-2xl mb-4">{type}</p>
          <p className="text-sm font-semibold mb-12">Please select therapy mode</p>

          <div className="flex space-x-16 justify-center text-sm">
            <div className="flex flex-col items-center space-y-2">
              {mode === "inPerson" ? (
                <div className=" bg-[#1f9fe6] text-[#c6e3ff] rounded-md p-6">
                  <HomeIcon className="h-7 w-7" />
                </div>
              ) : (
                <div
                  onClick={() => handleMode("inPerson")}
                  className=" text-[#1f9fe6] rounded-md p-4"
                >
                  <HomeIcon className="h-7 w-7" />
                </div>
              )}
              <p>In-Person</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              {mode === "VC" ? (
                <div className=" bg-[#1f9fe6] text-[#c6e3ff] rounded-md p-6">
                  <VideoCameraIcon className="h-7 w-7" />
                </div>
              ) : (
                <div
                  onClick={() => handleMode("VC")}
                  className=" text-[#1f9fe6] rounded-md p-4"
                >
                  <VideoCameraIcon className="h-7 w-7" />
                </div>
              )}
              <p>Video Call</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              {mode === "Call" ? (
                <div
                  onClick={() => handleMode("Call")}
                  className=" bg-[#1f9fe6] text-[#c6e3ff] rounded-md p-6"
                >
                  <PhoneIcon className="h-7 w-7" />
                </div>
              ) : (
                <div
                  onClick={() => handleMode("Call")}
                  className=" text-[#1f9fe6] rounded-md p-4"
                >
                  <PhoneIcon className="h-7 w-7" />
                </div>
              )}
              <p>Voice call</p>
            </div>
          </div>

          <div className="text-start mt-4">
            <p className="font-light text-xs">
              📍 3rd Floor, A2, 35, Block A2, Delhi
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <p className="self-start font-semibold text-xl px-24 my-4">Filter by</p>
        <div className="flex justify-center space-x-2 mb-10">
          <div className="bg-black text-white px-16 py-2 rounded-full font-semibold">
            Slots
          </div>
          <div className="text-black px-16 py-2 rounded-full font-semibold">
            Date
          </div>
        </div>
      </div>

      <div className=" px-24">
        <p className="self-start font-semibold text-xl">Select Slot</p>
        <div className="flex flex-row justify-evenly space-x-32 my-8">
          <div className="flex flex-col">
            <p className="text-gray-500 text-base">Morning</p>
            <div className="grid grid-cols-2">
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                8.00 - 8.45 AM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                9.00 - 9.45 AM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                10.00 - 10.45 AM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                11.00 - 11.45 AM
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500 text-base">Afternoon</p>
            <div className="grid grid-cols-2">
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-6 py-1">
                12.00 - 12.45 PM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-6 py-1">
                2.00 - 2.45 PM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-6 py-1">
                3.00 - 3.45 PM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-6 py-1">
                4.00 - 4.45 PM
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500 text-base">Evening</p>
            <div className="grid grid-cols-2">
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                8.00 - 8.45 AM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                9.00 - 9.45 AM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                10.00 - 10.45 AM
              </div>
              <div className=" border-[2px] text-sm font-semibold text-center border-black rounded-full my-2 mx-3 px-3 py-1">
                11.00 - 11.45 AM
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <div>
            <Calendar onChange={handleDateChange} value={date}></Calendar>
          </div>
        </div>
        <Link href={{pathname:"/prices/booking/checkout",query:{type:type,date:date}}}>
          <div className="flex justify-center my-24 mb-56">
            <button className="py-2 px-3 w-[40%] rounded-xl text-white bg-neutral-300">
              Proceed
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default function Booking() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingPage />
    </Suspense>
  );
}
