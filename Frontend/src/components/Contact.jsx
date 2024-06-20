import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  dark:bg-slate-800 dark:text-white">
      <br />
      <br />
      <div className="max-w-screen-2xl container mx-auto px-4 mt-14">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto  dark:bg-slate-800 dark:text-white dark:border dark:border-white">
          <h1 className="font-bold text-3xl text-center mb-6">Contact Us:</h1>
          <form className="space-y-5">
            <div className="flex flex-col items-center">
              <label htmlFor="Name" className="self-start w-full">
                Name:
              </label>
              <input
                type="text"
                id="Name"
                className="border border-black w-full mb-3 h-10 p-2"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="email" className="self-start w-full">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border border-black w-full mb-3 h-10 p-2"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="Subject" className="self-start w-full">
                Subject:
              </label>
              <input
                type="text"
                id="Subject"
                className="border border-black w-full mb-3 h-10 p-2"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="Message" className="self-start w-full">
                Message:
              </label>
              <textarea
                id="Message"
                className="border border-black w-full mb-3 h-24 p-2"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
