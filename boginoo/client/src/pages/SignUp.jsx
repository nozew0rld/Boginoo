import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { Context } from "../context/context";
import { useContext } from "react";

function Main2() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const [user, setUser] = useState("");

  const { signupSuccess, passMatch, loggedIn } = useContext(Context);
  const SignUp = async (req, res) => {
    if (email || password) {
      if (password === passCheck) {
        try {
          const success = await axios.post(
            "http://localhost:9000/user/createUser",
            {
              name: name,
              email: email,
              password: password,
            }
          );

          if (success.data !== "already logged in") {
            setUser(success.data?.user);
            signupSuccess();
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          } else {
            loggedIn();
          }
        } catch (error) {
          alert(error);
        }
      } else {
        passMatch();
      }
    } else {
      alert("fill out following information");
    }
  };
  const [pass, setPass] = useState(true);
  const [verify, setVerify] = useState(true);
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
        <p
          className="enter "
          style={{
            marginRight: "35px",
          }}
        >
          Бүртгүүлэх
        </p>
        <div>
          <div>
            <p
              style={{
                paddingLeft: "30px",
              }}
            >
              Хэрэглэгчийн нэр
            </p>
            <input
              type="text"
              name=""
              id="log"
              placeholder="username"
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
            />
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
                console.log(email);
              }}
            />
          </div>
          <div>
            <p
              style={{
                paddingLeft: "30px",
                marginTop: "30px",
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
          </div>
        </div>
        <div>
          <p
            style={{
              paddingLeft: "30px",
              marginTop: "30px",
            }}
          >
            Нууц үгээ давтна уу?
          </p>
          <div id="log">
            <input
              type={`${verify ? "password" : "text"}`}
              name=""
              id="pass"
              placeholder="••••••••••"
              onChange={(e) => {
                setPassCheck(e.target.value);
              }}
            />
            {verify ? (
              <AiOutlineEyeInvisible
                style={{
                  height: "25px",
                  width: "25px",
                }}
                onClick={() => setVerify(!verify)}
              />
            ) : (
              <AiOutlineEye
                style={{
                  height: "25px",
                  width: "25px",
                }}
                onClick={() => setVerify(!verify)}
              />
            )}
          </div>
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
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              SignUp();
            }}
          >
            Бүртгүүлэх
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main2;
