import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { inventoryData } from "../data/inventoryData";
import { useEffect } from "react";

export const InventoryContext = createContext();

const handleInventory = (state, action) => {
  switch (action.type) {
    case "SET_INVENTORY":
      return { ...state, inventory: [...action.payload] };
    case "SET_DEPARTMENT":
      return { ...state, selectedDepartment: action.payload };
    case "SET_SORT_TYPE":
      return { ...state, sortType: action.payload };
    case "SET_LOWSTOCK":
      return { ...state, checkLowStock: action.payload };
    case "ADD_PRODUCT":
      const newlyAddedProduct = action.payload;
      const length = state.inventory.length;
      newlyAddedProduct.id = length + 1;
      const newInventoryList = [...state.inventory];
      newInventoryList.push(newlyAddedProduct);
      localStorage.setItem("inventory", JSON.stringify(newInventoryList));
      return { ...state, inventory: newInventoryList };
    default:
      return state;
  }
};

function InventoryProvider({ children }) {
  const [state, dispatch] = useReducer(handleInventory, {
    inventory: inventoryData,
    selectedDepartment: "All Departments",
    sortType: "name",
    checkLowStock: false,
  });
  useEffect(() => {
    const existingInventory = localStorage.getItem("inventory");
    if (existingInventory) {
      dispatch({
        type: "SET_INVENTORY",
        payload: JSON.parse(existingInventory),
      });
    } else {
      dispatch({ type: "SET_INVENTORY", payload: inventoryData });
    }
  }, []);

  const applyFilter = (inventories) => {
    let filterInventoryList = [...inventories];
    if (state.selectedDepartment !== "All Departments") {
      filterInventoryList = inventories.filter(
        (inventory) => inventory.department === state.selectedDepartment
      );
    } else {
      filterInventoryList = [...inventories];
    }

    if (state.sortType.length > 0) {
      if (state.sortType === "name") {
        filterInventoryList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sortType === "price") {
        filterInventoryList.sort((a, b) => a.price - b.price);
      } else if (state.sortType === "stock") {
        filterInventoryList.sort((a, b) => a.stock - b.stock);
      }
      //   switch (state.sortType.length > 0) {
      //     case "name": {
      //       return filterInventoryList.sort((a, b) =>
      //         a.name.localeCompare(b.name)
      //       );
      //     }

      //     case "price": {
      //       return filterInventoryList.sort((a, b) => a.price - b.price);
      //     }

      //     case "stock": {
      //       return filterInventoryList.sort((a, b) => a.stock - b.stock);
      //     }

      //     default:
      //       return filterInventoryList;
      //   }
    }
    if (state.checkLowStock) {
      filterInventoryList = [...filterInventoryList].filter(
        (inventory) => inventory.stock <= 10
      );
    }
    return filterInventoryList;
  };
  const filterdInventory = applyFilter(state.inventory);

  return (
    <InventoryContext.Provider value={{ state, dispatch, filterdInventory }}>
      {children}
    </InventoryContext.Provider>
  );
}

export const useInventory = () => useContext(InventoryContext);
export default InventoryProvider;
