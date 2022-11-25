import React, { useState, useEffect } from "react";
import axios from "axios";
import LaunchItem from "./LaunchItem";
const Launches = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get("https://api.spacexdata.com/v4/launches").then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-light">Launches</h1>
        <div className="row">
          {data.map((response) => {
            return (
              <div className="col-sm-4" key={response.id}>
                <LaunchItem
                  name={response.name}
                  details={response.details}
                  img={response.links.patch.large}
                  id={response.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Launches;
