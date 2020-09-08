import React from 'react';
export const Image = ({ pic, label }) => {
  return (
    <div>
  
      <img src={require(`${pic}`)} alt={label} className='image' />
    </div>
  );

};