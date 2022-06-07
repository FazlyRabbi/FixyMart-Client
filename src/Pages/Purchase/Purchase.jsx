import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useForm } from "react-hook-form";

function Purchase() {
  const [tool, setTool] = useState({});
  const [user, setUser] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const { productImg, name, quantity, minOrder, price } = tool;

  useEffect(() => {
    const tool = localStorage.getItem("tool");
    const user = localStorage.getItem("user");
    setTool(JSON.parse(tool));
    setUser(JSON.parse(user));
  }, []);

  const onSubmit = (e) => {
    getValues();

    const multipleValues = getValues([
      "phoneNumber",
      "address",
      "orderQuantity",
    ]);

    const id = tool._id;
    const name = user.displayName;
    const email = user.email;
    const imgUrl = tool.productImg;
    const price = tool.price;
    const paid = false;
    const phoneNumber = multipleValues[0];
    const address = multipleValues[1];
    const orderQuantity = multipleValues[2];

    const purchaseInformation = {
      id,
      name,
      email,
      imgUrl,
      price,
      paid,
      phoneNumber,
      address,
      orderQuantity,
    };

    // post purchase product on db
    fetch("https://fixymart.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("data successful");
          navigate("/");
        } else if (data.quantity === false) {
          alert("your order quantity very high");
        } else {
          alert("data failed");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center ">
        <div>
          <div className="card w-80 glass h-[500px] mt-16 mr-6">
            <figure>
              <img src={productImg} alt="car!" />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title capitalize text-[20px]  font-bold text-right text-accent">
                {name}
              </h2>

              <h2 className="card-title capitalize text-[17px]">
                quantity :{" "}
                <span className="text-green-500">{quantity} Pce</span>
              </h2>
              <h3 className="card-title capitalize text-[17px]">
                Min Order :{" "}
                <span className="text-green-500">{minOrder} Pce </span>
              </h3>
              <h3 className="card-title capitalize text-[17px]">
                Price : <span className="text-green-500">{price}$</span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="mt-16 ml-14
        "
        >
          <h1 className="uppercase text-center font-bold mb-4 text-[20px]">
            Confirm Your Information
          </h1>

          <form
            className="flex flex-col drop-shadow-lg items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="number"
              placeholder="Phone Number"
              className="input w-full max-w-xs mb-8"
              name="phoneNumber"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "PhoneNumber is Required",
                },
              })}
            />

            <label className="label">
              {errors.phoneNumber?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </label>

            <input
              type="text"
              placeholder="Address"
              className="input w-full max-w-xs mb-8 "
              name="address"
              {...register("address", {
                required: {
                  value: true,
                  message: "address is Required",
                },
              })}
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder="Order Quantity"
              className="input w-full max-w-xs mb-8 "
              name="orderQuantity"
              {...register("orderQuantity", {
                required: {
                  value: true,
                  message: "orderQuantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.orderQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.orderQuantity.message}
                </span>
              )}
            </label>
            <input
              type="submit"
              className="input w-full max-w-xs  cursor-pointer text-white btn-accent"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
