import React, { useEffect, useState } from "react";
import { getObjects, getSingleObject } from "../services/art-api.service";
import { Art } from "../types/art.type";

export default function DisplayResults() {
  const [data, setData] = useState();
  const [artPiece, setArtPiece] = useState<Art>({
    artistDisplayName: "",
    title: "",
    primaryImageSmall: "",
  });

  useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    getObjects().then((response) => {
      setData(response.data);
      return response;
    });
  }

  function callSingleObject() {
    getSingleObject(43713).then((response) => {
      setArtPiece(response.data);
      return response;
    });
  }

  return (
    <div>
      DisplayResults
      <button onClick={callSingleObject}>Call Single Result</button>
      <div>
        <h2>{artPiece.title}</h2>
        <p>{artPiece.artistDisplayName}</p>
        <img src={artPiece.primaryImageSmall} alt="" />
      </div>
    </div>
  );
}
