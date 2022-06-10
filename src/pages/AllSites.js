import React, { useEffect, useState } from "react";
import SiteDetails from "../pages/SiteDetails";

const AllSites = () => {
  const [allSites, setAllSites] = useState([]);
  useEffect(() => {
    fetch("allData.json")
      .then((res) => res.json())
      .then((data) => setAllSites(data));
  }, []);

  return (
    <div className="mt-12 mx-auto container justify-content-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {allSites.map((item) => (
          <SiteDetails key={item.id} item={item}></SiteDetails>
        ))}
      </div>
    </div>
  );
};

export default AllSites;
