import React from "react";
import Header from "./Header";
import SearchJobs from "./SearchJobs";
import { useLocation } from "react-router-dom";
function Jobs() {
  const location = useLocation();
  return (
    <div>
      <Header></Header>
      <SearchJobs searchData={location?.state?.input}></SearchJobs>
    </div>
  );
}

export default Jobs;
