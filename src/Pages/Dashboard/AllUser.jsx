import React from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";

function AllUser() {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://fixymart.herokuapp.com/user`).then((res) => res.json())
  );
  if (isLoading) {
    return "loading";
  }

  return (
    <div className="p-4">
      <h2 className="font-bold text-[18px]">All Users: {users?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <UserRow user={user} i={i} refetch={refetch} key={user._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUser;
