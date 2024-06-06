import React from "react";
import IMG from "../../data/404.svg";
import Header from "../Dashboard/Header";
import Footer from "./Footer";
function PageNotFound() {
  return (
    <div>
      <Header></Header>.
      <div className="mt-10 flex justify-center full p-36">
        <img src={IMG} className="w-96 h-96 scale-150"></img>
      </div>
    </div>
  );
}

export default PageNotFound;
