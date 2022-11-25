import React, { useState, useEffect } from "react";
import axios from "axios";
import ShipsItems from "./ShipsItems";

const Ships = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get("https://api.spacexdata.com/v4/ships").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1 className="title text-light my-2">Ships</h1>
      <div className="row">
        {data.map((ship) => {
          return (
            <div className="col-sm-3" key={ship.id}>
              <ShipsItems
                image={ship.image}
                home_port={ship.home_port}
                name={ship.name}
                id={ship.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ships;
