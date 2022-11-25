import React, { useState, useEffect } from "react";
import axios from "axios";
import Crews from "./Crews";
import Spiner from "../Spiner/Spiner";

const Crew = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = () => {
    setLoading(true);
    axios.get("https://api.spacexdata.com/v4/crew").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title mb-0 text-light">Crew</h1>
      {loading && <Spiner />}

      <div className="row">
        {data.map((data) => {
          return (
            <div className="col-sm-3" key={data.id}>
              <Crews
                name={data.name}
                image={data.image}
                agency={data.agency}
                wikipedia={data.wikipedia}
                status={data.status}
                id={data.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crew;
