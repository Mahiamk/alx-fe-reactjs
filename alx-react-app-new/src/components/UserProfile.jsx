// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';
const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p style={{ fontWeight: 'bold'}}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string
};

export default UserProfile;

