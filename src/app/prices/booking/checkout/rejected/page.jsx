"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Accepted() {
  return (
    <>
      <div className="flex justify-center">
        <div className="items-center">
          <div className="text-8xl text-center items-center my-10">404</div>
          <div className="text-4xl text-center items-center my-10">
            Oops! Page Not Found
          </div>
          <div className="text-xl text-center items-center my-10">
            It seems we can&apos;t find the page you&apos;re looking for, Let&apos;s get you
            back on track!
          </div>
          {/* Centering the button container */}
          <div className="flex justify-center my-10">
            <Link href="/" className="text-white bg-blue-500 rounded-full px-5 py-3">
              <button>
                Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
