// import React from 'react'

import { useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

export default function AssignRoles() {
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const { contract } = useSelector((state) => state.UI);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const op = await contract.methods.addRole(address, role).send();
    await op.confirmation();
  };
  return (
    <>
      <Header />
      <h1>Assign Roles</h1>
      <div className="flex gap-4">
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Enter address of user "
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option value="">Select Role</option>
          <option value="M">Manufacturer</option>
          <option value="C">Customer</option>
          <option value="T">Third Party</option>
          <option value="D">Delivery Hub</option>
        </select>
        <button className="bg-blue-200 px-2 rounded-xl " onClick={handleSubmit}>
          Submit{" "}
        </button>
      </div>
    </>
  );
}
