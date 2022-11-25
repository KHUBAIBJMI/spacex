import React, { useEffect, useState } from "react";
import axios from "axios";
import LandPadItems from "./LaunchPadItems";
import Spiner from "../Spiner/Spiner";
const Launchpad = () => {
  const [data, setData] = useState([]);
const [isLoading,setisLoading]=useState(false)
  const fetchData = () => {
    setisLoading(true);
    axios.get("https://api.spacexdata.com/v4/launchpads").then((response) => {
      console.log(response.data);
      setData(response.data);
      setisLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container text-center">
      <h1 className="my-1 text-light">LaunchPad</h1>
      <div className="row">
        {isLoading&&<Spiner />}

        {data.map((data) => {
          return (
            <div className="col-sm-4 my-2" key={data.id}>
              <LandPadItems name={data.name} image={data.images.large} fullName = {data.full_name} description={data.details}
              id = {data.id}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Launchpad;
