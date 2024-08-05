"use client";
import React from "react";

const UserCard = ({ users, onDelete }) => {
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <div className="flex flex-wrap gap-8 ">
        {users.map((user, index) => (
          <div key={index} className="card">
            <div className="card2 p-8">
              <h2>{user.userName}</h2>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
              <p>Phone: {user.phone}</p>
              <p>Gender: {user.gender}</p>
              <p>Type of Account: {user.typeAcount}</p>
              <p>
                Receive Advertising: {user.receiveAdvertising ? "Yes" : "No"}
              </p>
              <button
                className="mt-8 p-2 bg-red-500 text-white rounded"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
