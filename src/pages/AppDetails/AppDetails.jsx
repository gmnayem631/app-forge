import React from "react";
import { useLoaderData } from "react-router";
import AppDetailsReview from "../../components/AppDetailsReview/AppDetailsReview";
import ReviewChart from "../../components/ReviewChart/ReviewChart";

const AppDetails = () => {
  const app = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto py-20 w-full">
      {/* Details Card */}
      <AppDetailsReview app={app}></AppDetailsReview>
      <ReviewChart app={app}></ReviewChart>
    </div>
  );
};

export default AppDetails;
