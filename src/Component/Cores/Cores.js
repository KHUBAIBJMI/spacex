import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CoresItem from "./CoresItem";
import Spiner from "../Spiner/Spiner"
const Cores = () => { 
    const [isLoading, setisLoading]= useState(false)
  const [data, setData] = useState([]);
  useEffect(() => {
    setisLoading(true);
    axios.get("https://api.spacexdata.com/v4/cores").then((res) => {
      setData(res.data);
      setisLoading(false)
    });
  }, []);
  return (
    <div className="container">
      <h1 className="title text-center text-light">Cores</h1>
      <div className="row">
        {isLoading && <Spiner />}
        {data.map((res) => {
          return (
            <div className="col-sm-3 my-3" key={res.id}>
              <CoresItem
                reuse_count={res.reuse_count}
                block={res.block}
                rtls_attempts={res.rtls_attempts}
                serial = {res.serial}
                status = {res.status}
                rtls_landings = {res.rtls_landings}
                last_update = {res.last_update}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cores;
