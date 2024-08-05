"use client";
import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import Search from "./Search"; //
const Form = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const listUsers = () => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const userList = JSON.parse(storedUsers);
      setUsers(userList);
      setFilteredUsers(userList);
    }
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(filtered);
    }
  };

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <div className="grid grid-cols-2">
      <div>
        <UserForm onUserAdded={listUsers} />
      </div>
      <div className="flex flex-col items-center m-10 text-white text-[23px]">
        <div className="w-full">
          <Search onSearch={handleSearch} />
        </div>
        <div className="flex-wrap mt-4 w-full">
          <UserCard users={filteredUsers} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Form;
