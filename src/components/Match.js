import React, { useState } from 'react';
import './Match.css';

const Match = () => {
  const [dropdown, setdropdown] = useState('');
  const [mode, setmode] = useState('');
  const [squad, setsquad] = useState('');
  const [duo, setduo] = useState('');
  const [solo, setsolo] = useState('');
  const [custom, setcustom] = useState('');
  const [normal, setnormal] = useState({
    map: '',
    Tpp: '',
    Room_name: '',
  });

  const [advance, setadvance] = useState({
    map: '',
    Tpp: '',
    Room_name: '',
    sound_visualization: '',
    open_door: '',
    auto_pick: '',
    Red_zone: '',
    Aim_assist: '',
    sniffer_rifl: '',
    Assault_riffle: '',
    Shotgun: '',
    SMG: '',
    Crossbaw: '',
    Throwoble: '',
    helmetlv1: '',
    helmetlv2: '',
    helmetlv3: '',
    bagpacklv1: '',
    bagpacklv2: '',
    bagpacklv3: '',
    scope: '',
    Magazine: '',
    Muzzle: '',
    Foregrip: '',
    Health_Reacovery_items: '',
    Energy_drink: '',
    Fual: '',
    Outfits: '',
    Ammo: '',
  });

  const eventH = (e) => {
    e.preventDefault();
  };

  const Squad = () => {
    function onChange(e) {
      e.preventDefault();
      setsquad(e.target.value);
    }
    return (
      <>
        <div className="squad">
          <input
            type="Numder"
            min="1"
            max="25"
            placeholder="numder of teams"
            value={squad}
            onChange={onChange}
          />
          <p> Total Player : {squad * 4} </p>
        </div>
      </>
    );
  };
  const Duo = () => {
    function onChange(e) {
      e.preventDefault();
      setduo(e.target.value);
    }

    return (
      <>
        <div className="squad">
          <input
            type="Numder"
            placeholder="numder of teams"
            value={duo}
            onChange={onChange}
          />
          <p> Total Player : {duo * 2} </p>
        </div>
      </>
    );
  };
  const Solo = () => {
    return (
      <>
        <div className="squad">
          <input
            type="Numder"
            placeholder="total players"
            value={solo}
            onChange={(e) => {
              setsolo(e.target.value);
            }}
          />
        </div>
      </>
    );
  };

  const ModeChange = () => {
    if (mode === 'Squad') {
      return <Squad />;
    } else if (mode === 'Duo') {
      return <Duo />;
    } else {
      return <Solo />;
    }
  };
  // custom room
  const CustomRoom = () => {
    if (custom === 'Normal') {
      return <Normal />;
    } else if (custom === 'Advance') {
      return <Advance />;
    } else {
      return <Esports />;
    }
  };

  const Normal = () => {
    const normalData = (e) => {
      const value = e.target.value;
      const name = e.target.name;

      setnormal({ ...normal, [name]: value });
    };

    return (
      <>
        <div className="Normal">
          <label htmlFor=""> Map </label>
          <select name="map" value={normal.map} onChange={normalData}>
            <option>Select the Map </option>
            <option value="Erangel ">Erangel </option>
            <option value="Miramar">Miramar</option>
            <option value="Vikendi">Vikendi</option>
            <option value="Sanhok">Sanhok</option>
          </select>

          <br />
          <select name="Tpp" onChange={normalData} value={normal.Tpp}>
            <option value="TPP">TPP </option>
            <option value="FPP">FPP</option>
          </select>

          <input
            type="text"
            name="Room_name"
            placeholder="enter the room name"
            value={normal.Room_name}
            onChange={normalData}
          />
        </div>
      </>
    );
  };

  const Advance = () => {
    const advanceData = (e) => {
      const value = e.target.value;
      const name = e.target.name;

      setadvance({ ...advance, [name]: value });
    };
    return (
      <>
        <label htmlFor=""> Map </label>
        <select name="map" value={advance.map} onChange={advanceData}>
          <option>Select the Map </option>
          <option value="Erangel ">Erangel </option>
          <option value="Miramar">Miramar</option>
          <option value="Vikendi">Vikendi</option>
          <option value="Sanhok">Sanhok</option>
        </select>

        <br />
        <select name="Tpp" onChange={advanceData} value={advance.Tpp}>
          <option value="TPP">TPP </option>
          <option value="FPP">FPP</option>
        </select>

        <input
          type="text"
          name="Room_name"
          placeholder="enter the room name"
          value={advance.Room_name}
          onChange={advanceData}
        />
        <br />
        <hr />
        <div className="Parameter">
          <h4>Parameters</h4>
          <label> playZone shrink speed </label>
          <input type="numder" placeholder="(0.9 -1.2)" />
          <br />

          <select
            name="sound_visualization"
            onChange={advanceData}
            value={advance.sound_visualization}
          >
            <option> sound_visualization</option>
            <option value="on">on </option>
            <option value="off">off</option>
          </select>

          <select
            name="open_door"
            onChange={advanceData}
            value={advance.open_door}
          >
            <option> Auto open_door</option>
            <option value="on">on </option>
            <option value="off">off</option>
          </select>

          <select
            name="auto_pick"
            onChange={advanceData}
            value={advance.auto_pick}
          >
            <option> auto_pick</option>
            <option value="on">on </option>
            <option value="off">off</option>
          </select>
          <select
            name="Red_zone"
            onChange={advanceData}
            value={advance.Red_zone}
          >
            <option> Red_zone</option>
            <option value="on">on </option>
            <option value="off">off</option>
          </select>
          <select
            name="Aim_assist"
            onChange={advanceData}
            value={advance.Aim_assist}
          >
            <option> Aim_assist</option>
            <option value="on">on </option>
            <option value="off">off</option>
          </select>
        </div>
        <br />
        <hr />
        <h4> weapons </h4>
        <div className="Weapon">
          <div className="top">
            <label> sniffer_rifler </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.sniffer_rifl}
            />
            <label> Assault Riffle </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Assault_riffle}
            />
            <label>Shotguns </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Shotgun}
            />
          </div>
          <div className="bottom">
            <label> SMG </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.SMG}
            />
            <label> Crossbow </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Crossbaw}
            />
            <label> Throwoble</label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Throwoble}
            />
          </div>
        </div>
        <br />
        <hr />
        <h4>Equip</h4>
        <div className="Equip">
          <div className="top">
            <label> Backpack lv1 </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.bagpacklv1}
            />
            <label> Backpack lv2 </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.bagpacklv2}
            />
            <label> Backpack lv3 </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.bagpacklv3}
            />
          </div>
          <div className="bottom">
            <label> halmet lv1 </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.helmetlv1}
            />
            <label> halmet lv2 </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.helmetlv2}
            />
            <label> halmet lv3 </label>
            <input
              type="numder"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.helmetlv3}
            />
          </div>
        </div>
        <br />
        <hr />
        <h4> Attachment </h4>
        <div className="Attachment">
          <div className="top">
            <label> scope</label>
            <input
              type="text"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.scope}
            />
            <label> Magzine </label>
            <input
              type="text"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Magazine}
            />
          </div>
          <div className="bottom">
            <label> muzzle </label>

            <input
              type="text"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Muzzle}
            />
            <label> Foregrip</label>
            <input
              type="text"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Foregrip}
            />
          </div>
        </div>
        <br />
        <hr />
        <h4> Consumables</h4>
        <div className="Consumables">
          <div className="top">
            <label> Health Reacovery items </label>
            <input
              type="text"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Health_Reacovery_items}
            />
            <label> Energy Drinks </label>
            <input
              type="text"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Energy_drink}
            />
          </div>
          <div className="bottom">
            <label> Fual </label>
            <input
              type="text"
              placeholder="0-3"
              onChange={advanceData}
              value={advance.Fual}
            />
          </div>
        </div>
        <br />
        <hr />
        <h4>Other</h4>
        <div className="other">
          <label> Outfits</label>
          <input
            type="text"
            placeholder="0-3"
            onChange={advanceData}
            value={advance.Outfits}
          />
          <label> Ammo </label>
          <input
            type="text"
            placeholder="0-3"
            onChange={advanceData}
            value={advance.Ammo}
          />
        </div>
      </>
    );
  };

  const Esports = () => {
    return (
      <>
        <p>Comming soon................</p>
      </>
    );
  };

  return (
    <>
      {/*   this is for drop down  levels  */}
      <div className="main">
        <form onSubmit={eventH}>
          <div className="level">
            <p> Levels</p>
            <select
              id="dropdown"
              onChange={(e) => {
                setdropdown(e.target.value);
              }}
            >
              <option value="T1">T1</option>
              <option value="T2">T2</option>
              <option value="T3">T3</option>
              <option value="T4">T4</option>
            </select>
          </div>
          <br />
          <br />

          <hr />
          {/* mode checking */}
          <div className="Mode">
            <section
              onChange={(e) => {
                setmode(e.target.value);
              }}
            >
              <h4> Mode </h4>
              <input type="radio" value="Squad" name="mode" /> Squad
              <input type="radio" value="Duo" name="mode" /> Duo
              <input type="radio" value="solo" name="mode" /> solo
              <br />
            </section>
            <ModeChange />
          </div>
          <br />

          <hr />

          <div className="Custom">
            <section
              onChange={(e) => {
                setcustom(e.target.value);
              }}
            >
              <h4>Custom Room</h4>
              <input type="radio" value="Normal" name="customRomm" /> Normal
              Room
              <input type="radio" value="Advance" name="customRomm" /> Advance
              Room
              <input type="radio" value="Esports" name="customRomm" /> Esports
              Room
              <br />
            </section>
            <CustomRoom />
          </div>
        </form>
      </div>
    </>
  );
};

export default Match;
