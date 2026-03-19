import React from "react";

const AppCard = ({ app }) => {
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden border border-base-200 hover:shadow-xl transition-shadow duration-300">
      <figure className="w-full h-44 overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-4 gap-3">
        <div>
          <h3 className="font-bold text-base leading-tight">{app.title}</h3>
          <p className="text-xs text-base-content/50 mt-0.5">
            {app.companyName}
          </p>
        </div>

        <p className="text-sm font-semibold text-base-content/80 leading-snug">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {/* Downloads Badge */}
          <span className="badge gap-1.5 px-3 py-3 rounded-full text-xs font-semibold bg-green-100 text-green-700 border-0">
            <FiDownload size={12} />
            {formatDownloads(app.downloads)}
          </span>

          {/* Rating Badge */}
          <span className="badge gap-1.5 px-3 py-3 rounded-full text-xs font-semibold bg-orange-100 text-orange-600 border-0">
            <MdStar size={13} />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
