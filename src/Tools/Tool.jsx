import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

function Tool({ tool }) {
  const { productImg, name, quantity, minOrder, price, _id } = tool;

  const [user] = useAuthState(auth);

  const handlePurchase = () => {
    localStorage.setItem("tool", JSON.stringify(tool));
    localStorage.setItem("user", JSON.stringify(user));
  };

  // const handlePurchase = () => {
  //   fetch(`https://fixymart.herokuapp.com/tool/purchase`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(tool),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <div className="card w-96 glass mt-16 mr-6">
      <figure>
        <img src={productImg} alt="car!" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title capitalize text-[20px]  font-bold text-right text-accent">
          {name}
        </h2>
        <p className="font-bold text-center my-2">
          <small>Titanium Perfect Wheel Cover Circular Saw</small>
        </p>
        <h2 className="card-title capitalize text-[17px]">
          quantity :{" "}
          <span className="text-green-500">Available {quantity} Pcs</span>
        </h2>
        <h3 className="card-title capitalize text-[17px]">
          Min Order : <span className="text-green-500">{minOrder} Pcs </span>
        </h3>
        <h3 className="card-title capitalize text-[17px]">
          Price : <span className="text-green-500">{price}$ per pcs</span>
        </h3>

        <div className="card-actions justify-center mt-2">
          <Link
            to={{
              pathname: "/purchase",
              tool,
            }}
            onClick={handlePurchase}
            className="btn btn-neutral  btn-sm text-white "
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tool;
