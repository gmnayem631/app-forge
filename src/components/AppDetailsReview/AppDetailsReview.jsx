import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import { useInstall } from "../../context/useInstall";
import { toast } from "react-toastify";

const formatDownloads = (num) => {
  if (num >= 1000000) return `${num / 1_000_000}M`;
  if (num >= 1000) return `${num / 1_000}K`;
  return String(num);
};

const AppDetailsReview = ({ app }) => {
  const {
    image,
    title,
    description,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    size,
  } = app;

  const { installApp, isInstalled } = useInstall();
  const installed = isInstalled(app.id);

  const handleInstall = (app) => {
    installApp(app);
    toast.success(`Installed ${title}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-10">
      <img
        src={image}
        className="bg-white w-full sm:w-auto sm:h-87 rounded-lg object-cover"
        alt=""
      />
      {/* Card content */}
      <div className="flex-1">
        <h3 className="font-bold text-2xl sm:text-3xl">
          {title}: {description}
        </h3>
        <p className="mt-4">
          Developed by:{" "}
          <span className="text-gradient font-bold">{companyName}</span>
        </p>
        <div className="mt-4 border-t border-dashed border-gray-400"></div>
        <div className="flex justify-between w-full sm:w-1/2">
          {/* Downloads */}
          <div className="flex flex-col gap-3 justify-center items-center my-10">
            <img src={downloadIcon} className="w-10" alt="" />
            <p>Downloads</p>
            <p>{formatDownloads(downloads)}</p>
          </div>
          {/* Ratings */}
          <div className="flex flex-col gap-3 justify-center items-center my-10">
            <img src={ratingsIcon} className="w-10" alt="" />
            <p>Average Ratings</p>
            <p>{ratingAvg}</p>
          </div>

          {/* Total Reviews */}
          <div className="flex flex-col gap-3 justify-center items-center my-10">
            <img src={reviewsIcon} className="w-10" alt="" />
            <p>Total Reviews</p>
            <p>{reviews}</p>
          </div>
        </div>
        <button
          onClick={() => handleInstall(app)}
          disabled={installed}
          className={`btn w-full sm:w-auto ${installed ? "bg-red-300" : "bg-[#00D390]"} text-white font-semibold text-lg`}
        >
          {installed ? "Installed" : `Install Now (${size}MB)`}
        </button>
      </div>
    </div>
  );
};

export default AppDetailsReview;
