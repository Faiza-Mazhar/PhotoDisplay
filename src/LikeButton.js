import React from "react";
export const LikeButton = ({ value, updateLikesCounter, pic }) => {
  return (
    <div>
      <span>
        <button
          onClick={() => {
            let temp = value + 1;
            updateLikesCounter(pic, temp);
          }}
        >
          Like
        </button>
      </span>
    </div>
  );
};
