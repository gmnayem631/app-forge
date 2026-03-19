import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    title: "Total Downloads",
    value: 29.6,
    suffix: "M",
    description: "21% more than last month",
  },
  {
    title: "Total Reviews",
    value: 906,
    suffix: "K",
    description: "46% more than last month",
  },
  {
    title: "Active Apps",
    value: 132,
    suffix: "+",
    description: "31 more will Launch",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="w-full bg-linear-to-r from-[#753EE8] to-violet-500 py-16">
      <div className="max-w-6xl mx-auto px-4 text-white text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Trusted by Millions, Built for You
        </h2>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              {/* Small paragraph */}
              <p className="text-sm opacity-80">{stat.title}</p>

              {/* Animated Number */}
              <h3 className="text-4xl md:text-5xl font-bold">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </h3>

              {/* Bottom paragraph */}
              <p className="text-sm opacity-80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
