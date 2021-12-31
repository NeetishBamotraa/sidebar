import React, { useState } from 'react';
import BonusPoint from './BonusPoint';
import KillPoint from './KillPoint';
import PlacePoint from './PlacePoint';
import './mainScreen.css';

export default function MainScreen() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [placePoint, setPlacePoint] = useState(false);
  const [killPoint, setKillPoint] = useState(false);
  const [bonusPoint, setBonusPoint] = useState(false);

  const radioButton1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
    // Back to Normal State
    setPlacePoint(false);
    setKillPoint(false);
    setBonusPoint(false);
  };

  const radioButton2 = () => {
    setIsChecked2(true);
    setIsChecked1(false);
    // Back to Normal State
    setPlacePoint(false);
    setKillPoint(false);
    setBonusPoint(false);
  };

  const placePointHandler = () => {
    setPlacePoint(true);
    setKillPoint(false);
    setBonusPoint(false);
  };

  const killPointHandler = () => {
    setPlacePoint(false);
    setKillPoint(true);
    setBonusPoint(false);
  };

  const bonusPointHandler = () => {
    setPlacePoint(false);
    setKillPoint(false);
    setBonusPoint(true);
  };

  return (
    <div className="mainScreen">
      <div className="mainScreen__topContainer">
        <div className="mainScreen__title">
          <h2 className="mainScreen__titleName">Point System</h2>
          <p className="mainScreen__subTitleName">random text here</p>
        </div>
        <div className="mainScreen__Sections">
          <div className="mainScreen__radioSection">
            <input
              type="radio"
              className="mainScreen__simpleOption"
              checked={isChecked1}
              onChange={radioButton1}
            />
            <label>Simple</label>
            <input
              type="radio"
              className="mainScreen__AdvanceOption"
              checked={isChecked2}
              onChange={radioButton2}
            />
            <label>Advance</label>
          </div>
          <div className="mainScreen__buttonSection">
            <button className="btn btn-outline-success ">Save</button>
            <button className="btn btn-outline-primary ">Edit</button>
            <button className="btn btn-outline-warning ">Preview</button>
          </div>
        </div>
        <div
          className="mainScreen__optionSection"
          hidden={isChecked1 ? false : true}
        >
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={placePointHandler}
          >
            Placement Points
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={killPointHandler}
          >
            Kill Points
          </button>
        </div>
        <div
          className="mainScreen__optionSection"
          hidden={isChecked2 ? false : true}
        >
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={placePointHandler}
          >
            Placement Points
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={killPointHandler}
          >
            Kill Points
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={bonusPointHandler}
          >
            Bonus Points
          </button>
        </div>
      </div>
      <div className="mainScreen__bottomContainer">
        {placePoint ? (
          <div className="mainScreen__placePointSection">
            {/* placePoint Section */} <PlacePoint />
          </div>
        ) : killPoint ? (
          <div className="mainScreen__killPointSection">
            {/* Kill Point Section */} <KillPoint isChecked2={isChecked2} />
          </div>
        ) : isChecked2 && bonusPoint ? (
          <div className="mainScreen__bonusPoint">
            {/* Bonus Point Section */} <BonusPoint />
          </div>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
