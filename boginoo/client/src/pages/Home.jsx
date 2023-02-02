import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineClear } from "react-icons/md";
import { Context } from "../context/context";

function Home() {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const [link, setLink] = useState([]);
  const [short, setShort] = useState("");
  const [orignal, setOrignal] = useState("");
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [show, setShow] = useState("");
  const { userid, checkUpdates, setCheckUpdates } = useContext(Context);

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
      await axios
        .post(
          "http://localhost:9000/link",
          userid
            ? {
                orignalLink: value,
                shortLink: short,
                ownerId: userid?.id,
              }
            : { orignalLink: value, shortLink: short }
        )
        .then((response) => {
          setShort(response.data.data.shortLink);
          setOrignal(response.data.data.orignalLink);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:9000/link/shorts`);
      setLink(res.data.data);
    };
    getData();
  }, [checkUpdates]);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4rem",
          marginBottom: " -200px",
          marginTop: "300px",
        }}
      >
        <Logo />
      </div>
      <div
        style={{
          paddingTop: " 150px",
        }}
      >
        <div>
          <body
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "100px",
              gap: "4rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                paddingTop: "-150px",
              }}
            >
              <div
                style={{
                  width: "581px",
                  height: "43px",
                  borderRadius: "25px",
                  border: "none",
                  border: "1px solid gray",
                  paddingLeft: "2rem",
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                <input
                  type="text"
                  id="pass"
                  value={value}
                  placeholder="https://www.web-huudas.mn"
                  onChange={(e) => {
                    setValue(e.target.value);
                    // setLink(e.target.value);
                  }}
                  style={{
                    marginTop: "5px",
                    width: "800px",
                  }}
                />

                <MdOutlineClear
                  style={{
                    marginTop: "10px",
                    height: "20px ",
                    width: "50px  ",
                  }}
                  className="clear"
                  onClick={clearHandler}
                />
              </div>
              <button
                style={{
                  width: "162px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  Link();
                  setShow(!show);
                  setCheckUpdates(!checkUpdates);
                }}
              >
                Богиносгох
              </button>
            </div>
          </body>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingRight: "500px",
          paddingTop: "50px",
        }}
      >
        <div>
          {userid?.id ? (
            link.map(
              (el) =>
                el.ownerId === userid.id && (
                  <>
                    <div
                      style={{
                        flexDirection: "column",
                        marginRight: "100px",
                      }}
                    >
                      <p className="txt1">Өгөгдсөн холбоос:</p>
                      <p onChange={inputHandler} className="link">
                        {el.orignalLink}
                      </p>
                    </div>
                    <div>
                      <p className="txt1">Богино холбоос:</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "20px",
                        }}
                      >
                        <p value={text} onChange={inputHandler}>
                          http://localhost:3000/{el.shortLink}
                        </p>
                        <p
                          id="copy"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={copy}
                        >
                          Хуулж авах
                        </p>
                      </div>
                      <hr />
                    </div>
                  </>
                )
            )
          ) : (
            <div style={{ display: short ? "flex" : "none" }}>
              <div>
                <div
                  style={{
                    flexDirection: "column",
                    marginRight: "100px",
                  }}
                >
                  <p className="txt1">Өгөгдсөн холбоос:</p>
                  <p onChange={inputHandler} className="link">
                    {orignal}
                  </p>
                </div>
                <div>
                  <p className="txt1">Богино холбоос:</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                    }}
                  >
                    <p value={text} onChange={inputHandler}>
                      http://localhost:3000/{short}
                    </p>
                    <p
                      id="copy"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={copy}
                    >
                      Хуулж авах
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          paddingTop: " 200px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default Home;
