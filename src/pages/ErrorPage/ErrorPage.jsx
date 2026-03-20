import React from "react";
import errorImg from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-8 md:space-y-12">
        {/* Illustration / Hero Image */}
        <div className="flex justify-center">
          <img
            src={errorImg}
            alt="404 Error Illustration - laptop with plug and leaves"
            className="drop-shadow-2xl"
          />
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ooops, page not found!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The page you are looking for is not available.
          </p>
        </div>

        {/* CTA Button */}
        <div className="">
          <button
            onClick={() => navigate(-1)}
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-xl"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
