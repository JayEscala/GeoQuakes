import React from "react";
import { Map, Marker } from 'google-maps-react';

const MarkerList = (props) => {
  console.log(props, "This is props");
  const markerList = props.earthquakes.map((earthquake, index) => {
    const title = earthquake.properties.title;
    const name = earthquake.properties.title;
    const latitude = earthquake.geometry.coordinates[1];
    const longitude = earthquake.geometry.coordinates[0];
    console.log(title, name, latitude, longitude);
    return <Marker key={index} title={title} name={name} position={{lat: latitude, lng: longitude}} icon={{
      url: "https://cdn3.iconfinder.com/data/icons/earthquake/500/earthquake-24-512.png",
      anchor: new props.google.maps.Point(32,32),
      scaledSize: new props.google.maps.Size(64,64)
    }}/>
  });
  return (
      <Map google={props.google} style={{width: "400px", height: "400px", position: "relative"}}>
        { markerList }
      </Map>
  );
}

export default MarkerList;
