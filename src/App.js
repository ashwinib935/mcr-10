import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Departments from "./pages/Departments/Departments";
import Products from "./pages/Products/Products";
import NewInventory from "./component/NewInventory/NewInventory";
import ProductDetail from "./component/ProductDetail/ProductDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newInventory" element={<NewInventory />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
