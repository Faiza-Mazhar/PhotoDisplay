import React from 'react';
export const Image = ({ pic, label }) => {
  return (
    <div>
      <img src={pic} alt={label} className='image' />
    </div>
  );
};

Image.defaultProps = {
  pic : "./images/bee.jpg",
  label: "A bee and flower"
}

// Image.propTypes = {
// pic: PropTypes.string.isRequired,
// label: PropTypes.string
// }