"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Accepted() {
  return (
    <div className="my-32">
      <div className="flex justify-center">
        <div className="items-center">
          <div className="text-8xl text-center items-center my-4 text-[#c9e2f4] font-bold">
            404
          </div>
          <div className="text-4xl text-center items-center my-4 text-[#2497eb] font-semibold">
            Oops! Page Not Found
          </div>
          <div className="flex justify-center">
            <div className="text-lg text-center items-center my-4 w-[65%]">
              It seems we can&apos;t find the page you&apos;re looking for,
              Let&apos;s get you back on track!
            </div>
          </div>
          <div className="flex justify-center my-4">
            <Link
              href="/"
              className="text-white bg-[#1f86d0] rounded-full px-10 py-3"
            >
              <button>Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
