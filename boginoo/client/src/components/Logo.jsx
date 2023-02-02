import React from "react";
import { useNavigate } from "react-router-dom";
function Logo() {
  const path = window.location.pathname;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <div className="logo">
        <img
          src="/img/left.png"
          alt=""
          style={{ height: "40px", width: "30px" }}
        />
        <div className="mid">
          <img
            src="/img/middle.png"
            alt=""
            style={{ height: "10px", width: "30px" }}
          />
        </div>
        <img
          src="/img/right.png"
          alt=""
          style={{ height: "40px", width: "30px" }}
        />
      </div>
      <img src="/img/Boginoo.png" alt="" style={{ marginTop: "20px" }} />
    </div>
  );
}

export default Logo;
