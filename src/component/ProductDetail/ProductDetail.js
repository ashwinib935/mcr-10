import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router";
import { useInventory } from "../../context/InventoryProvider";
import "./ProductDetail.css";
function ProductDetail() {
  const { productId } = useParams();
  const { state } = useInventory();
  const selectedProduct = [...state.inventory].find(
    (inventory) => inventory.id === Number(productId)
  );
  console.log("selectedProduct", selectedProduct);
  return (
    <div className="main">
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side">
        <div className="product-detail">
          <h1>{selectedProduct.name}</h1>
          <img
            src={selectedProduct.imageUrl}
            alt="product img"
            className="product-detail-img"
          />

          <p>Price: ${selectedProduct.price}</p>
          <p>Stock: {selectedProduct.stock}</p>
          <p>Supplier: {selectedProduct.supplier}</p>
          <p>Department: {selectedProduct.department}</p>
          <p>SKU: {selectedProduct.sku}</p>
          <p>Delivered: {selectedProduct.delivered}</p>
          <p>Description: {selectedProduct.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
