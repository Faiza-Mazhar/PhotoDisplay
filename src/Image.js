import React from 'react';
export const Image = ({ pic, label }) => {
  return (
    <div>
      <img src={pic} alt={label} className='image' />
    </div>
  );
};