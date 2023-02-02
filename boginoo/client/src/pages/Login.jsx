import React from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";
import { useState, useContext } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const {
    setUsername,
    setEmail,
    setPassword,
    navigate,
    email,
    Loginn,
    userid,
  } = useContext(Context);
  const [pass, setPass] = useState(true);
  // const notify = () => {
  //   toast.success("amjilttai newterlee", {
  //     position: "top-right",
  //     autoClose: 2,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: false,
  //     progress: 2,
  //     theme: "colored",
  //   });
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     userid?.id ? (window.location.href = "/") : console.log("no user");
  //   }, 1500);
  // }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="enter">Нэвтрэх</p>
        <div>
          <p
            style={{
              paddingLeft: "30px",
            }}
          >
            Цахим хаяг
          </p>
          <input
            type="text"
            name=""
            id="log"
            placeholder="name@mail.domain"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <p
            style={{
              paddingLeft: "30px",
            }}
          >
            Нууц үг
          </p>
          <div id="log">
            <input
              type={`${pass ? "password" : "text"}`}
              name=""
              id="pass"
              placeholder="••••••••••"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {pass ? (
              <AiOutlineEyeInvisible
                style={{
                  height: "25px",
                  width: "25px",
                }}
                onClick={() => setPass(!pass)}
              />
            ) : (
              <AiOutlineEye
                style={{
                  height: "25px",
                  width: "25px",
                }}
                onClick={() => setPass(!pass)}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "20px",
              gap: "150px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: " 5px",
                color: " #02B589",
              }}
            >
              <input
                type="checkbox"
                id="check"
                style={{
                  cursor: "pointer",
                }}
              />
              <p>Намайг сана</p>
            </div>
            <p
              className="pass"
              onClick={() => {
                navigate("/forgot");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              Нууц үгээ мартсан
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                width: "383px",
                height: "43px",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                Loginn();
                setUsername(email);
              }}
            >
              Нэвтрэх
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              color: "#02B589",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            <p
              onClick={() => {
                navigate("/sign");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              Шинэ хэрэглэгч бол энд дарна уу?
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Login;
