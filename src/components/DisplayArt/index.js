import React from "react";

function DisplayArt(props) {
  const { title, artistDisplay, dateDisplay, image } = props.art;

  return (
    <>
      <img style={{ height: "50vmin" }} src={image} alt={title} />
      <h1>{title}</h1>
      <h2>by {artistDisplay}</h2>
      <h3>Date {dateDisplay}</h3>
    </>
  );
}

export default DisplayArt;
