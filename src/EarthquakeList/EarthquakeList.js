import React from "react";

const EarthquakeList = (props) => {
  const earthquakeList = props.earthquakes.map((earthquake, index) => {
    return <li key={index}>{earthquake.properties.title}</li>
  });
  return (
      <div>
        <ul>
          {earthquakeList}
        </ul>
      </div>
  );
}

export default EarthquakeList;
