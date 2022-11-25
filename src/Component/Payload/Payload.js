import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import PayloadsItems from "./PayloadsItems";
const Payload = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get("https://api.spacexdata.com/v4/payloads")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container text-light">
      <h1>Payloads</h1>
      <div className="row">
        {data.map((data) => {
          return (
            <div className="col-sm-3 xs-2 my-1 mx-0" key={data.id}>
              <PayloadsItems
                customers={data.customers}
                name={data.name}
                nationalities={data.nationalities}
                type={data.type}
                reused={data.reused}
                manufacturers={data.manufacturers}
                mass={data.mass_kg}
                raan={data.raan}
                orbit={data.orbit}
                reference_system={data.reference_system}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Payload;
