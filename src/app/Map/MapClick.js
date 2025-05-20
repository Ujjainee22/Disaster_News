"use client";
import { useRouter } from "next/navigation";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect,  useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import styles from "@/app/Map/button.module.css";
// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapClick = ({ data }) => {
    
  const [position, setPosition] = useState(null); // lat/lng
  const [locName, setLocName] = useState(null);   // display name
  const [stateName, setStateName] = useState(null); // state name
  const router = useRouter();

  const disasterName = data?.disaster;
  const stateh = data?.state;
  const dateBefore = data?.before;
  const dateAfter = data?.after;

  useEffect(() => {
    if (!stateh) return;

    const getCoords = async () => {
      try {
        const encodedState = encodeURIComponent(stateh);
        const response = await fetch(`/api/forward?encodedStateh=${encodedState}`);
        const result = await response.json();
         console.log(result);
        if (result.length > 0) {
          const lat = parseFloat(result[0].lat);
          const lng = parseFloat(result[0].lon);
          setPosition([lat, lng]);
          setLocName(result[0].display_name || stateh);
          setStateName(stateh);
        } else {
          console.error("No results found for the given state.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    getCoords();
  }, [stateh]);
  
  
 
  const AreaClick = () => {
    if (stateName && disasterName) {
      console.log("Navigating to mapdata with:", {
        place: stateName,
        name: disasterName,
        before: dateBefore,
        after: dateAfter,
      });
  
      router.push(
        `/mapdata?place=${encodeURIComponent(stateName)}&name=${encodeURIComponent(disasterName)}&before=${encodeURIComponent(dateBefore)}&after=${encodeURIComponent(dateAfter)}`
      );
    }
  };
  

  // 🔍 Zoom the map when position changes
  const ZoomToPosition = () => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.setView(position, 5.47);
      }
  
    }, [position, map]);
    return null;
  };

  return (
    <>
 
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <ZoomToPosition />

      {position && (
        <Marker position={position} icon={customIcon}>
          <Popup>
            <b>Selected Location:</b><br />
            {locName}<br />
            <button className={styles.button} onClick={AreaClick}>Confirm</button>
          </Popup>
        </Marker>
      )}
    </MapContainer>
    
    </>
  );
};

export default MapClick;