import React from "react";
import "./App.css";
import { PhotoPanel } from "./PhotoPanel";

function setLikes(pic, value) {
  localStorage.setItem(pic, value);
}

function App(props) {

  function setFavouritePic(value) {
    console.log(value);
    setFavourite(value);
  }
  
  const [favouritePic, setFavourite] = React.useState("./images/bee.jpg");

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
