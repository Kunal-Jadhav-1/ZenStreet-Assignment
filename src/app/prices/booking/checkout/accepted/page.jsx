"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Accepted() {
  return (
    <>
      <div className="text-4xl text-center items-center my-12">
        Booking Confirmed !
      </div>
      <div className="text-lg text-center items-center my-12 px-96">
        Congratulations! Your therapy session has been successfully scheduled.
        We&apos;re looking forward to helping you on your journey to better mental
        health.
      </div>
      <div className="text-lg text-center items-center my-3">
        <i>i.</i> Instructions
      </div>
      <div className="text-lg text-center items-center font-semibold space-y-3">
        <p>
          A confirmation email with all the session details has been sent to
          amal123@gmail.com
        </p>
        <p>
          If this is your first session, consider jotting down any key points or
          questions you want to discuss.
        </p>
      </div>
      <div className="flex justify-center my-10">
        <Link
          href="/"
          className="text-white bg-blue-500 rounded-full px-5 py-3"
        >
          <button>Back Home</button>
        </Link>
      </div>
    </>
  );
}
