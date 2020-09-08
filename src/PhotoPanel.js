import React from 'react';
import { Label } from './Label';
import { Image } from './Image';
import { LikeButton } from './LikeButton';

export const PhotoPanel = ({ pic, label, likesCount, setLikesLocalStorage}) => {
  const [count, setCount] = React.useState(likesCount);
  return (<div>
    <Image pic={pic} label={label} />
    <Label label={label} />
    <LikeButton 
      value = {count} 
      setCount = {setCount} 
      setLikesLocalStorage = {setLikesLocalStorage} 
      pic = {pic}/>
    <Label label = {count} />
  </div>
  );
};


