import React from 'react';
export const LikeButton = ({ value, setCount, setLikesLocalStorage, pic }) => {
  return (<div>
    <span>
      <button onClick={() => {
        let temp = value + 1
        setCount(temp);
        setLikesLocalStorage(pic, temp);
      }}>
        Like
      </button>
    </span>
  </div>
  );
};
