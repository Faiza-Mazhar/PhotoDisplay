import React from "react";
import "./App.css";
import { PhotoPanel } from "./PhotoPanel";

function setLikes(pic, value) {
  localStorage.setItem(pic, value);
}

function App(props) {
  
  const [favouritePic, setFavouritePic] = React.useState("None");

  let photoPanels = props.pictures.map((picture, index) => {
    return (
      <PhotoPanel
        {...picture}
        key={index}
        likesCount={Number(localStorage.getItem(picture.pic)) || 0}
        setLikesLocalStorage={setLikes}
        favouritePic={favouritePic}
        setFavouritePic={setFavouritePic}
      />
    );
  });

  return (
    <React.Fragment>
      <h1>Photos</h1>
      {photoPanels}
    </React.Fragment>
  );
}

export default App;
