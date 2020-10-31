import React, { useState } from 'react';
import { initialState } from '../../util/initialState';
import './input-renderer.scss';

export const InputRenderer = () => {
  const [mesurements, setMesurements] = useState(initialState);

  const handleGenderChange = (e) =>
    setMesurements({ ...mesurements, gender: e.target.value });

  const handleAgeChange = (e) =>
    setMesurements({ ...mesurements, age: e.target.value });

  const handleHeightChange = (e) =>
    setMesurements({ ...mesurements, height: e.target.value });
  const handleWeightChange = (e) =>
    setMesurements({ ...mesurements, weight: e.target.value });

  return (
    <div className="container">
      <div className="label-container">
        <label htmlFor="select-gender" className="mesurements-label">
          Gender
        </label>
        <label htmlFor="age" className="mesurements-label">
          Age
        </label>
        <label htmlFor="height" className="mesurements-label">
          Height
        </label>
        <label htmlFor="weight" className="mesurements-label">
          Weight
        </label>
      </div>
      <div className="input-container">
        <div className="select-gender">
          <label htmlFor="gender-male">
            Male
            <input
              className="gender-input"
              checked={mesurements.gender === 'male'}
              value="male"
              type="radio"
              name="gender"
              id="gender-male"
              onChange={(e) => handleGenderChange(e)}
            />
          </label>
          <label htmlFor="gender-female">
            Female
            <input
              className="gender-input"
              checked={mesurements.gender === 'female'}
              value="female"
              type="radio"
              name="gender"
              id="gender-female"
              onChange={(e) => handleGenderChange(e)}
            />
          </label>
        </div>

        <input
          max={20}
          min={15}
          type="number"
          className="select-age input-item"
          value={mesurements.age}
          onChange={(e) => handleAgeChange(e)}
        />
        <input
          max={220}
          min={100}
          type="number"
          className="select-height input-item"
          value={mesurements.height}
          onChange={(e) => handleHeightChange(e)}
        />
        <input
          max={200}
          min={30}
          type="number"
          className="select-weight input-item"
          value={mesurements.weight}
          onChange={(e) => handleWeightChange(e)}
        />
      </div>
    </div>
  );
};
