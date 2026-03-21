import React from "react";
import { useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  return <div className="max-w-11/12 mx-auto py-20">App Details {id}</div>;
};

export default AppDetails;
