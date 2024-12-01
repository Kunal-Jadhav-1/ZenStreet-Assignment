"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";

function Check_Out() {
  const [checkbox, setCheckbox] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    compId: "",
  });
  const [nextPage, setNextPage] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const date = searchParams.get("date");
  console.log(date);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.compId === "100") {
      setNextPage("accepted");
    } else {
      setNextPage("rejected");
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      (!checkbox || formData.compId)
    );
  };

  const navigateToNextPage = () => {
    router.push(`/prices/booking/checkout/${nextPage}`);
  };

  return (
    <>
      <div className="max-w-max mx-auto bg-white rounded-xl shadow-md pb-6 mt-24">
        <div className="absolute top-4 left-4 flex items-center">
          {/* Back Button */}
          <Link
            href="/prices/booking"
            className="flex items-center text-black px-4 py-2 rounded-md mr-7"
          >
            <ArrowLeftIcon className="w-8 h-8 items-center" />
          </Link>
        </div>
        <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t-xl px-8">
          <div>
            <div className="text-sm">Sat, 06 Aug</div>
            <div className="text-xs">3:30 PM - 4:20 PM</div>
          </div>
          <div className="text-lg font-bold">₹ 2,400/-</div>
        </div>
        <form className="space-y-4 mt-4 px-10" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 border rounded-lg px-3 py-2"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 border rounded-lg px-3 py-2"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border rounded-lg px-3 py-2 my-4"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="flex items-center my-4">
            <div className="flex items-center border rounded-lg px-3 py-2 w-full">
              <span className="pr-2">IN</span>
              <input
                type="tel"
                placeholder="+91 9000 000000"
                className="flex-1 focus:outline-none"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <i>i.</i> You will receive booking details on WhatsApp
          </div>
          <div className="space-y-2 mt-6">
            <div className="font-medium">
              Have you been referred by your employer?
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="employerReferral"
                checked={checkbox}
                onChange={handleCheckbox}
              />
              <label
                htmlFor="employerReferral"
                className="text-sm w-[40%] text-white bg-blue-500 px-4 py-2 rounded-lg"
              >
                Yes, I am employed under a partnering company
              </label>

              <input
                type="text"
                placeholder="Anything other than 100 is rejected rn"
                className="text-sm w-[40%] text-black border-2 border-blue-500 px-4 py-2 rounded-lg"
                name="compId"
                value={formData.compId}
                onChange={handleInputChange}
                disabled={!checkbox}
              />

              <button
                type="button"
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
              >
                Verify
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 mt-8"
            disabled={!isFormValid()}
            onClick={navigateToNextPage}
          >
            Book session
          </button>
        </form>
      </div>
    </>
  );
}

export default function CheckOutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Check_Out />
    </Suspense>
  );
}
