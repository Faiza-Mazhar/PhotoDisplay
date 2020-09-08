import React from 'react';
import { Label } from './Label';
import { Image } from './Image';
export const PhotoPanel = ({ pic, label }) => {
  return (<div>
    <Image pic={pic} label={label} />
    <Label label={label} />
  </div>
  );
};
