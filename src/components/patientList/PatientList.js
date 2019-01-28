import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import './PatientList.css';

class PatientList extends Component {

  render() {
    const { patients, onPatientSelect } = this.props;

    if (!patients.length) {
      return null; 
    }

    return (
      <Fragment>
        <h2>Patients</h2>
        {/* <h2>Patients</h2>
        
        <ul className="list">
          {patients.map(patient => {
            const { id, name } = patient;

            return (
              <li 
                className="list__item" 
                key={id}
                onClick={onPatientSelect}
              >
                {name}
              </li>
            );
          })}
        </ul> */}
      </Fragment>
    );
  }
};

PatientList.propTypes = {
  onPatientSelect: PropTypes.func,
  patients: PropTypes.array
};

PatientList.defaultProps = {
  onPatientSelect: undefined,
  patients: []
};

export default PatientList;
