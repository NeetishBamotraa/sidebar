import React from 'react';
import Card from './Card';
import './BonusPoint.css';

export default function BonusPoint() {
  const isDifferent = true;

  return (
    <div className="bonusPoint">
      <div className="bonusPoint__container">
        <div className="bonusPoint__titleSection">
          <h3 className="bonusPoint__title">Bonus Points</h3>
        </div>
        <div className="bonusPoint__cardsSection">
          <div className="bonusPoint__cards">
            <button className="btn btn-outline-primary ">Select</button>
            <p className="bonusPoint__cardName">Knockout Point</p>
            <span className="bonusPoint__cardDivider" />
            <div className="bonusPoint__vertical">
              <p className="bonusPoint__pointVertical">Point</p>
              <div className="bonusPoint__inputSection">
                <input
                  type=""
                  placeholder="1 Knockout"
                  readOnly
                  className="bonusPoint__inputPointointVertical"
                />
                <span>=</span>
                <input type="number" className="bonusPoint__pointNumbers" />
                <p className="bonusPoint__point">Point</p>
              </div>
            </div>

            <span className="bonusPoint__cardDivider" />

            <div className="bonusPoint__vertical">
              <p className="bonusPoint__bonusPoint">Bonus Point</p>
              <div className="bonusPoint__inputSection">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    more than 5
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">more than 5</li>
                    <li className="dropdown-item">more then 8</li>
                    <li className="dropdown-item">more then 10</li>
                  </ul>
                </div>
                <span>=</span>
                <input
                  type="number"
                  className="bonusPoint__bonusPointNumbers"
                />
                <p>Point</p>
              </div>
            </div>
            <button className="btn btn-primary">Expand/ Collapse</button>
          </div>
        </div>

        <Card
          title="Damage Points"
          value1="1000-1500"
          value2="1500-2000"
          value3="2000+"
        />
        <Card
          title="Revive Points"
          value1="1000-1500"
          value2="1500-2000"
          value3="2000+"
        />
        <Card
          title="Damaged Received Points"
          value1="1000-1500"
          value2="1500-2000"
          value3="2000+"
        />
        <Card
          title="Survival Time Points"
          value1="10-15 min"
          value2="15-20 min"
          value3="20+ min"
        />

        {/* 1 FEILD */}
        <div className="bonusPoint__cardsSection">
          <div className="bonusPoint__cards">
            <button className="btn btn-outline-primary ">Select</button>
            <p className="bonusPoint__cardName">Clutch Point</p>

            <div className="bonusPoint__vertical">
              <span className="bonus__more">1v4 Clutch</span>
              <div className="bonusPoint__inputSection">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    1
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">1</li>
                    <li className="dropdown-item">2</li>
                    <li className="dropdown-item">3</li>
                  </ul>
                </div>
                <p className="bonus__subTitle">Clutch =</p>
                <input
                  type="number"
                  className="bonusPoint__pointNumbers"
                />{' '}
                Points
              </div>
            </div>
            <div className="bonusPoint__vertical">
              <span className="bonus__more">1v3 Clutch</span>
              <div className="bonusPoint__inputSection">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    1
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">1</li>
                    <li className="dropdown-item">2</li>
                    <li className="dropdown-item">3</li>
                  </ul>
                </div>
                <p className="bonus__subTitle">Clutch = </p>
                <input
                  type="number"
                  className="bonusPoint__pointNumbers"
                />{' '}
                Points
              </div>
            </div>
            <button className="btn btn-primary">Expand/ Collapse</button>
          </div>
        </div>

        {/*  8 FEILDS */}

        <Card
          isDifferent={isDifferent}
          title="Grenade Kill Points"
          subTitle="Grenade Kill"
        />
        <Card
          isDifferent={isDifferent}
          title="Sniping Kill Point"
          subTitle="Sniper Kill"
        />
        <Card
          isDifferent={isDifferent}
          title="Crossbow Kill Point"
          subTitle="Crossbow Kill"
        />
        <Card
          isDifferent={isDifferent}
          title="Shotgun Kill Point"
          subTitle="Shotgun Kill"
        />
        <Card
          isDifferent={isDifferent}
          title="Pistol Kill Point"
          subTitle="Pistol Kill"
        />
        <Card
          isDifferent={isDifferent}
          title="Pan Kill Point"
          subTitle="Pan Kill"
        />
        <Card
          isDifferent={isDifferent}
          title="Fist Kill Point"
          subTitle="Fist Kill"
        />
        <Card
          isDifferent={isDifferent}
          title="Vehical Kill Point"
          subTitle="Vehical Kill"
        />

        {/* 2 FEILD */}
        <div className="bonusPoint__cardsSection">
          <div className="bonusPoint__cards">
            <button className="btn btn-outline-primary ">Select</button>
            <p className="bonusPoint__cardName">Flare Gun Point</p>
            <div className="bonusPoint__inputSection">
              <span className="bonusPoint__single">1</span>
              <p className="bonus__subTitle">Flare Gun Loot =</p>
              <input type="number" className="bonusPoint__pointNumbers" />{' '}
              Points
            </div>
            <button className="btn btn-primary">Expand/ Collapse</button>
          </div>
        </div>

        <div className="bonusPoint__cardsSection">
          <div className="bonusPoint__cardsBottom">
            <button className="btn btn-outline-primary ">Select</button>
            <p className="bonusPoint__cardName">Airdrop Loot Point</p>
            <div className="bonusPoint__inputSection">
              <span className="bonusPoint__single">1</span>
              <p className="bonus__subTitle">Airdrop Loot =</p>
              <input type="number" className="bonusPoint__pointNumbers" />{' '}
              Points
            </div>
            <button className="btn btn-primary">Expand/ Collapse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
