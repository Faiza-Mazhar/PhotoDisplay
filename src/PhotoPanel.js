import React from "react";
import { Label } from "./Label";
import { Image } from "./Image";
import { LikeButton } from "./LikeButton";
import { FavouriteButton } from "./FavouriteButton";

export const PhotoPanel = ({
  pic,
  label,
  likesCount,
  setLikesLocalStorage,
  favouritePic,
  setFavouritePic,
}) => {
  const [count, setCount] = React.useState(likesCount);

  return (
    <div>
      <Image pic={pic} label={label} />
      <Label label={label} />
      <LikeButton
        value={count}
        setCount={setCount}
        setLikesLocalStorage={setLikesLocalStorage}
        pic={pic}
      />
      <Label label={count} />

      <FavouriteButton
        pic={pic}
        favouritePic={favouritePic}
        setFavouritePic={setFavouritePic}
      />
    </div>
  );
};


