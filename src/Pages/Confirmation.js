import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/"); // Redirect to homepage when timer ends
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [countdown, navigate]);

  return (
    <div className="container mx-auto flex justify-center items-center min-h-[93vh] text-center">
      <div>
        <h1 className="text-3xl font-bold text-green-500">Form Submitted Successfully!</h1>
        <p className="mt-4 text-xl text-gray-700">Redirecting to homepage in {countdown} seconds...</p>
        <div className="mt-8">
          <p className="text-lg text-gray-600">If you're not redirected, <a href="/" className="text-blue-600">click here</a> to go to the homepage.</p>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
