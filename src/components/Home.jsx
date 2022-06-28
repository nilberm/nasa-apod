import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="HomeButton">
      <Link to="/nasaphoto" className="btn">
        Click to see
      </Link>
    </div>
  );
}
