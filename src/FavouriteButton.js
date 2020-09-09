import React from "react";
import { Label } from "./Label";
export const FavouriteButton = ({pic, favouritePic, setFavouritePic}) => {
  let label = favouritePic === pic ? "Favourite" : "Not favourite";
  return (
    <div>
      <button onClick={() => setFavouritePic(pic)}>Set as favourite</button>
      <Label label={label} />
    </div>
  );
};
