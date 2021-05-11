import React from "react";
import GoogleMapReact from "google-map-react";
import { ReactComponent as Merloin } from "../../assets/icons/merlion_logo.svg";
import "./style.scss";

const LocationPin = () => {
  return (
    <div className="marker">
      <Merloin className="map-icon" />
      <p>вул.Плугова,10</p>
    </div>
  );
};

const Map = (props) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{
          lat: 49.87476,
          lng: 24.04662,
        }}
        defaultZoom={15}
      >
        <LocationPin lat={49.87476} lng={24.04662}></LocationPin>
      </GoogleMapReact>
    </div>
  );
};

export default Map;

//position={{ lat: 49.87476, lng: 24.04662 }}
//apiKey: "AIzaSyDliXP_byC-fAf61B3EMeC2Cw-FRm7Yz-Q",
