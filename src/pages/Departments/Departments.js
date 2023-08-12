import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import { useInventory } from "../../context/InventoryProvider";
import { useNavigate } from "react-router";
import "./Departments.css";
function Departments() {
  const departments = ["Kitchen", "Clothing", "Toys"];
  const { state, dispatch } = useInventory();
  const navigate = useNavigate();

  const handleDepartment = (department) => {
    dispatch({ type: "SET_DEPARTMENT", payload: department });
    navigate(`/products`);
  };
  return (
    <div className="main">
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side">
        <div className="dashboard-container">
          {departments.map((department, i) => (
            <div
              className="card department-card"
              key={i}
              onClick={() => handleDepartment(department)}
            >
              <h2>{department}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
