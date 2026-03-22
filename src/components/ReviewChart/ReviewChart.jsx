import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReviewChart = ({ app }) => {
  const appRatings = app.ratings;

  return (
    <div className="w-full my-10">
      {" "}
      <div className="mt-4 border-t border-gray-600"></div>
      <h3 className="my-6 text-2xl font-bold">Ratings</h3>
      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...appRatings].reverse()}
            layout="vertical"
            margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
          >
            <XAxis type="number" dataKey={"count"} />
            <YAxis type="category" dataKey="name" width={50} />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-9 border-t border-gray-400"></div>
    </div>
  );
};

export default ReviewChart;
