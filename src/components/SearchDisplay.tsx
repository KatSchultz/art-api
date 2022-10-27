import React, { useEffect, useState } from "react";
import { getSingleObject } from "../services/art-api.service";
import { Art } from "../types/art.type";

interface Props {
  art: number;
}

export default function SearchDisplay({ art }: Props) {
  const [artPiece, setArtPiece] = useState<Art>({
    artistDisplayName: "",
    title: "",
    primaryImageSmall: "",
  });

  useEffect(() => {
    callSingleObject(art);
  }, []);

  function callSingleObject(art: number) {
    getSingleObject(art).then((response) => {
      setArtPiece(response.data);
      return response;
    });
  }
  return (
    <div>
      <h2>{artPiece.title}</h2>
      <p>{artPiece.artistDisplayName}</p>
      <img src={artPiece.primaryImageSmall} alt="" />
    </div>
  );
}
