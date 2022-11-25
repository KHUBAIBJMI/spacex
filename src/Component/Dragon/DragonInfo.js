import React from "react";

const DragonInfo = (props) => {
  return (
    <div style={{ marginTop: "90px" }}>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action bg-dark  text-light"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between bg-dark  text-light">
            <h5 className="mb-1">{props.ceo}</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">{props.description}</p>
          <small>And some small print.</small>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-dark  text-light"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-muted">And some muted small print.</small>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-dark  text-light"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-muted">And some muted small print.</small>
        </a>
      </div>
    </div>
  );
};

export default DragonInfo;
