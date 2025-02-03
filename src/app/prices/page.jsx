"use client";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FaTimes, FaInfoCircle } from "react-icons/fa";

export default function Prices() {
  const [selectedTime1, setSelectedTime1] = useState("60 min");
  const [price1, setPrice1] = useState(3200);
  const [selectedTime2, setSelectedTime2] = useState("60 min");
  const [price2, setPrice2] = useState(3200);
  const [selectedTime3, setSelectedTime3] = useState("60 min");
  const [price3, setPrice3] = useState(3200);

  const [alert, setAlert] = useState(true);

  const closeAlert = () => {
    setAlert(false);
  };

  const handleTimeSelect1 = (time) => {
    setSelectedTime1(time);
    if (time === "45 min") {
      setPrice1(2400);
    } else if (time === "60 min") {
      setPrice1(3200);
    } else if (time === "90 min") {
      setPrice1(4800);
    }
  };
  const handleTimeSelect2 = (time) => {
    setSelectedTime2(time);
    if (time === "45 min") {
      setPrice2(2400);
    } else if (time === "60 min") {
      setPrice2(3200);
    } else if (time === "90 min") {
      setPrice2(4800);
    }
  };
  const handleTimeSelect3 = (time) => {
    setSelectedTime3(time);
    if (time === "45 min") {
      setPrice3(2400);
    } else if (time === "60 min") {
      setPrice3(3200);
    } else if (time === "90 min") {
      setPrice3(4800);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Top Navigation */}
      <div className="absolute top-4 left-4 flex items-center">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center text-black px-4 py-2 rounded-md mr-7"
        >
          <ArrowLeftIcon className="w-8 h-8 items-center" />
        </Link>

        {/* Small Margin */}
        <div className="text-lg font-bold">Available sessions</div>
      </div>

      {alert ? (
        <div className="flex justify-center">
          <p className="bg-[#c2e1f9] text-[#0065bd] border-[1px] border-[#0065bd] px-5 py-3 text-sm flex justify-center rounded-xl items-center">
            <FaInfoCircle className="mx-2" />
            <span className="font-semibold">
              Click on the duration to see the pricing details
            </span>{" "}
            <FaTimes onClick={closeAlert} className="mx-2" />
          </p>
        </div>
      ) : (
        <div></div>
      )}

      {/* Centered Divs */}
      <div className="flex flex-wrap justify-center items-center w-full mt-16 space-x-0 md:space-x-10">
        {/* Session Card 1 */}
        <div className="bg-gradient-to-tr from-[#0065bd] to-[#0190fa] p-4 w-full md:w-[22%] h-auto mx-2 rounded-xl shadow-lg my-5">
          <div className="text-center text-4xl my-2 font-semibold text-white">
            ₹{price1}
            <span className="text-[#90cefb] text-base"> / session</span>
          </div>

          <div className="flex justify-center my-4 space-x-2">
            <button
              className={`${
                selectedTime1 === "45 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect1("45 min")}
            >
              45 min
            </button>
            <button
              className={`${
                selectedTime1 === "60 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect1("60 min")}
            >
              60 min
            </button>
            <button
              className={`${
                selectedTime1 === "90 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect1("90 min")}
            >
              90 min
            </button>
          </div>

          <div className="text-center my-4">
            <h2 className="text-xl font-semibold text-white mb-1">
              Group Therapy
            </h2>
            <div className="w-[65%] mx-auto mt-2 border-t-[1px] border-white"></div>
          </div>

          <div className="mb-4 w-full flex justify-center">
            <div className="self-center mx-auto">
              <ul className="list-disc list-inside my-2 text-white text-sm text-left space-y-3">
                <li>Joint Evaluation</li>
                <li>Communication Exercises</li>
                <li>Conflict Resolution</li>
                <li>Goal Setting</li>
                <li>Follow up plan</li>
              </ul>
            </div>
          </div>

          <Link
            href={{
              pathname: "/prices/booking",
              query: { type: "Group Therapy" },
            }}
          >
            <div className="flex justify-center my-4">
              <button className="bg-white text-[#0065bd] font-semibold px-6 py-2 rounded-full w-[65%] mx-auto">
                Proceed
              </button>
            </div>
          </Link>
        </div>

        {/* Session Card 2 */}
        <div className="bg-gradient-to-tr from-[#0065bd] to-[#0190fa] p-4 w-full md:w-[22%] h-auto mx-2 rounded-xl shadow-lg my-5">
          <div className="text-center text-4xl my-2 font-semibold text-white">
            ₹{price2}
            <span className="text-[#90cefb] text-base"> / session</span>
          </div>

          <div className="flex justify-center my-4 space-x-2">
            <button
              className={`${
                selectedTime2 === "45 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect2("45 min")}
            >
              45 min
            </button>
            <button
              className={`${
                selectedTime2 === "60 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect2("60 min")}
            >
              60 min
            </button>
            <button
              className={`${
                selectedTime2 === "90 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect2("90 min")}
            >
              90 min
            </button>
          </div>

          <div className="text-center my-4">
            <h2 className="text-xl font-semibold text-white mb-1">
              Individual Therapy
            </h2>
            <div className="w-[65%] mx-auto mt-2 border-t-[1px] border-white"></div>
          </div>

          <div className="mb-4 w-full flex justify-center">
            <div className="self-center mx-auto">
              <ul className="list-disc list-inside my-2 text-white text-sm text-left space-y-3">
                <li>Joint Evaluation</li>
                <li>Communication Exercises</li>
                <li>Conflict Resolution</li>
                <li>Goal Setting</li>
                <li>Follow up plan</li>
              </ul>
            </div>
          </div>

          <Link
            href={{
              pathname: "/prices/booking",
              query: { type: "Individual Therapy" },
            }}
          >
            <div className="flex justify-center my-4">
              <button className="bg-white text-[#0065bd] font-semibold px-6 py-2 rounded-full w-[65%] mx-auto">
                Proceed
              </button>
            </div>
          </Link>
        </div>

        {/* Session Card 3 */}
        <div className="bg-gradient-to-tr from-[#0065bd] to-[#0190fa] p-4 w-full md:w-[22%] h-auto mx-2 rounded-xl shadow-lg my-5">
          <div className="text-center text-4xl my-2 font-semibold text-white">
            ₹{price3}
            <span className="text-[#90cefb] text-base"> / session</span>
          </div>

          <div className="flex justify-center my-4 space-x-2">
            <button
              className={`${
                selectedTime3 === "45 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect3("45 min")}
            >
              45 min
            </button>
            <button
              className={`${
                selectedTime3 === "60 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect3("60 min")}
            >
              60 min
            </button>
            <button
              className={`${
                selectedTime3 === "90 min"
                  ? "bg-inherit text-white border-2 border-white"
                  : "bg-inherit text-[#90cefb] border-2 border-[#90cefb]"
              } rounded-full px-4 py-1 text-sm`}
              onClick={() => handleTimeSelect3("90 min")}
            >
              90 min
            </button>
          </div>

          <div className="text-center my-4">
            <h2 className="text-xl font-semibold text-white mb-1">
              Relationship Therapy
            </h2>
            <div className="w-[65%] mx-auto mt-2 border-t-[1px] border-white"></div>
          </div>

          <div className="mb-4 w-full flex justify-center">
            <div className="self-center mx-auto">
              <ul className="list-disc list-inside my-2 text-white text-sm text-left space-y-3">
                <li>Joint Evaluation</li>
                <li>Communication Exercises</li>
                <li>Conflict Resolution</li>
                <li>Goal Setting</li>
                <li>Follow up plan</li>
              </ul>
            </div>
          </div>

          <Link
            href={{
              pathname: "/prices/booking",
              query: { type: "Relationship Therapy" },
            }}
          >
            <div className="flex justify-center my-4">
              <button className="bg-white text-[#0065bd] font-semibold px-6 py-2 rounded-full w-[65%] mx-auto">
                Proceed
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
