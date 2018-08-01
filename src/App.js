import React from "react";
import EarthquakeList from "./EarthquakeList/EarthquakeList.js";
import MapContainer from "./MapContainer/MapContainer.js";

// https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      earthquakes: []
    }
  }
  getEarthquakes = async () => {
    try {
      const data = await fetch("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson");
      const dataJSON = await data.json();
      const earthquakes = await dataJSON.features;
      return earthquakes;
    } catch(err) {
      console.log(err, "Error");
      return err;
    }
  }
  componentDidMount(){
    this.getEarthquakes().then((data) => this.setState({earthquakes: data}));
  }
  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <div id="map">
            <MapContainer earthquakes={this.state.earthquakes}/>
          </div>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            <EarthquakeList earthquakes={this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}

export default App;
