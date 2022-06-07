import React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap as GoogleMapLib,
} from 'react-google-maps';

const GoogleMap = () => {
  return (
    <>
      <GoogleMapLib
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    </>
  );
};

export default withScriptjs(withGoogleMap(GoogleMap));
