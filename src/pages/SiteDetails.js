import React from "react";

const SiteDetails = ({ item }) => {
  const { name, img, description, used, link } = item || {};

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="text-center items-center mx-auto p-2 w-full h-44">
          <img src={img} alt="pic" className="rounded-xl" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold  mt-5">{name}</h2>
          <p className="font-bold text-xl">{description}</p>
          <p className="mt-2 text-lg">
            <strong>Used: </strong>
            {used}
          </p>
        </div>

        <div className="card-actions">
          <a target="_blank" href={link} className="w-full">
            <button className="mt-3 btn btn-primary text-lg w-full font-bold">
              Live Site
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SiteDetails;
