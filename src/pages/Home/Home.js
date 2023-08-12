import React from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import { useInventory } from "../../context/InventoryProvider";
function Home() {
  const { state, dispatch } = useInventory();

  const totalStock = [...state.inventory].reduce(
    (acc, curr) => (acc += curr.stock),
    0
  );

  const totalDelivered = [...state.inventory].reduce(
    (acc, curr) => (acc += curr.delivered),
    0
  );

  const totalLowStockItems = [...state.inventory].reduce(
    (acc, curr) => (acc += curr.stock <= 10),
    0
  );

  return (
    <div className="main">
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side">
        <div className="dashboard-container">
          <div className="card">
            <h2 style={{ color: "green" }}>{totalStock}</h2>
            <p>Total Stock</p>
          </div>
          <div className="card">
            <h2 style={{ color: "orange" }}>{totalDelivered}</h2>
            <p>Total Delivered</p>
          </div>
          <div className="card">
            <h2 style={{ color: "red" }}>{totalLowStockItems}</h2>
            <p>Low Stock items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
