// import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    navigate("/assignRoles");
  };

  const handleClick = (i) => {
    if (i === "M") {
      navigate("/manufacture");
    } else if (i === "C") {
      navigate("/customer");
    } else if (i === "D") {
      navigate("/delivery");
    } else if (i === "T") {
      navigate("/thirdParty");
    }
  };
  return (
    <>
      <Header />
      <div>
        <h2>Assign Roles</h2>
        <button
          onClick={handleChange}
          className="bg-blue-600 text-white  p-2 rounded-xl hover:bg-blue-400"
        >
          Assign
        </button>
      </div>

      <div>
        <h2>Visit As</h2>
        <div className="flex gap-4 ">
          <button
            onClick={() => handleClick("M")}
            className="bg-blue-100 px-2 rounded-xl hover:bg-blue-400"
          >
            {" "}
            Manufacture{" "}
          </button>
          <button
            onClick={() => handleClick("T")}
            className="bg-blue-100 px-2 rounded-xl hover:bg-blue-400"
          >
            {" "}
            Third Party{" "}
          </button>
          <button
            onClick={() => handleClick("D")}
            className="bg-blue-100 px-2 rounded-xl hover:bg-blue-400"
          >
            {" "}
            Delivery Hub
          </button>
          <button
            onClick={() => handleClick("C")}
            className="bg-blue-100 px-2 rounded-xl hover:bg-blue-400"
          >
            {" "}
            Customer
          </button>
        </div>
      </div>
    </>
  );
}
