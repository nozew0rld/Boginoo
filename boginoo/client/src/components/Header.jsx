import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../context/context";
import { FiLogOut } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function Header() {
  const path = window.location.pathname;
  const { username, Logout } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "35px",
          paddingRight: "50px ",
          paddingTop: "30px",
        }}
      >
        <p
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/works");
          }}
        >
          Хэрхэн ажилдаг вэ?
        </p>
        {username ? (
          <div
            className="username"
            style={{
              display:
                path === "/login" || path === "/signup" ? "none" : "block",
              flexDirection: "row",
              gap: "40px",
              color: "black",
            }}
          >
            <div
              style={{
                display: path === "/" ? "flex" : "none",
                flexDirection: "row",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              {username}
              <FiLogOut
                style={{
                  height: "60px",
                  width: "30px",
                  color: "#02b589",
                  cursor: "pointer",
                  marginTop: "-20px",
                }}
                onClick={() => {
                  Logout();
                  setTimeout(() => {
                    navigate("/login");
                  }, 1000);
                }}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              display:
                path === "/login" || path === "/signup" ? "none" : "block",
            }}
          >
            <button
              style={{
                display: path == "/login" ? "none" : "flex",
                alignItems: " center",
                justifyContent: "center",
                width: "143px",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Нэвтрэх
            </button>
          </div>
        )}
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Header;
