import "./App.css";

import { useState, useEffect } from "react";

import Input from "../Input";
import DisplayArt from "../DisplayArt";
import FavList from "../FavList";

function App() {
  const [art, setArt] = useState();
  const [search, setSearch] = useState("");
  const [favList, setFavList] = useState([]);

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
        artistDisplay: artData.data.artist_display,
        dateDisplay: artData.data.date_display,
        image: `https://www.artic.edu/iiif/2/${artData.data.image_id}/full/843,/0/default.jpg`,
      });
    }
    fetchArt();
  }, [search]);

  function handleSearchSubmit(text) {
    setSearch(text);
  }

  function handleAddToFavList(artObj) {
    setFavList([...favList, artObj]);
  }

  return (
    <div className="App">
      <div>
        {art ? <DisplayArt art={art} addFav={handleAddToFavList}></DisplayArt> : <></>}
        <Input handleSearchSubmit={handleSearchSubmit} />
      </div>

      <div>
        <FavList favList={favList} />
      </div>
    </div>
  );
}

export default App;
