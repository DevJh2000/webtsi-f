import React, { Component } from "react";
import Link from "next/link";

class LinkNavbar extends Component {
  render() {
    return (
      <div className="others-options">
        <Link href="/">
          <a className="default-btn">
            Ir a Pagina X <i className="bx bx-log-in-circle"></i>
          </a>
        </Link>
      </div>
    );
  }
}
export default LinkNavbar;
