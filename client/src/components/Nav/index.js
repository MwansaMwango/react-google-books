
import React from "react";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" style={{color: "yellow", fontSize: "1.5rem"}} href="/">
      Book Googler
      </a>     
      <a className="navbar-brand" href="/">
          Search
      </a>
      <a className="navbar-brand" href="/saved">
          Saved
      </a>
    </nav>
  )
}

export default Nav;
