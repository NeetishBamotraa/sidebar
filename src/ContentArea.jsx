import React, { useState } from 'react';
import './style.css';

var games = [
  ['BGMI', 'bgmi'],
  ['PUBG-Global', 'pubg global'],
  ['PUBG-Korean', 'pubg korean'],
  ['PUBG-Mobile', 'pubg pc'],
];

export default function ContentArea({
  theme,
  profile,
  priOpt,
  secOptl1,
  secOptl2,
  rtStateChange,
}) {
  const [gameCur, setgameCur] = useState('');

  const gameSelect = (game) => {
    setgameCur(game);
  };

  const confirmGame = () => {
    rtStateChange(true, gameCur);
  };

  const cancelGame = () => {
    rtStateChange(false, '');
  };
  return (
    <div className={`ct-theme-${theme}`}>
      <div>
        <div className="ct-main-header">Select Your Game :</div>
        <div className="ct-sec-header">Available Games</div>
        <div className="ct-card-container">
          {games.map((data) => (
            <div
              key={data}
              onClick={() => gameSelect(data[0])}
              className={`ct-card ${gameCur === data[0] && 'ct-card-active'}`}
            >
              <img
                src={`https://www.github.com/NeetishBamotraa/sidebar/blob/master/public/images/${data[1]}.jpg?raw=true"`}
              />
              <div>{data[0]}</div>
            </div>
          ))}
        </div>
        <div className="ct-final">
          <div onClick={() => confirmGame()} className="ct-cardop bg-red">
            Confirm
          </div>
          <div onClick={() => cancelGame()} className="ct-cardop bg-grey">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
