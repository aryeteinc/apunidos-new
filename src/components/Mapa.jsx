import React from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Mapa({text}){
  const defaultProps = {
    center: {
      lat: 10.94745902354954,
      lng: -74.99581896506079, 
    },
    zoom: 10.5
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDZD5XEhI7ncbLlA-GpHLR-DZKnRD2lc3k" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <AnyReactComponent
          lat={10.94745902354954}
          lng={-74.99581896506079}
          text= {<div class="text-sm w-10 h-10 bg-red-600 text-white p-0 text-center rounded-full">{text}</div>}
        />
      </GoogleMapReact>
    </div>
  );
}