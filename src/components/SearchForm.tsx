import React, { useState } from "react";
import { searchArt } from "../services/art-api.service";
import { Art } from "../types/art.type";
import SearchDisplay from "./SearchDisplay";

export default function SearchForm() {
  const [art, setArt] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    searchArt(input).then((response) => {
      setArt(response.data.objectIDs.slice(10, 15));
      console.log("Form submit response: ", response.data.objectIDs);
      return response;
    });
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Enter Keyword</label>
        <input type="text" value={input} onChange={handleChange} />
        <button>Search</button>
      </form>
      {art.map((piece) => (
        <SearchDisplay art={piece} key={piece} />
      ))}
    </div>
  );
}
