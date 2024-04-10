// import React from 'react';
// import L from 'leaflet';
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: markerIcon.src,
//   iconRetinaUrl: markerIcon2x.src,
//   shadowUrl: markerShadow.src,
// });

// const Map = () => {
//     const position = [51.505, -0.09]
//     return (
//         <MapContainer
//             center={[51.505, -0.09]}
//             zoom={13}
//             scrollWheelZoom={false}
//             className="h-[70vh] rounded-lg mt-4 shadow-md border-2 border-neutral-400"
//         >
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position}>
//                 <Popup>
//                     A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>
//         </MapContainer>
//     )
// }

// export default Map;
