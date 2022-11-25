import React, { useState, useEffect } from "react";
import axios from "axios";
import RoacketsItems from "./RoacketsItems";
import Spiner from "../Spiner/Spiner"
const Rockets = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(0);
  const [isLoading,setLoading] = useState(false)
  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://api.spacexdata.com/v4/rockets")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const changeNextState = () => {
    if (image <= 0) {
      setImage(image + 1);
    }
  };
  const changePrevState = () => {
    if (image > 0 || image === 1) {
      setImage(image - 1);
    }
  };
  return (
    <div className="container">
      <div className="row">
        {isLoading && <Spiner />}
        {data.map((res) => {
          return (
            // <div key={res.id}>
            <>
              <div className="col-sm-6">
                <RoacketsItems
                  name={res.name}
                  description={res.description}
                  active={res.active}
                  boosters={res.boosters}
                  company={res.company}
                  cost={res.cost_per_launch}
                  country={res.country}
                  diameter={res.diameter.meters}
                  engines={res.engines.engine_loss_max}
                  number={res.engines.number}
                  type={res.engines.type}
                  first_flight={res.first_flight}
                  version={res.engines.version}
                  mass={res.mass.kg}
                  first_stage={res.first_stage.burn_time_sec}
                  fstageEngines={res.first_stage.engines}
                  fuel_amount_tons={res.first_stage.fuel_amount_tons}
                  secondStageBurnTime={res.second_stage.burn_time_sec}
                  SecondStageengines={res.second_stage.engines}
                  secondStageFuelAmout={res.second_stage.fuel_amount_tons}
                  secondReuse={res.second_stage.reusable}
                  wikipedia={res.wikipedia}
                />
              </div>
              <div className="col-sm-6 my-5">
                {/* <!-- Carousel wrapper --> */}
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide carousel-fade"
                  data-mdb-ride="carousel"
                >
                  {/* <!-- Slides --> */}
                  <div className="carousel-inner mb-5">
                    <div className="carousel-item active">
                      <img
                        src={res.flickr_images[image]}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide="prev"
                    onClick={changePrevState}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide="next"
                    onClick={changeNextState}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Rockets;
