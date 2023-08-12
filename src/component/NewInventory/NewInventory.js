import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NewInventory.css";
import { useState } from "react";
import { useInventory } from "../../context/InventoryProvider";
import { useNavigate } from "react-router";
function NewInventory() {
  const departments = ["Kitchen", "Clothing", "Toys"];
  const { state, dispatch } = useInventory();
  const navigate = useNavigate();
  const [newInventory, setNewInventory] = useState({
    id: "",
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("newInventory", newInventory);
    dispatch({ type: "ADD_PRODUCT", payload: newInventory });
    navigate(`/products`);
  };
  return (
    <div className="main">
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side">
        <h1>Add New Product</h1>
        <form action="" className="product-form">
          <label htmlFor="">
            Department
            <select
              name=""
              id=""
              onChange={(e) =>
                setNewInventory({ ...newInventory, department: e.target.value })
              }
            >
              <option value="">Select Department</option>
              {departments.map((department, i) => (
                <option key={i} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="">
            Name
            <input
              type="text"
              name=""
              id=""
              onChange={(e) =>
                setNewInventory({ ...newInventory, name: e.target.value })
              }
            />
          </label>

          <label htmlFor="">
            Description
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) =>
                setNewInventory({
                  ...newInventory,
                  description: e.target.value,
                })
              }
            ></textarea>
          </label>

          <label htmlFor="">
            Price
            <input
              type="text"
              name=""
              id=""
              defaultValue={0}
              onChange={(e) =>
                setNewInventory({
                  ...newInventory,
                  price: Number(e.target.value),
                })
              }
            />
          </label>

          <label htmlFor="">
            SKU
            <input
              type="text"
              onChange={(e) =>
                setNewInventory({
                  ...newInventory,
                  sku: e.target.value,
                })
              }
            />
          </label>

          <label htmlFor="">
            Supplier
            <input
              type="text"
              name=""
              id=""
              defaultValue={0}
              onChange={(e) =>
                setNewInventory({
                  ...newInventory,
                  supplier: Number(e.target.value),
                })
              }
            />
          </label>

          <label htmlFor="">
            Delivered
            <input
              type="text"
              name=""
              id=""
              defaultValue={0}
              onChange={(e) =>
                setNewInventory({
                  ...newInventory,
                  delivered: Number(e.target.value),
                })
              }
            />
          </label>

          <label htmlFor="">
            ImageUrl
            <input
              type="text"
              onChange={(e) =>
                setNewInventory({
                  ...newInventory,
                  imageUrl: e.target.value,
                })
              }
            />
          </label>
          <button className="btn-new" onClick={handleAddProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewInventory;
