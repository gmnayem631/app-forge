import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import AppDetailsReview from "../../components/AppDetailsReview/AppDetailsReview";
import ReviewChart from "../../components/ReviewChart/ReviewChart";
import { FaArrowLeft } from "react-icons/fa";
import { useInstall } from "../../context/useInstall";

const AppDetails = () => {
  const { id } = useParams();
  const allApps = useLoaderData();
  const app = allApps.find((a) => a.id === parseInt(id));

  const navigate = useNavigate();
  const { installedApps } = useInstall();
  console.log(installedApps);
  return (
    <div className="max-w-11/12 mx-auto py-20 w-full">
      {/* Details Card */}

      <AppDetailsReview app={app}></AppDetailsReview>
      <ReviewChart app={app}></ReviewChart>

      <p className="text-[#627382]">{app.extendedDescription}</p>

      <div className="mt-7 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="btn bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-xl"
        >
          <FaArrowLeft />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
