import React from "react";
import { useInstall } from "../../context/useInstall";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const formatDownloads = (num) => {
  if (num >= 1000000) return `${num / 1_000_000}M`;
  if (num >= 1000) return `${num / 1_000}K`;
  return String(num);
};

const InstalledAppCard = ({ app }) => {
  const { uninstallApp } = useInstall();

  const { title, description, downloads, ratingAvg, size } = app;
  return (
    <div
      key={app.id}
      className="bg-white rounded-xl p-4 shadow flex items-center justify-between gap-4 mt-3"
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <img
          src={app.image}
          className="w-14 h-14 object-cover rounded-lg shrink-0"
        />
        <div className="">
          <p className="font-semibold">
            {title}: {description}
          </p>
          <div className="flex gap-4 mt-2">
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
        onClick={() => uninstallApp(app.id)}
        className="btn bg-[#00D390] text-white rounded-lg shrink-0"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
