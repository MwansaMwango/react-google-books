import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
        background:
          "url(https://images.unsplash.com/photo-1503028316171-99a6b1e535df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
