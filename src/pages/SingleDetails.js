import React, { useContext } from "react";
// import { ItemsContext } from "../../App";

const SingleDetails = ({ item }) => {
  // const [items] = useContext(ItemsContext);
  //   console.log(items);
  const { name, img, description, used } = item || {};
  return (
    <div className="text-center ">
      <h2 className="text-5xl font-bold">Details:</h2>
      <div>
        <img style={{ height: "400px" }} src={img} alt="" />
        <h4>{name}</h4>
        <h2>{description}</h2>
        <p>{used}</p>
      </div>
    </div>
  );
};

export default SingleDetails;
