import React from "react";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div className="container my-5" style={{ marginTop: "90px" }}>
      <div className= "text-light my-3"> not Found Page404</div>
      <Link to="/">back To Home page</Link>
    </div>
  );
};

export default Page404;
