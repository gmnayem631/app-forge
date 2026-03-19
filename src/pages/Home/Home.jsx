import React from "react";
import Hero from "../../components/Hero/Hero";
import StatsSection from "../../components/StatsSection/StatsSection";
import { useLoaderData } from "react-router";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const Home = () => {
  const apps = useLoaderData();
  return (
    <div className="mt-20">
      <Hero></Hero>
      <StatsSection></StatsSection>
      <TrendingApps apps={apps}></TrendingApps>
    </div>
  );
};

export default Home;
