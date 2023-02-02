import React from "react";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "6em",
      }}
    >
      <p>Made with ♥️ by Pinecone Academy</p>
      <p style={{ color: "gray" }}>©boginoo.io 2023</p>
    </footer>
  );
}

export default Footer;
