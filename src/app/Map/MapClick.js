"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "@/app/Map/button.module.css";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Position anchor
  popupAnchor: [1, -34], // Popup position
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapClick = () => {
  const [position, setPosition] = useState(null);// for latitude and longitude
  const [locName, setLocName] = useState(null);// for location
  const [stateName, setStateName] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const disasterName = searchParams.get("name"); // Get disaster name from URL

  //alert("from mapclick"+Language);
  //if((disasterName))
 // alert(disasterName);
  // Function to fetch location name
  async function getLocationName(lat, lng) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      console.log(data);
      let state="";
      if(data.address.city)
         state = data.address.city;
      
        else
          state=data.address.state;
      setStateName(state);
      console.log(state);
      if (data && data.display_name) {
        setLocName(data.display_name);
      } else {
        setLocName("Unknown location");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setLocName("Error fetching location");
    }
  }

  // Click handler inside a separate component
  const LocationMarker = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;

        // Define India's bounding box
        const minLat = 6.0;
        const maxLat = 37.0;
        const minLng = 68.0;
        const maxLng = 97.0;

        // Check if click is inside India
        if (lat < minLat || lat > maxLat || lng < minLng || lng > maxLng) {
          alert("Click inside India only!");
          return;
        }

        console.log("Clicked Coordinates:", lat, lng);
        setPosition([lat, lng]);
        getLocationName(lat, lng);
      },
    });

    const AreaClick = (stateN) => {
      router.push(`/Api?place=${encodeURIComponent(stateN)}&name=${encodeURIComponent(disasterName)}`);

    };
    return position ? (
      <Marker position={position} icon={customIcon}>
        <Popup>
          <b>Selected Location:</b> <br />
          {locName} <br />
          <button className={styles.button} onClick={() => AreaClick(stateName)}>Confirm</button>
        </Popup>
      </Marker>
    ) : null;
  };

  return (
    <>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
};

export default MapClick;