"use client";
import { useState } from "react";

function UserForm({ onUserAdded }) {
  const initialUserState = {
    userName: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
    typeAcount: "Basic",
    receiveAdvertising: false,
  };

  const [user, setUser] = useState(initialUserState);


  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    setUser(initialUserState); 
    if (onUserAdded) {
      onUserAdded(storedUsers);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="flex flex-col min-w-[400px] items-center justify-center rounded-2xl border-[3px] bg-black text-white p-4">
      <h1 className="">FORM</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="userNameData">Enter your name:</label>
        <input
          className="text-black"
          id="userNameData"
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
          required
        />

        <label htmlFor="emailData">Enter your email:</label>
        <input
          className="text-black"
          id="emailData"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="ageData">Enter your age:</label>
        <input
          className="text-black"
          id="ageData"
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneData">Enter your phone:</label>
        <input
          className="text-black"
          id="phoneData"
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="genderData">Enter your gender:</label>

        <div className="flex gap-2">
          <p className="flex gap-2">
            <input
            id="genderData"
              type="radio"
              name="gender"
              value="Male"
              checked={user.gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </p>
          <p className="flex gap-2">
            <input
            id="genderData"
              type="radio"
              name="gender"
              value="Female"
              checked={user.gender === "Female"}
              onChange={handleChange}
              required
            />
            Female
          </p>
          <p className="flex gap-2">
            <input
            id="genderData"
              type="radio"
              name="gender"
              value="nonbinary"
              checked={user.gender === "nonbinary"}
              onChange={handleChange}
              required
            />
            nonbinary
          </p>
          <p className="flex gap-2">
            <input
            id="genderData"
              type="radio"
              name="gender"
              value="others / I prefer not to say"
              checked={user.gender === "others / I prefer not to say"}
              onChange={handleChange}
              required
            />
            Others / I prefer not to say
          </p>
        </div>

        <label htmlFor="accountData">Enter your type account:</label>
        <select
          className="text-black"
          id="accountData"
          name="typeAcount"
          value={user.typeAcount}
          onChange={handleChange}
          required
        >
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Business">Business</option>
          required
        </select>

        <label htmlFor="temrs" className="flex gap-2">
          <input
          id="temrs"
            type="checkbox"
            name="receiveAdvertising"
            checked={user.receiveAdvertising}
            onChange={handleChange}
          />
          I agree to receive advertising by email:
        </label>

        <input className="bg-gray-500 mt-[10px] rounded-lg p-1" type="submit" />
      </form>
    </div>
  );
}

export default UserForm;
