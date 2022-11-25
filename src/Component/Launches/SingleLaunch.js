import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import spacex from "../../Image/spacex1.jpeg";
const SingleLaunch = () => {
  const [launchs, setLaunchs] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((response) => {
        setLaunchs(response.data);
      });
  }, [id]);
  let date = new Date(launchs.date_local);

  return (
    <div>
      <div className="container text-light text-start my-5">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <h6> Launch Date : {date.toString()}</h6>
                <p>Flight Number : {launchs.flight_number}</p>
                <p
                  className={
                    launchs.success === false ? "text-danger" : "text-success"
                  }
                >
                  success :
                  {launchs.success === false ? "Not success" : "success"}
                </p>
                <p
                  className={
                    launchs.upcoming === false ? "text-danger" : "text-success"
                  }
                >
                  upcoming : {launchs.active === true ? "Yes" : "No"}
                </p>
                <a
                  href={
                    launchs.links === undefined
                      ? "hello"
                      : launchs.links.article
                  }
                  type="button"
                  className="btn btn-outline-light btn-md"
                >
                  article
                </a>
                <a
                  href={
                    launchs.links === undefined
                      ? "hello"
                      : launchs.links.webcast
                  }
                  type="button"
                  className="btn btn-outline-light btn-md mx-2"
                >
                  Wactch Launch youtube
                </a>

                <a
                  href={
                    launchs.links === undefined
                      ? "hello"
                      : launchs.links.wikipedia
                  }
                  type="button"
                  className="btn btn-outline-light btn-md mx-2"
                >
                  Wiki
                </a>
                <Link
                  to="/launches"
                  type="button"
                  className="btn btn-outline-light btn-md my-2"
                >
                  Back
                </Link>
              </div>

              <div className="col-sm-6">
                <p>
                  Recovery attempts :
                  {launchs.recovery_attempt === false
                    ? "Not Reacoverd"
                    : "Recoverd"}
                </p>
                <p>
                  Ships :{" "}
                  {launchs.ships === undefined
                    ? "spacex"
                    : launchs.ships.length}
                </p>
                <p>Window:{launchs.window === false ? "false" : "true"}</p>
                <small className="text-light">
                  Auto Update : {launchs.auto_update === true ? "true" : null}
                </small>
                <div></div>
              </div>
            </div>
            <p className="card-text text-light my-3">{launchs.details}</p>
          </div>

          <div className="col-sm-4">
            <img
              src={
                launchs.links === undefined
                  ? { spacex }
                  : launchs.links.patch.large
              }
              className="img-fluid"
              alt="..."
            />
            <h1 className="card-text text-light m-4 mx-5">
              <small className="text-light text-center mx-5">
                {launchs.name}
              </small>
            </h1>
          </div>
          {/* </div> */}
          <div>
            <p calssName="h7 text-start">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLaunch;
