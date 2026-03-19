import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <header className="bg-base-100 shadow-sm">
        <Navbar></Navbar>
      </header>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-base-100/60 z-50">
          <span className="loading loading-spinner loading-lg text-violet-500" />
        </div>
      )}
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
