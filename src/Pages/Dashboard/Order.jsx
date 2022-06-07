import React from "react";
import { Link } from "react-router-dom";

function Order({ a, index, refetch }) {
  const handleCanceled = (id, orderQuantity, uid) => {
    const cancelData = {
      id,
      orderQuantity,
      uid,
    };

    fetch(`https://fixymart.herokuapp.com/canceled`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cancelData),
    })
      .then((res) => res.json())
      .then(() => refetch());
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{a.name}</td>
      <td>{a.address}</td>
      <td>{a.phoneNumber}</td>
      <td>
        <div class="avatar">
          <div class="w-[50px] rounded">
            <img src={a.imgUrl} />
          </div>
        </div>
      </td>
      <td>{a.orderQuantity}</td>
      <td>{a.orderQuantity * a.price}$</td>
      <td>
        {a.paid ? (
          <div class="badge badge-info font-bold">Paid</div>
        ) : (
          <Link
            to={`/dashboard/payment/${a._id}`}
            class="badge badge-warning font-bold cursor-pointer"
          >
            Pay
          </Link>
        )}
      </td>
      <td>
        {!a.paid && (
          <div
            class="badge badge-error font-bold cursor-pointer text-black"
            onClick={() => handleCanceled(a.id, a.orderQuantity, a._id, a.id)}
          >
            Cancel
          </div>
        )}
      </td>
    </tr>
  );
}

export default Order;
