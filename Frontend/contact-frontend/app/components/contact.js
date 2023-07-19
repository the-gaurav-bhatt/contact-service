"use client";
import React from "react";
import { useState } from "react";
import BounceSpinners from "../components/spinners/BounceSpinners";
import SuccessMessage from "../components/spinners/SuccessMessage";
import ErrorMessage from "../components/spinners/ErrorMessage";
const ContactPage = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setContact((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(contact);
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const data = await res.json();
      if (data.status === "success") {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        setLoading(false);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 ">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>
        {success ? (
          <SuccessMessage message={"Message Received Successfully"} />
        ) : (
          error && (
            <ErrorMessage message={"Something Went Wrong, Try again Later"} />
          )
        )}
        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 ">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
              Fill in the form
            </h2>

            <form type="submit" onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="border rounded-md border-teal-300 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => InputEvent(e)}
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full  text-sm focus:border-teal-500 focus:ring-teal-500 "
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    onChange={(e) => InputEvent(e)}
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-contact-number-1" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="contact"
                    onChange={(e) => InputEvent(e)}
                    id="hs-contact-number-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className=" sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    onChange={(e) => InputEvent(e)}
                    id="subject"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => InputEvent(e)}
                    rows="4"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                >
                  {loading ? <BounceSpinners /> : "Send inquiry"}
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
