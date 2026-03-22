import React from "react";
import { useLoaderData } from "react-router";
import AppDetailsReview from "../../components/AppDetailsReview/AppDetailsReview";

const AppDetails = () => {
  const app = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto py-20 w-full">
      {/* Details Card */}
      <AppDetailsReview app={app}></AppDetailsReview>
    </div>
  );
};

export default AppDetails;
