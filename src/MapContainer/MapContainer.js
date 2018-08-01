import React from "react";
import MarkerList from "./MarkerList/MarkerList.js";
import { GoogleApiWrapper } from 'google-maps-react';

const apiKey = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg";

export class MapContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      earthquakes: []
    }
  }
  render() {
    console.log(this.props.earthquakes);
    return (
        <MarkerList google={this.props.google} earthquakes={this.props.earthquakes}/>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer)
