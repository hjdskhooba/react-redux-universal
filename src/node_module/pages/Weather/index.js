import { getLocation, apiRequest } from "../../actions/weather";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import "./weather.scss";
import Layout from "../../containers/Layout";

const Weather = ({
  defaultLocation,
  getLocation,
  getWeather,
  data,
  isFetching,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeather(
      defaultLocation
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    );
  }, [defaultLocation]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeather(
        inputRef.current.value
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      );
    }
  };

  return (
    <Layout>
      <div className="wrapper">
        <div className="weather h">
          <div className="container">
            <header className={"header-input"}>
              <div>
                <input
                  className={"location-input"}
                  placeholder={"Enter city or country"}
                  onKeyPress={(e) => {
                    handleKeyPress(e);
                  }}
                  ref={inputRef}
                />
                <p className={"observations"}>
                  Press Enter to Send.
                  <br />
                  Try open search in English!
                </p>
              </div>
              {isFetching ? (
                <></>
              ) : (
                <div>
                  <h1 className={"location"}>{data.location.name},</h1>
                  <p className={"region"}>
                    {data.location.region}, {data.location.country}.
                  </p>
                </div>
              )}
            </header>
            {isFetching ? (
              <p className={"loading"}>Loading...</p>
            ) : (
              <main className={"main-data"}>
                <div className={"temperature"}>
                  <p className={"temp"}>{data.current.temp_c}° C</p>
                  <p className={"last-update"}>
                    Updated: {data.current.last_updated}
                  </p>
                </div>
                <div className={"weather"}>
                  <img
                    className={"img"}
                    src={`https://cdn.weatherapi.com/weather/128x128/${
                      data.current.condition.icon.split("/")[5]
                    }/${data.current.condition.icon.split("/")[6]}`}
                    alt={"Weather pic"}
                    width={150}
                    height={150}
                  />
                  <p className={"weather-label"}>
                    {data.current.condition.text}
                  </p>
                </div>
              </main>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    defaultLocation: state.weather.location,
    data: state.weather.data,
    isFetching: state.weather.isFetching,
  };
};

const mapDispatchToProps = {
  getLocation,
  getWeather: apiRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
