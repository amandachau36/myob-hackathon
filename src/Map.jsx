import React, { Component } from 'react';

class Map extends Component {

  render(){
    return(
      <div className="map">
        <p className="left-align">Supply Chain Map</p>
        <img src= { this.props.map } alt="map" />

      </div>
    )
  }


}



export default Map;
