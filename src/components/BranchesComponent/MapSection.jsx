import {React, useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import LTGMarker from '../../assets/ltg-marker.png'
import BranchesData from '../../data/branchesdata'
import './MapSection.css';



const containerStyle = {
    width: '100%',
    height: '70vh',
    position: 'absolute',
  };
  
  const center = {
    lat: 12.117220,
    lng: 122.734444
  };
  
  const options = {
    streetViewControl: false,
    rotateControl: true,
    scaleControl: true,
    zoomControl: false,
    mapTypeControl: false,
    fullscreenControl: true
  }

  

const MapSection = () => {
    const [selectedBranch, setSelectedBranch] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div className="map-container" >
       
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5.8}
          options={options}
        >
          { /* Child components, such as markers, info windows, etc. */}
          <>
            {BranchesData.map((branch) => {
              if (
                !branch.coordinates ||
                !Array.isArray(branch.coordinates) ||
                branch.coordinates.length < 2
              ) {
                return null; 
              }

              return (
                <Marker
                    key={branch.id}
                    position={{
                      lat: branch.coordinates[0],
                      lng: branch.coordinates[1],
                    }}
                    onClick={() => {
                      setSelectedBranch(branch);
                    }}
                    icon={{
                      url: LTGMarker,
                      scaledSize: { height: 40, width: 30 },
                    }}
                  />
                );
              })}
          </>
        
        
          
        </GoogleMap>

        <div className="map-fade"></div>
          

        <div className="branches-card mx-auto text-center">
          <h3 className="text-light display-4">Find a Branch Near You</h3>
          <p className=" fs-5 fw-light text-secondary">From year 2018 a fast growing branches across the Philippines started from 5 branches to {BranchesData.length} branches as of now.</p>
        </div>
      </div>
      
    </LoadScript>
  )
}

export default MapSection