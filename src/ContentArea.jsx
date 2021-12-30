import React, { useState } from 'react';
import './style.css';

var games = ['BGMI', 'PUBG-Global', 'PUBG-Korea', 'PUBG-Mobile'];

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
      {profile === 'Organizer' &&
      priOpt === 'Organize New Match' &&
      secOptl1 === 'Has Entry Fee' &&
      secOptl2 === 'Single Match Format' ? (
        <div>
          <div className="ct-main-header">Select Your Game :</div>
          <div className="ct-sec-header">Available Games</div>
          <div className="ct-card-container">
            {games.map((data) => (
              <div
                key={data}
                onClick={() => gameSelect(data)}
                className={`ct-card bg-blue ${
                  gameCur === data && 'ct-card-active'
                }`}
              >
                {data}
              </div>
            ))}
          </div>
          <div className="ct-final">
            <div onClick={() => confirmGame()} className="ct-card bg-red">
              Confirm
            </div>
            <div onClick={() => cancelGame()} className="ct-card bg-grey">
              Cancel
            </div>
          </div>
        </div>
      ) : (
        <h1>Work in Progress</h1>
      )}
    </div>
  );
}
