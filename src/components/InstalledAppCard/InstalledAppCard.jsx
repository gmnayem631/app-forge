import React from "react";
import { useInstall } from "../../context/useInstall";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";

const formatDownloads = (num) => {
  if (num >= 1000000) return `${num / 1_000_000}M`;
  if (num >= 1000) return `${num / 1_000}K`;
  return String(num);
};

const InstalledAppCard = ({ app }) => {
  const { uninstallApp } = useInstall();

  const { id, title, description, downloads, ratingAvg, size } = app;

  const handleUninstall = (id) => {
    uninstallApp(id);
    toast.error(`Uninstalled ${title}`, {
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
    <div
      key={app.id}
      className="bg-white rounded-xl p-4 shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-3"
    >
      {/* Left */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <img
          src={app.image}
          className="w-14 h-14 object-cover rounded-lg shrink-0"
        />
        <div className="min-w-0">
          <p className="font-semibold wrap-break-word">
            {title}: {description}
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center justify-center gap-2">
              <img src={downloadIcon} className="h-4 w-4" alt="" />
              <span className="text-[#00D390]">
                {formatDownloads(downloads)}
              </span>
            </div>{" "}
            <div className="flex items-center justify-center gap-2">
              <img src={ratingIcon} className="h-4 w-4" alt="" />
              <span className="text-[#FF8811]">{ratingAvg}</span>
            </div>{" "}
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#627382]">{size} MB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <button
        onClick={() => handleUninstall(id)}
        className="btn bg-[#00D390] text-white rounded-lg shrink-0 w-full sm:w-auto"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
