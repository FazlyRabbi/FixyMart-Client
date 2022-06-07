import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Order from "./Order";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: purchased,
    isLoading,
    refetch,
  } = useQuery("purchased", () =>
    fetch(`https://fixymart.herokuapp.com/purchased?user=${user.email}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return "loading";
  }

  return (
    <div className="p-4 ">
      <h2 className="font-bold text-[18px]">My Orders: {purchased.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Tools</th>
              <th>Order Quantity</th>
              <th>Price</th>
              <th>Paid</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {purchased.map((a, index) => (
              <Order a={a} refetch={refetch} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
