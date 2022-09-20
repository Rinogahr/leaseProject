import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import myStyle from './MapPage.module.css';

let possition = {
  lat: -8.123310367996895, 
  lng: -34.95778608613493
}
function MapPage() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB5s0fRbWRykQG2ud_ygzzZEXGaxY1rpns"
  });

    return (
      <div className={myStyle.containerMap}>
        <div className={myStyle.mapCombobox}>
          <div className={myStyle.campos}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className={myStyle.googleMapCt}>
          {
            isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={possition}
                zoom={20}
              >
                <Marker
                position={possition}
                options={{
                  label: {
                    text: "Possição Teste",
                    className: myStyle.mapMaker,
                  }
                }}/>
              </GoogleMap>
          ) : <></>

          }
        </div>
      </div>
    );
  }
  



export default MapPage;