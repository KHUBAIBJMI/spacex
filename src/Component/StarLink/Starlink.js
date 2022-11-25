import React, { useState, useEffect } from "react";
import axios from "axios";
import StarLinkItem from "./StarLinkItem";
// import Page404 from "../Page404";
const Starlink = () => {
  const [data, setData] = useState([]);
  const [showPerPage, SetshowPerPage] = useState(12);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState({
    start: 0,
    end: showPerPage,
  });

  useEffect(() => {
    // console.log(pageCount + 1);
    const value = showPerPage * pageCount;
    onPagination(value - showPerPage, value);
  }, [pageCount]);
  const fetchData = () => {
    axios
      .get(`https://api.spacexdata.com/v4/starlink`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const nextPage = () => {
    console.log(pageCount + 1);
    setPageCount(pageCount + 1);
  };
  const prevPage = () => {
    console.log(pageCount - 1);
    setPageCount(pageCount - 1);
  };
  const onPagination = (start, end) => {
    // console.log(start, end);s
    setPage({ end: end, start: start });
  };
  return (
    <div
      className="conatiner my-5 text-light text-start mx-5 justify-content-center"
      style={{ width: "90%", marginLeft: "400px" }}
    >
      <div className="row m-5 align-items-center justify-content-end">
        {data.slice(page.start, page.end).map((data) => {
          return (
            <div className="col-md-3 my-3" key={data.id}>
              <StarLinkItem
                name={data.spaceTrack.OBJECT_NAME}
                version={data.version}
                description={data.spaceTrack.COMMENT}
                date={data.spaceTrack.DECAY_DATE}
                ldate={data.spaceTrack.LAUNCH_DATE}
                centerName={data.spaceTrack.CENTER_NAME}
                ORIGINATOR={data.spaceTrack.ORIGINATOR}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          className={`btn btn-primary ${page.start <= 0 ? "disabled" : ""}`}
          onClick={prevPage}
        >
          Previous
        </button>

        <button className="btn btn-primary" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Starlink;
