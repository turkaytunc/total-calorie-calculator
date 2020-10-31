import React, { useState } from 'react';
import { initialState } from '../../util/initialState';

export const InputRenderer = () => {
  const [mesurements, setMesurements] = useState(initialState);

  return (
    <div>
      <div className="label-container">
        <label htmlFor="gender" className="mesurements-label">
          Gender:{' '}
        </label>
        <label htmlFor="age" className="mesurements-label">
          Age:{' '}
        </label>
        <label htmlFor="height" className="mesurements-label">
          Height:{' '}
        </label>
        <label htmlFor="weight" className="mesurements-label">
          Weight:{' '}
        </label>
      </div>
      <div className="select-gender">
        <input
          checked={mesurements.gender === 'male'}
          value="male"
          type="radio"
          name="gender"
          id="gender-male"
        />
        <input
          checked={mesurements.gender === 'female'}
          value="female"
          type="radio"
          name="gender"
          id="gender-female"
        />
      </div>
    </div>
  );
};
