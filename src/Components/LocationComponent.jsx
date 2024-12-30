import React, { useState, useEffect } from 'react';

const LocationComponent = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: null,
    error: null
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation({
            latitude: lat,
            longitude: lon,
            error: null
          });

          // Reverse geocoding with Nominatim API (OpenStreetMap)
          fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data && data.address) {
                const formattedAddress = `${data.address.road}, ${data.address.city}, ${data.address.country}`;
                setLocation((prev) => ({
                  ...prev,
                  address: formattedAddress
                }));
              } else {
                setLocation((prev) => ({
                  ...prev,
                  error: 'Address not found.'
                }));
              }
            })
            .catch((error) => {
              setLocation((prev) => ({
                ...prev,
                error: 'Error fetching address.'
              }));
            });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            address: null,
            error: error.message
          });
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        address: null,
        error: 'Geolocation is not supported by this browser.'
      });
    }
  }, []);

  return (
    <div>
      <h2>Location Information</h2>
      {location.error ? (
        <p>Error: {location.error}</p>
      ) : location.latitude && location.longitude ? (
        <div>
          <p>
            Latitude: {location.latitude} <br />
            Longitude: {location.longitude}
          </p>
          {location.address && <p>Address: {location.address}</p>}
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
