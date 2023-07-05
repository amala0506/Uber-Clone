import { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "mapbox-gl";
const Map = (props) => {
  const [timeOfTheDay, setTimeOfTheDay] = useState("day");
  const [coordinates, setCoordinates] = useState({
    long: 0,
    lat: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });
      });
    }
    new Date().getHours() >= 18
      ? setTimeOfTheDay("night")
      : setTimeOfTheDay("day");
  }, []);

  mapboxgl.accessToken =
    "pk.eyJ1IjoidGhlLWFyY2hpdGVjdCIsImEiOiJjbDM5dWQ2eDgwZGg0M2JuM3U1dHFpOG5oIn0.9ZaM8FaBogA6tXvH-MXajw";
  const addMarker = (map, loc) => {
    const marker = new mapboxgl.Marker().setLngLat(loc).addTo(map);
  };
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style:
        timeOfTheDay == "day"
          ? "mapbox://styles/mapbox/navigation-day-v1"
          : "mapbox://styles/mapbox/navigation-night-v1",
      center: [coordinates.long, coordinates.lat],
      zoom: 9,
    });
    if (props.start && props.end) {
      if (props.start == "myLocation") {
        props.getMyLoc(coordinates,"start");
        addMarker(map, [coordinates.long, coordinates.lat]);
      } else {
        addMarker(map, props.start);
      }
      if (props.end == "myLocation") {
        props.getMyLoc(coordinates,"end");
        addMarker(map, [coordinates.long, coordinates.lat]);
      } else {
        addMarker(map, props.end);
      }
      map.fitBounds([(props.start == "myLocation")?[coordinates.long, coordinates.lat]:props.start, (props.end == "myLocation")?[coordinates.long, coordinates.lat]:props.end], { padding: 60 });
    }
  }, [coordinates, props]);
  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
flex-1
`;
export default Map;
