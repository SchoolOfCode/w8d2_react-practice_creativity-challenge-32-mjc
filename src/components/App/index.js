import "./App.css";

import { useState, useEffect } from "react";

import Input from "../Input";

function App() {
  const [art, setArt] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchArt() {
      if (search === "") {
        return;
      }

      const searchResponse = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${search}&limit=1`
      );
      const searchResults = await searchResponse.json();

      const dataLink = searchResults.data[0].api_link;
      console.log("dataLink", dataLink);

      const response = await fetch(dataLink);
      const artData = await response.json();
      console.log("artData", artData);

      setArt({
        title: artData.data.title,
        artist_display: artData.data.artist_display,
        date_display: artData.data.date_display,
        image: `https://www.artic.edu/iiif/2/${artData.data.image_id}/full/843,/0/default.jpg`,
      });
    }
    fetchArt();
  }, [search]);

  function handleSearchSubmit(text) {
    setSearch(text);
  }

  return (
    <div className="App">
      <Input handleSearchSubmit={handleSearchSubmit} />
      {art ? <code>{JSON.stringify(art)}</code> : <></>}
    </div>
  );
}

export default App;
