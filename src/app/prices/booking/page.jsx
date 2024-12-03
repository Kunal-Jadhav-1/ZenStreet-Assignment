"use client";

import { Suspense, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import {
  HomeIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSearchParams } from "next/navigation";

function BookingPage() {
  const [mode, setMode] = useState("inPerson");
  const [date, setDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [activeTimeZone, setActiveTimeZone] = useState("");

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const morningSlots = [
    "8.00 - 8.45 AM",
    "9.00 - 9.45 AM",
    "10.00 - 10.45 AM",
    "11.00 - 11.45 AM",
  ];
  const afternoonSlots = [
    "12.00 - 12.45 PM",
    "2.00 - 2.45 PM",
    "3.00 - 3.45 PM",
    "4.00 - 4.45 PM",
  ];
  const eveningSlots = [
    "5.00 - 5.45 PM",
    "6.00 - 6.45 PM",
    "7.00 - 7.45 PM",
    "8.00 - 8.45 PM",
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleMode = (click) => {
    setMode(click);
  };

  const handleSlotClick = (slot, timeZone) => {
    // If the user tries to select a slot from a different time zone
    if (activeTimeZone && activeTimeZone !== timeZone) {
      alert("You can only select slots from the same time zone.");
      return;
    }

    // If the slot is already selected, remove it and update active time zone.
    if (selectedSlots.includes(slot)) {
      setSelectedSlots((prevSelected) =>
        prevSelected.filter((s) => s !== slot)
      );
      if (selectedSlots.length === 1) {
        setActiveTimeZone(""); // Clear active time zone if all slots are deselected
      }
      return;
    }

    // Ensure slots are consecutive
    const allSlots =
      timeZone === "morning"
        ? morningSlots
        : timeZone === "afternoon"
        ? afternoonSlots
        : eveningSlots;

    const slotIndex = allSlots.indexOf(slot);
    const selectedIndices = selectedSlots
      .map((s) => allSlots.indexOf(s))
      .sort();

    // Check for non-consecutive selection
    if (
      selectedIndices.length > 0 &&
      slotIndex !== selectedIndices[0] - 1 &&
      slotIndex !== selectedIndices[selectedIndices.length - 1] + 1
    ) {
      alert("Please select only consecutive slots.");
      return;
    }

    // Add slot to the selection
    setSelectedSlots((prevSelected) => [...prevSelected, slot]);
    setActiveTimeZone(timeZone); // Set active time zone
  };

  const isComplete = selectedSlots.length > 0 && date;

  console.log(selectedSlots);

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
          <p className="text-sm font-semibold mb-12">
            Please select therapy mode
          </p>

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
        </div>
      </div>

      <div className="px-24">
        <p className="self-start font-semibold text-xl">Select Slot</p>
        <div className="flex justify-center space-x-16 my-8">
          <div className="flex flex-col">
            <p className="text-gray-500 text-base">Morning</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              {morningSlots.map((slot) => (
                <button
                  key={slot}
                  className={`border-2 text-sm font-semibold text-center rounded-full px-3 py-1 ${
                    selectedSlots.includes(`${slot}`)
                      ? "border-green-500"
                      : "border-black"
                  }`}
                  onClick={() => handleSlotClick(slot, "morning")}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500 text-base">Afternoon</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              {afternoonSlots.map((slot) => (
                <button
                  key={slot}
                  className={`border-2 text-sm font-semibold text-center rounded-full px-3 py-1 ${
                    selectedSlots.includes(`${slot}`)
                      ? "border-green-500"
                      : "border-black"
                  }`}
                  onClick={() => handleSlotClick(slot, "afternoon")}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500 text-base">Evening</p>
            <div className="grid grid-cols-2 gap-4 my-4">
              {eveningSlots.map((slot) => (
                <button
                  key={slot}
                  className={`border-2 text-sm font-semibold text-center rounded-full px-3 py-1 ${
                    selectedSlots.includes(`${slot}`)
                      ? "border-green-500"
                      : "border-black"
                  }`}
                  onClick={() => handleSlotClick(slot, "evening")}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <div>
            <Calendar onChange={handleDateChange} value={date}></Calendar>
          </div>
        </div>

        {isComplete ? (
          <Link
            href={{
              pathname: "/prices/booking/checkout",
              query: {
                type: type,
                date: date.toString(),
                mode: mode,
                selectedSlots: selectedSlots,
              },
            }}
          >
            <div className="flex justify-center my-24 mb-56">
              <button className="py-2 px-3 w-[40%] rounded-xl text-white bg-blue-500">
                Proceed
              </button>
            </div>
          </Link>
        ) : (
          <div className="flex justify-center my-24 mb-56">
            <button className="py-2 px-3 w-[40%] rounded-xl text-white bg-neutral-300">
              Proceed
            </button>
          </div>
        )}
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
