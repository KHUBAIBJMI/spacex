import React from "react";
const Blog = (props) => {
  return (
    <div className="bg-dark mb-3 card text-start" style={{ height: "220px" }}>
      <div className="card bg-dark text-light">
        <div className="card-body">
          <h5 className="card-title text-center">{props.mission}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
