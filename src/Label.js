import React from 'react';
export const Label = ({ label }) => {
  return (
    <div>
      <p>{label}</p>
    </div>
  );
};

Label.defaultProps = {
  label : "A bee and flower"
}

// Label.propTypes = {
//   label: PropTypes.string
// }
