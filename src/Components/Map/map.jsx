

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 34.766146769374494,
      lng: -84.97184487599671 
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '90%', }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
         markers={[
          { lat: 34.766146769374494,
            lng: -84.97184487599671 }]}
        
      >
        <AnyReactComponent
          lat={34.766146769374494}
          lng={-84.97184487599671 }
          text="My Marker"
          markers={[
            { lat: 34.766146769374494,
              lng: -84.97184487599671 }]}
        />
      </GoogleMapReact>
    </div>
  );
}
