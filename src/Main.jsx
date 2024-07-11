import React, { useEffect } from "react";
import "./Main.css";
import { useSelector } from "react-redux";
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import PropertyListing from "./components/PropertyListing";

const Main = () => {
  const {page} = useSelector(state=>state.page);
  console.log(page);
  useEffect(()=>{},[page]);
  return (
    <>
      <div className="main">
        <Navbar/>
        <main>
          {page ? <PropertyListing/> : <FirstPage/>}
        </main>
      </div>
    </>
  );
};

export default Main;
