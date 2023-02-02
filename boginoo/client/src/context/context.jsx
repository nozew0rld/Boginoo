import axios from "axios";
import React, { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext({});

export function Provider({ children }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [userid, setUserid] = useState("");
  const [checkUpdates, setCheckUpdates] = useState(false);
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [show, setShow] = useState("");
  const clearHandler = () => {
    setValue("");
  };
  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(`http://localhost:3000/${short}`);
  };
  const Link = async (req, res) => {
    try {
      const res = await axios
        .post("http://localhost:9000/link", {
          orignalLink: link,
          ownerId: userid?.id,
        })
        .then((response) => {
          setShort(response.data.data.shortLink);
          setOrignal(response.data.data.orignalLink);
        });
    } catch (error) {}
  };
  const notify = () => {
    toast.success("Амжилттай нэвтэрлээ", {
      position: "top-right",
      autoClose: 2,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: 2,
      theme: "colored",
    });
  };
  const myError = () => {
    toast.error("Email эсвэл нууц үг буруу байна", {
      position: "top-right",
      autoClose: 2,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: 2,
      theme: "colored",
    });
  };
  const signupSuccess = () => {
    toast.success("Амжилттай бүртгэгдлээ", {
      position: "top-right",
      autoClose: 2,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: 2,
      theme: "colored",
    });
  };
  const Logout = () => {
    toast.info("Амжилттай гарлаа", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const passMatch = () => {
    toast.error("Password тохирохгүй байна", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const loggedIn = () => {
    toast.error("Бүртгэлттэй хаяг байна", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const Loginn = async (req, res) => {
    try {
      const res = await axios.post("http://localhost:9000/user/login", {
        email: email,
        password: password,
      });
      console.log(res);
      setUserid(res.data);
      setUser(res?.data?.user);
      notify();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      myError();
    }
  };

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        navigate,
        userid,
        setUserid,
        checkUpdates,
        setCheckUpdates,
        links,
        setLinks,
        value,
        setValue,
        link,
        setLink,
        links,
        setLinks,
        text,
        setText,
        orignal,
        setOrignal,
        show,
        setShow,
        //function,
        loggedIn,
        Logout,
        signupSuccess,
        passMatch,
        clearHandler,
        inputHandler,
        Loginn,
      }}
    >
      {children}
    </Context.Provider>
  );
}
