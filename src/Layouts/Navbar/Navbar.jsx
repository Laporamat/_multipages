import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ products, carts, setToken }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar-container">
      {/* ปุ่ม Home */}
      <button
        className={`btn btn-light ${location.pathname === "/home" ? "active" : ""}`}
        onClick={() => navigate("/home")}
      >
        Home
      </button>
      
      {/* ปุ่ม Calculator */}
      <button
        className={`btn btn-light ${location.pathname === "/calculator" ? "active" : ""}`}
        onClick={() => navigate("/calculator")}
      >
        Calculator
      </button>
      
      {/* ปุ่ม Animation */}
      <button
  className={`btn btn-light ${location.pathname === "/animation" ? "active" : ""}`}
  onClick={() => navigate("/animation")}
>
  Animation
</button>

      
      {/* ปุ่ม Components */}
      <button
        className={`btn btn-light ${location.pathname === "/components" ? "active" : ""}`}
        onClick={() => navigate("/components")}
      >
        Components
      </button>
      
      {/* ปุ่ม Todo */}
      <button
        className={`btn btn-light ${location.pathname === "/todo" ? "active" : ""}`}
        onClick={() => navigate("/todo")}
      >
        Todo
      </button>
      
      {/* ปุ่ม Products */}
      <button
        className={`btn btn-light ${location.pathname === "/products" ? "active" : ""}`}
        onClick={() => navigate("/products")}
      >
        Products ({products.length})
      </button>
      
      {/* ปุ่ม Carts */}
      <button
        className={`position-relative btn btn-light ${location.pathname === "/carts" ? "active" : ""}`}
        onClick={() => navigate("/carts")}
      >
        Carts
        {carts.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carts.length < 10 ? carts.length : "9+"}
            <span className="visually-hidden">unread messages</span>
          </span>
        )}
      </button>
      
      {/* ปุ่ม Logout */}
      <button
        className={`btn btn-danger ${location.pathname === "/Logout" ? "active" : ""}`}
        onClick={() => {
          setToken(''); // เปลี่ยนค่าของ token เป็น ''
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
