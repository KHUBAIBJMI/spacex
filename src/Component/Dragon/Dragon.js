import React, { useState, useEffect } from "react";
import axios from "axios";
import Spiner from "../Spiner/Spiner";
import Dragons from "./Dragons";
const Dragon = () => {
  //api calling
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios.get("https://api.spacexdata.com/v3/dragons").then((response) => {
      console.log(response.data);
      setData(response.data);
      setisLoading(false);
    });
  }, []);
  return (
    <div className="container text-start">
      <div className="row">
        {isLoading && <Spiner />}
        {data.map((data) => {
          return (
            <>
              <div className="col-sm-6" key={data.name}>
                <Dragons
                  name={data.name}
                  type={data.type}
                  active={data.active}
                  crew_capacity={data.crew_capacity}
                  mass={data.dry_mass_kg}
                  first_flight={data.first_flight}
                  wikipedia={data.wikipedia}
                  description={data.description}
                  size={data.heat_shield.size_meters}
                  img={data.flickr_images}
                  dev_partner={data.heat_shield.dev_partner}
                  material={data.heat_shield.material}
                  temp_degree={data.heat_shield.temp_degrees}
                  launch_payload_mass={data.launch_payload_mass}
                  pressurized_capsule={
                    data.pressurized_capsule.payload_volume.cubic_meters
                  }
                  return_payload_mass={data.return_payload_mass.kg}
                />
              </div>
              <div className="col-sm-6 my-5" style={{ marginTop: "110px" }}>
                <img
                  src={data.flickr_images}
                  className="card-img-top img-fluid"
                  alt="..."
                  style={{ height: "400px", marginTop: "90px" }}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dragon;
