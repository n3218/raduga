import React from "react"

import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import "./googleMap.scss"

const GoogleMap = props => {
  const style = {
    width: "100%",
    height: "500px"
  }
  return (
    <div className="google-map-container">
      <Map
        google={props.google}
        zoom={18}
        initialCenter={{
          lat: 37.7314865,
          lng: -121.92877
        }}
        style={style}
      >
        <Marker
          position={{
            lat: 37.7314865,
            lng: -121.92877
          }}
          title="9260 Alcosta Blvd San Ramon, Contra Costa County 94583 USA"
        />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDP2njKxwxWcf29YtZ7mSRZF40Rur2jeDo"
})(GoogleMap)
