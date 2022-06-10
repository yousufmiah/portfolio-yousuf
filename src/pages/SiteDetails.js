import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../App";

const SiteDetails = ({ item }) => {
  const [items, setItems] = useContext(ItemsContext);
  console.log(items);

  const navigate = useNavigate();

  const { name, img, description, used, link } = item || {};

  const handleItems = (item) => {
    navigate("/singleDetails");

    const newItem = [item];

    setItems(newItem);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl mb-20">
        <div className="text-center items-center mx-auto p-2 w-full h-44">
          <img src={img[0]} alt="pic" className="rounded-xl" />
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

          {/* <button
            onClick={() => handleItems(item)}
            className="mt-3 btn btn-primary text-lg w-full font-bold"
          >
            Site Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SiteDetails;
