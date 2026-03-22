import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <header className="bg-base-100 shadow-sm">
        <Navbar></Navbar>
      </header>
      {isLoading && <Loader />}
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
