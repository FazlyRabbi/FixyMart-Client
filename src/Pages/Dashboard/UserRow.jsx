import React from "react";

function UserRow({ user, refetch, i }) {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://fixymart.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
      });
  };

  const removeUser = () => {
    fetch(`https://fixymart.herokuapp.com/user/remove/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        refetch();
      });
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role !== "admin" && (
          <button class="btn btn-xs" onClick={removeUser}>
            Remove User
          </button>
        )}
      </td>
    </tr>
  );
}

export default UserRow;
