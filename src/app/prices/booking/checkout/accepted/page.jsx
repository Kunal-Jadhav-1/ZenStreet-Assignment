"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Accepted() {
  return (
    <div className="my-10 sm:my-16 md:my-28">
      <div className="text-4xl text-center font-bold items-center my-6 sm:my-8 md:my-12">
        Booking Confirmed !
      </div>
      <div className="text-lg text-center items-center my-6 sm:my-8 md:my-12 px-6 sm:px-12 md:px-96 text-gray-500">
        Congratulations! Your therapy session has been successfully scheduled.
        We&apos;re looking forward to helping you on your journey to better
        mental health.
      </div>
      <div className="text-lg flex justify-center items-center my-6 mt-12 sm:mt-16 md:mt-20">
        <div className="text-start w-[45%] sm:w-[60%] md:w-[45%]">
          <p>
            <i>i.</i> Instructions
          </p>
        </div>
      </div>

      <div className="text-lg flex justify-center items-center my-4 sm:my-6 md:my-8">
        <div className="text-start w-[40%] sm:w-[50%] md:w-[40%]">
          <ul className="list-disc">
            <li>
              <p>
                A confirmation email with all the session details has been sent
                to <span className="text-sky-500">abc123@gmail.com</span>
              </p>
            </li>
            <li>
              <p>
                If this is your first session, consider jotting down any key
                points or questions you want to discuss.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center my-10 sm:my-12 md:my-16">
        <Link
          href="/"
          className="text-white bg-sky-500 rounded-full px-16 sm:px-24 md:px-72 py-3"
        >
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
}
