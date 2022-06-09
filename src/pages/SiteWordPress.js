import React, { useEffect, useState } from "react";
import SiteDetails from "../pages/SiteDetails";

const SiteWordPress = () => {
  const [wordPressSites, setWordPressSites] = useState([]);
  useEffect(() => {
    fetch("wordpressData.json")
      .then((res) => res.json())
      .then((data) => setWordPressSites(data));
  }, []);

  return (
    <div className="mt-12 mx-auto container justify-content-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {wordPressSites.map((item) => (
          <SiteDetails key={item.id} item={item}></SiteDetails>
        ))}
      </div>
    </div>
  );
};

export default SiteWordPress;
