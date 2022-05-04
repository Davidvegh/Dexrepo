import { useState, useCallback } from 'react';
import './App.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox'
/* import '@react/combobox/styles.css' */

import { mapStyle } from './mapStyle/mapStyle';

const libr = ['places']
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
}
const center = {
  lat: 47.497913,
  lng: 19.040236,
}

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
}

function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libr
  })

  const [markers, setMarkers] = useState([])

  const onMapClick = useCallback(
    (event) => {
      setMarkers(current => [...current, {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
      }])
    }, [])

  if (loadError) return 'Error laoding maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div className="App">
      <h1 className='abs'>Event<span role='img'>🧍</span></h1>
      <GoogleMap
        className='googlemaps'
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: '/person-svgrepo-com.svg',
              scaledSize: new window.google.maps.Size(25,25),
              origin: new window.google.maps.Point(0,0),
              anchor: new window.google.maps.Point(15, 15)
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default App;
