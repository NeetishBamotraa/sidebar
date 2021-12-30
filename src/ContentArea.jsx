import React, { useState } from 'react';
import './style.css';
import bgmi from "./images/pubg pc.jpg"

var games = ['BGMI', 'PUBG-Global', 'PUBG-Korean', 'PUBG-Mobile'];

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
      {/* {profile === 'Organizer' &&
      priOpt === 'Organize New Match' &&
      secOptl1 === 'Has Entry Fee' &&
      secOptl2 === 'Single Match Format' ? ( */}
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
              <img src={bgmi} />
              <div>{data}</div>
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
      {/* // ) : (
      //   <h1 style={{ color: `${theme === 'dark' ? 'white' : 'black'}` }}>
      //     Work in Progress
      //   </h1>
      )} */}
    </div>
  );
}
