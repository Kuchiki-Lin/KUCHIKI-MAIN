import { useMap } from "react-leaflet";
import { useState } from "react";

const RegionSearchInput = () => {
  const [location, setLocation] = useState("");
  const map = useMap(); // access Leaflet map instance

  const handleRegionSearch = async (e) => {
   
    if (!location) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        map.setView([parseFloat(lat), parseFloat(lon)], 6); // zoom level 6 or adjust as needed
      } else {
        alert("Location not found.");
      }
    } catch (err) {
      console.error("Geocoding error:", err);
      alert("Failed to search location.");
    }
  };

  const handleKeyDown = (e) => {
       if (e.key === "Enter") {
      e.preventDefault();
      handleRegionSearch();
    }
   
  };

  return (
    <div className="mb-4">
      <div className="absolute top-4 left-4 z-[1000] bg-white p-2 rounded shadow">

 <input
        type="text"
        placeholder="Enter a location (e.g. Kenya, Spain)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border p-2 mr-2 text-black"
      />
      <button
      type ="button"
        onClick={handleRegionSearch}
        className="bg-blue-600 text-black px-4 py-2 rounded"
      >
        Search
      </button>

      </div>
         </div>
  );
};

export default RegionSearchInput;
