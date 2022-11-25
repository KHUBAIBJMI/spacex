import React, { useState, useEffect } from "react";
import axios from "axios";
import LandPadItem from "./LandPadItem";
import Spiner from "../Spiner/Spiner"
const Landpads = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading]= useState(false);
  const fetchData = () => {
    setisLoading(true);
    axios.get("https://api.spacexdata.com/v4/landpads").then((res) => {
      setData(res.data);
      setisLoading(false)
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container ">
      <h1 className="mb-0 text-light card-title">Landpads</h1>
      <div className="row">
        {isLoading && <Spiner />}
        {data.map((data) => {
          return (
            <div className="col-sm-4" key={data.id}>
              <LandPadItem
                key={data.id}
                name={data.name}
                full_name={data.full_name}
                status={data.status}
                images={data.images.large}
                details={data.details}
                id={data.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landpads;
