import PropTypes from 'prop-types';
import React from 'react';

import src from '../../static/images/profile.png';

import './PatientDetails.css';

const PatientDetails = props => {
    const { patient } = props;

    if (!patient) {
      return null;
    }

    const { address, age, name, phone } = patient;

    return (
      <div className="details">
        <img
          alt="Profile"
          className="details__image"
          src={src}
        />
        <div className="details__contact-data">
          <div>{name}, {age}</div>
          <div>{phone}</div>
          <div>{address}</div>
        </div>
      </div>
    )
  };

PatientDetails.propTypes = {
  patient: PropTypes.object
};

PatientDetails.defaultProps = {
  patient: undefined
};

export default PatientDetails;
