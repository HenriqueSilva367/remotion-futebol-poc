import React from "react";
import { Img, staticFile } from "remotion";

export const CoverDefault: React.FC = () => {

  return (
    <Img
      src={staticFile("/image/Bruno_souza.png")}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
        display: "block",
        margin: "0 auto",
     
        
      }}
    />
  );
};
