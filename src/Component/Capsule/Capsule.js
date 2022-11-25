import React, { useEffect, useState } from "react";
import Capsules from "./Capsules";
import axios from "axios";
import Page404 from "../Page404";
const Capsule = () => {
  const [data, setData] = useState([]);
  const [errorMessage, seterrorMessage] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((response) => {
        //   console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        seterrorMessage(error.message);
      });
  }, []);
  return (
    <div>
      {errorMessage === "Request failed with status code 404" ? (
        <Page404 />
      ) : (
        <div className="container my-2">
          <h1 className="text-light">Capsules</h1>
          <div className="row">
            {data.map((res, index) => {
              return (
                <div className="col-sm-4 mb-0" key={index}>
                  <Capsules
                    key={res.capsule_serial}
                    capsule_serial={res.capsule_serial}
                    type={res.type}
                    details={
                      res.details === null
                        ? "Reentered after three weeks in orbit"
                        : res.details
                    }
                    landings={res.landings}
                    capsule_id={res.capsule_id}
                    reuse_count={res.reuse_count}
                    status={res.status}
                    original_launch={res.original_launch}
                    name={
                      res.missions.length >= 2
                        ? null
                        : res.missions.map((nam) => {
                            return (
                              <div>
                                {nam.name}
                                <p>flight= {nam.flight}</p>
                              </div>
                            );
                          })
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Capsule;
