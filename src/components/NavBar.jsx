import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="Nav">
      <Link to="/" className="btn">
        Return Home
      </Link>
    </div>
  );
}
