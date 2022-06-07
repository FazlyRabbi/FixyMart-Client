import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4guzI3R04cGlPhKdAbtaOKCxm6tSvN0cw46Vplsd8upNKUWk8L3OpP30iuvbRCSd1PWBT7PT8unm82CSx1RWUo00XHJYmNDS"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://fixymart.herokuapp.com/purchase/${id}`;

  const { data: purchase, isLoading } = useQuery("booking", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return "loading";
  }

  const { name, orderQuantity, price, imgUrl } = purchase;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <p className="font-bold text-center mt-4">Hello : {name}</p>
        <figure className="px-10 pt-10">
          <img src={imgUrl} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title capitalize text-[17px]">
            Your Order Quantity
            <span className="text-red-500">{orderQuantity} Pec </span>
          </h3>

          <h3 className="card-title capitalize text-[17px]">
            Please Pay
            <span className="text-red-500">{orderQuantity * price}$ </span>
          </h3>
        </div>
      </div>

      <div className="card w-96 mt-16 bg-base-100 shadow-xl p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm purchase={purchase} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
