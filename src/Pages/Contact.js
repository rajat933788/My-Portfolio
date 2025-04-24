import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3053cce1-1eab-423e-b1b3-204f85c6a387");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        navigate("/confirmation"); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main className="container mx-auto max-w-screen-lg pt-10 pb-20 px-4 sm:px-6 lg:px-8 mt-10 ">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-light-heading font-semibold md:font-bold mb-8">
          Contact Me
        </h1>
        <p className="text-lg text-center text-light-heading font-semibold mb-8">
          I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Glass Effect Form Section */}
        <form onSubmit={onSubmit} className="w-full max-w-md bg-white bg-opacity-0 backdrop-blur-lg border border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-light-heading">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full rounded-md shadow-sm bg-transparent text-white py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-light-heading">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md shadow-sm bg-transparent text-white py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-light-heading">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              className="mt-1 block w-full rounded-md shadow-sm bg-transparent text-white py-2 px-3"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Confirmation Message */}
        {result && (
          <div className="mt-8 text-center text-xl font-medium text-green-500">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}

export default Contact;
