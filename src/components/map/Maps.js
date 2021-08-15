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

const Map = () => {
  const handleApiLoaded = (map, maps) => {
    const firstArrow = {
      path: maps.SymbolPath.FORWARD_CLOSED_ARROW,
    };
    const secondArrow = {
      path: maps.SymbolPath.FORWARD_CLOSED_ARROW,
    };
    const thirdArrow = {
      path: maps.SymbolPath.FORWARD_CLOSED_ARROW,
    };

    const movePlanCoordinates = [
      { lat: 49.87273364368391, lng: 24.04533003750968 },
      { lat: 49.87395751262089, lng: 24.045040358942607 },
      { lat: 49.87413037299436, lng: 24.046864261094047 },
      { lat: 49.87436719066172, lng: 24.046792512004515 },
      { lat: 49.874426827044545, lng: 24.04713382309396 },
      { lat: 49.87466882900932, lng: 24.04703726357597 },
      { lat: 49.8746308002107, lng: 24.046677847576092 },
    ];
    const movePath = new maps.Polyline({
      path: movePlanCoordinates,
      icons: [
        {
          icon: firstArrow,
          offset: "10%",
        },
        {
          icon: secondArrow,
          offset: "55%",
        },
        {
          icon: thirdArrow,
          offset: "100%",
        },
      ],
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });
    movePath.setMap(map);
  };

  return (
    <div className="map">
      <GoogleMapReact
        onGoogleApiLoaded={({ map, maps }) => {
          handleApiLoaded(map, maps);
        }}
        bootstrapURLKeys={{ key: "AIzaSyAq1jgLdjbxY3bj40CmAowybUOwdfRlPZ4" }}
        defaultCenter={{
          lat: 49.87476,
          lng: 24.04662,
        }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin lat={49.87476} lng={24.04662}></LocationPin>
      </GoogleMapReact>
    </div>
  );
};

export default Map;
