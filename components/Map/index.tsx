import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import classes from "./style.module.css";

const icon = new L.Icon({
  iconUrl: "/images/marker.svg",
  iconRetinaUrl: "/images/marker.svg",
  popupAnchor: [-0, -0],
  iconSize: [32, 45],
});

type Location = { position: [number, number]; popup: string };
const locations: Location[] = [
  {
    position: [6.130146147824744, 1.21965663838397],
    popup:
      "Nukafu, Rue en face de la Direction Générale de la SOTRAL, Immeuble MENSANH",
  },
  {
    position: [5.361751473668265, -3.966645700165504],
    popup: "Cocody Ambassades, A57 Rue du Bélier, Villa COLOMB, Côte d'Ivoire",
  },
  {
    position: [6.381290106127091, 2.4022043499737644],
    popup: "Cité vie nouvelle, Benin",
  },
];

const Map = () => {
  const renderMarkers = locations.map((location) => (
    <Marker
      position={location.position}
      icon={icon}
      key={location.position.join("&")}
    >
      <Popup>{location.popup}</Popup>
    </Marker>
  ));

  return (
    <section className={classes.map + " mb-4"}>
      <MapContainer
        center={[9.200382343837804, 2.271176556264672]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers}
      </MapContainer>
    </section>
  );
};

export default Map;
