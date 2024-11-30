"use client"
import Image from "next/image";
import Therapist from "./images/Therapist.jpg";
import { ShareIcon } from '@heroicons/react/20/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { useState } from "react";
import { AcademicCapIcon, ShieldCheckIcon, DocumentTextIcon, UsersIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaEnvelope, FaTimes } from 'react-icons/fa';



export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [showMore, setShowMore] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    document.body.style.overflow = 'auto';
  };

  const testimonials = [
    "   The guidance I received helped me manage my stress and live a more balanced life.",
    "   Therapy helped me build self-esteem and confidence that I never thought possible.",
    "   The guidance I received helped me manage my stress and live a more balanced life.",
    "   Therapy helped me build self-esteem and confidence that I never thought possible.",
    "   The guidance I received helped me manage my stress and live a more balanced life.",
    "   Therapy helped me build self-esteem and confidence that I never thought possible.",
    "   The guidance I received helped me manage my stress and live a more balanced life.",
    "   Therapy helped me build self-esteem and confidence that I never thought possible.",
  ];

  const [pageLink] = useState(window.location.href);

  const handleToggleTestimonial = () => setShowMore(!showMore);

  const toggleContent = () => setIsExpanded(!isExpanded);


  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageLink)
      .then(() => {
        setIsLinkCopied(true);
        // alert("Link copied to clipboard!");
        setTimeout(() => setIsLinkCopied(false), 1500);
      })
      .catch(err => console.error('Failed to copy link:', err));
  };

  const goBack = () => {
    alert("You can't go back")
  }

  const noShare = () =>{
    alert("Sorry, these functionalities are not functional yet")
  }

  return (
    <div className="grid grid-cols-[30%_70%] min-h-screen overflow-hidden">
      {/* Left Column */}
      <div className="bg-[#1f9fe6] flex flex-col justify-between p-6 pb-[125px] space-y-5">
        <button onClick={goBack} className="self-start text-white px-4 py-2 rounded-md flex space-x-3">
          <ArrowLeftIcon className="h-6 w-6 text-white" />
          <span className="items-center">Back</span>
        </button>

        <div className="relative flex flex-col items-center bg-white p-4 rounded-[16px] w-[75%] max-h-max self-center">
          <button onClick={openPopup} className="absolute top-3 right-3 p-2 text-[#1f9fe6] focus:outline-none focus:ring-2 focus:ring-[#1f9fe6]">
            <ShareIcon className="h-6 w-6" />
          </button>

          <Image
            src={Therapist}
            alt="Therapist"
            className="rounded-[28px] mt-4 w-[65%]"
          />

          <div className="p-6 bg-white rounded-lg max-w-lg mx-auto space-y-4 text-center">
            <div className="flex items-center justify-start space-x-2">
              <button className="p-2" onClick={openPopup}>
                <ShareIcon className="h-5 w-5 text-gray-600" />
              </button>
              <span className="items-center font-medium text-xl font-sans text-gray-900">Swetha Verma</span>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 bg-blue-500 text-white rounded-full p-[3px]" />
              </div>
            </div>

            <div className="text-gray-500 text-base">
              <p>Consultant Clinical Psychologist</p>
            </div>
            <div className="text-black text-sm">
              <p>10+ Years of experience</p>
            </div>

            <div className="text-sm font-semibold text-gray-900">
              <p>Starts at <span className="text-base">1,200</span> / Session</p>
            </div>

            <div className="text-center text-gray-500">
              <p>📍 Block A2, Delhi</p>
            </div>
          </div>
        </div>

        {/* Book Session Button */}
        <button className="self-center w-[75%] rounded-full bg-[white] text-[#1f9fe6] py-2 hover:bg-gray-100">
          Book session
        </button>
      </div>

      {/* Right Column with Scroll */}
      <div className="flex flex-col items-start justify-start space-y-6 p-6 w-full mx-20 overflow-y-auto max-h-screen">
        {/* About Me Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">About Me</h2>
          <div className="text-black text-sm pr-36">
            <p className="my-2">Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 4 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.</p>

            {/* This second paragraph is initially hidden */}
            <p className={`transition-all duration-300 my-2 ${isExpanded ? "block" : "hidden"}`}>
              My commitment to continuous learning keeps me updated with the latest therapeutic techniques, allowing me to provide the best possible care. Whether you seek stress management strategies or personal growth, I am here to empower you on your journey towards emotional well-being. I offer convenient online consultation bookings, making it easier for you to take the first step towards a healthier, happier life.
            </p>

            {/* Button to toggle visibility */}
            <p
              onClick={toggleContent}
              className=" text-[#1f9fe6] font-semibold underline float-right cursor-pointer"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </p>
          </div>
        </section>

        {/* Credentials Section */}
        <section>
          <h2 className="text-2xl mt-2 font-semibold text-gray-900 mb-4">Credentials</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 flex items-center"><AcademicCapIcon className="h-5 w-5 mr-1 text-[#1f9fe6]" />Ph.D. in Clinical Psychology - Harvard University</li>
            <li className="text-gray-700 flex items-center"><AcademicCapIcon className="h-5 w-5 mr-1 text-[#1f9fe6]" />M.A. in Counseling - University of California, Berkeley</li>
            <li className="text-gray-700 flex items-center"><ShieldCheckIcon className="h-5 w-5 mr-1 text-[#1f9fe6]" />Licensed Professional Counselor (LPC) - State of DEF</li>
            <li className="text-gray-700 flex items-center"><DocumentTextIcon className="h-5 w-5 mr-1 text-[#1f9fe6]" />Certified Cognitive Behavioral Therapist (CBT)</li>
            <li className="text-gray-700 flex items-center"><UsersIcon className="h-5 w-5 mr-1 text-[#1f9fe6]" />Member, American Psychological Association (APA)</li>
            <li className="text-gray-700 flex items-center"><ShoppingBagIcon className="h-5 w-5 mr-1 text-[#1f9fe6]" />10+ years of experience in individual and group therapy</li>
          </ul>
        </section>

        {/* Available On Section */}
        <section>
          <h2 className="text-2xl mt-4 font-semibold text-gray-900 mb-4">Available On</h2>
          <div className="flex space-x-16 justify-center mt-2 text-sm">
            <div className="flex flex-col items-center">
              <div className=" bg-[#c6e3ff] text-[#1f9fe6] rounded-md p-6">
                <HomeIcon className="h-7 w-7" />
              </div>
              <p>In-Person</p>
            </div>

            <div className="flex flex-col items-center">
              <div className=" bg-[#c6e3ff] text-[#1f9fe6] rounded-md p-6">
                <PhoneIcon className="h-7 w-7" />
              </div>
              <p>Video / Voice call</p>
            </div>
          </div>
        </section>

        {/* I Offer Therapy For Section */}
        <section>
          <h2 className="text-2xl mt-4 mb-3 font-semibold text-gray-900">I offer therapy for</h2>
          <div className="flex flex-wrap max-w-[60%]">
            <div className="text-gray-700 border-2 border-[#1f9fe6] p-2 rounded-full text-center mr-5 mb-3">
              Stress Management
            </div>
            <div className="text-gray-700 border-2 border-[#1f9fe6] p-2 rounded-full text-center mr-5 mb-3">
              Relationship Skills
            </div>
            <div className="text-gray-700 border-2 border-[#1f9fe6] p-2 rounded-full text-center mr-5 mb-3">
              Anxiety Reduction
            </div>
            <div className="text-gray-700 border-2 border-[#1f9fe6] p-2 rounded-full text-center mr-5 mb-3">
              Depression Relief
            </div>
            <div className="text-gray-700 border-2 border-[#1f9fe6] p-2 rounded-full text-center mr-5 mb-3">
              Behavioral
            </div>
            <div className="text-gray-700 border-2 border-[#1f9fe6] p-2 rounded-full text-center mr-5 mb-3">
              Trauma Healing
            </div>
          </div>
        </section>

        {/* I Am From Section */}
        <section className="grid grid-cols-2 space-x-24">
          <div className="">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">I Am From</h1>
            <p className="text-gray-500">Chennai, India</p>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Languages</h1>
            <p className="text-gray-500">English, Hindi</p>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="pr-48">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">Client Testimonials</h2>
            {/* Show More / Show Less button */}
            <button
              onClick={handleToggleTestimonial}
              className="text-[#1f9fe6] font-semibold underline cursor-pointer"
            >
              {showMore ? "Show Less ∧" : "Show More ∨"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pr-16">
            {/* Render only 2 cards initially */}
            {testimonials.slice(0, showMore ? testimonials.length : 2).map((testimonial, index) => (
              <div key={index} className="bg-white p-4 px-16 py-12 my-6 mx-6 rounded-lg shadow-2xl">
                <FaQuoteLeft className="text-2xl text-[#92c2f7] my-2" />
                <p className="text-gray-700 font-bold text-sm my-1">"{testimonial}"</p>
                <p className="text-gray-700 font-bold text-sm my-2">Anonymous</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Overlay and Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-[10px]">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white p-6 rounded-lg w-[80%] md:w-[50%] shadow-lg z-50 space-y-6">
              {/* Link Copied Notification (Positioned at the top of the Popup) */}
              {isLinkCopied && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-[#72c3ff] text-sky-700 p-2 px-5 rounded-md">
                  Link Copied!
                </div>
              )}
              {/* Header with Title and Close Button */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Share</h3>
                <button onClick={closePopup} className="text-gray-600 items-center">
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-between px-32 space-x-4 text-xl">
                <div onClick={noShare} className="flex flex-col items-center space-y-2">
                  <FaFacebookF className="text-gray-700 cursor-pointer border-2 border-gray-700 rounded-full px-[2px] pt-[2px]" />
                  <p className="text-xs">FaceBook</p>
                </div>
                <div onClick={noShare} className="flex flex-col items-center space-y-2">
                  <FaWhatsapp className="text-gray-700 cursor-pointer" />
                  <p className="text-xs">Whatsapp</p>
                </div>
                <div onClick={noShare} className="flex flex-col items-center space-y-2">
                  <FaTwitter className="text-gray-700 cursor-pointer" />
                  <p className="text-xs">Twitter</p>
                </div>
                <div onClick={noShare} className="flex flex-col items-center space-y-2">
                  <FaEnvelope className="text-gray-700 cursor-pointer" />
                  <p className="text-xs">Mail</p>
                </div>
              </div>

              {/* Page Link */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700">Page Link</h4>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="text"
                    value={pageLink}
                    readOnly
                    className="w-[80%] p-2 border border-gray-100 rounded-md bg-gray-100"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="bg-white px-5 border border-blue-500 text-blue-500 p-2  rounded-full"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

