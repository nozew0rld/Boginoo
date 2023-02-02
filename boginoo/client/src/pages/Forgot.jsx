import Header from "../components/Header";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
function Forgot() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "70px",
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
        <p className="enter">Нууц үг сэргээх</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
          }}
        >
          <p
            style={{
              width: "230px",
            }}
          >
            Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "30px",
          }}
        >
          <p
            style={{
              paddingLeft: "40px",
            }}
          >
            Цахим хаяг
          </p>
          <input type="text" name="" id="log" placeholder="name@mail.domain" />
        </div>
        <button
          style={{
            alignItems: " center",
            justifyContent: "center",
            width: "381px",
            height: "43px",
            marginTop: "40px",
            cursor: "pointer",
          }}
        >
          Илгээх
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default Forgot;
