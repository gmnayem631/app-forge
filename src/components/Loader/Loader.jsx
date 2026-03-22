import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full my-20">
      <DNA
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
