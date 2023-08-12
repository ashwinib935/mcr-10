import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import { useInventory } from "../../context/InventoryProvider";
import { useNavigate } from "react-router";
import "./Products.css";
function Products() {
  const { state, dispatch, filterdInventory } = useInventory();
  const navigate = useNavigate();
  const departments = ["All Departments", "Kitchen", "Clothing", "Toys"];

  return (
    <div className="main">
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side">
        <div className="product-header">
          <h1>Products</h1>

          <select
            name=""
            id=""
            defaultValue={state.selectedDepartment}
            onChange={(e) =>
              dispatch({ type: "SET_DEPARTMENT", payload: e.target.value })
            }
          >
            {departments.map((department, i) => (
              <option key={i} value={department}>
                {department}
              </option>
            ))}
          </select>
          <label htmlFor="">
            Low Stock Items
            <input
              type="checkbox"
              checked={state.checkLowStock}
              onChange={(e) =>
                dispatch({
                  type: "SET_LOWSTOCK",
                  payload: !state.checkLowStock,
                })
              }
            />
          </label>

          <select
            name=""
            id=""
            defaultValue={state.sortType}
            onChange={(e) =>
              dispatch({ type: "SET_SORT_TYPE", payload: e.target.value })
            }
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
          <button className="btn-new" onClick={() => navigate(`/newInventory`)}>
            New
          </button>
        </div>
        <div className="product-container">
          <table>
            <thead>
              <tr className="tr-head">
                <td>Image</td>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>
                <td>Stock</td>
                <td>Supplier</td>
              </tr>
            </thead>
            <tbody>
              {filterdInventory?.map((inventory) => (
                <tr
                  className="tr-body"
                  onClick={() => navigate(`/productDetail/${inventory.id}`)}
                  key={inventory.id}
                >
                  <td>
                    <img
                      src={inventory.imageUrl}
                      alt="product img"
                      className="inventory-img"
                    />
                  </td>
                  <td>{inventory.name}</td>
                  <td>{inventory.description}</td>
                  <td>${inventory.price}</td>
                  <td>{inventory.stock}</td>
                  <td>{inventory.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
