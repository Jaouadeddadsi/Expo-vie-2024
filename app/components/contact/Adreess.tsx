"use client";

import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

//
const Adreess = () => {
  const position = { lat: 34.008541358944505, lng: -6.842659472576261 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string}>
      <div className="h-full w-full">
        <Map
          center={position}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
          defaultZoom={16}
          gestureHandling={"greedy"}
        >
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default Adreess;
