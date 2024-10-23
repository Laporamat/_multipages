import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";
import Home from "./Page/Home/Home";
import Todo from "./Page/Todo/Todo";
import Calculator from "./Page/Calculator/Calculator";
import Animation from "./Page/Animation/Animation"; 
import Components from "./Page/Components/Components.JSX";
import Products from "./Page/Products/Products";
import Carts from "./Page/Carts/Carts";
import Login from "./Page/Login/Login";
import Logout from "./Page/Logout/Logout";
import "./index.css";
import { fetchProducts } from "./data/products";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";

const intTab = "home";

function App() {
  const [token, setToken] = useState('x');
  const [role, setRole] = useState('');
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const [tab, setTab] = useState(intTab);

  // Fetch products once when the component mounts
  useEffect(() => {
    const fetchedProducts = fetchProducts();  // Call the function
    setProducts(fetchedProducts);  // Set the products
  }, []);

  useEffect(() => console.log(products), [products]);
  useEffect(() => console.log(carts), [carts]);
  useEffect(() => console.log(setCarts), [setCarts]);

  // Initialize the tab state when the component mounts
  useEffect(() => {
    setTab(intTab);
  }, []);

  // If there's no token, show the login page
  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;  // Pass setToken to the Login component
  } else {
    return (
      <HashRouter>
        <div className="app-container">
          <Routes>
            <Route
              element={
                <Layout
                  tab={tab}
                  setTab={setTab}
                  products={products}
                  carts={carts}
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/components" element={<Components />} />
              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/carts"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
              <Route path="/Logout" element={<Logout />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
