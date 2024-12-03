"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Accepted() {
  return (
    <div className="my-28">
      <div className="text-4xl text-center font-bold items-center my-12">
        Booking Confirmed !
      </div>
      <div className="text-lg text-center items-center my-12 px-96 text-gray-500">
        Congratulations! Your therapy session has been successfully scheduled.
        We&apos;re looking forward to helping you on your journey to better
        mental health.
      </div>
      <div className="text-lg flex justify-center items-center my-6 mt-20">
        <div className="text-start w-[45%]">
          <p>
            <i>i.</i> Instructions
          </p>
        </div>
      </div>

      <div className="text-lg flex justify-center items-center my-3">
        <div className="text-start w-[40%]">
          <ul className="list-disc">
            <li>
              <p>
                A confirmation email with all the session details has been sent
                to <span className="text-sky-500">amal123@gmail.com</span>
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

      <div className="flex justify-center my-10">
        <Link
          href="/"
          className="text-white bg-sky-500 rounded-full px-72 py-3 rounded-lg"
        >
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
}
