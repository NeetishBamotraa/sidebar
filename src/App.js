import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Menu, Dropdown, Button, Layout } from 'antd';
import {
  DownOutlined,
  UserOutlined,
  AliyunOutlined,
  SearchOutlined,
  BellOutlined,
  DownSquareOutlined,
} from '@ant-design/icons';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import dashboardData from './data.js';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Collapse from '@mui/material/Collapse';

const menudata = [
  'Gamer',
  'Organizer',
  'Team Owner',
  'Content creator',
  'Buyer and Seller',
  'Service Provider',
  'Investor & Investment',
];

export default function App() {
  const [ddState, setDDState] = useState('Gamer');
  const [secSDcss, setsecSDcss] = useState(['sec-sidebar hide-sec', 'emp']);
  const [theme, setTheme] = useState('dark');
  const [SDsize, setSDsize] = useState('long');
  const [subKey, setsubKey] = useState([-1, false]);
  const [secDataState, setsecDataState] = useState(['level1', false]);

  useEffect(() => {
    let color = theme === 'light' ? 'white' : 'black';
    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';
  }, [theme]);

  function handleMenuClick(e) {
    setsecSDcss(['sec-sidebar hide-sec', 'emp']);
    setDDState(e.domEvent.target.innerText);
  }
  const menu = (
    <Menu
      style={{
        backgroundColor: `${theme === 'dark' ? 'grey' : 'rgb(59, 188, 240)'}`,
        border: '1px solid white',
      }}
      onClick={handleMenuClick}
    >
      {menudata.map((data, keyV) => (
        <Menu.Item key={keyV} icon={<UserOutlined />}>
          {data}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleMSidebarBtn = (data, keyV) => {
    let sidebar = document.getElementsByClassName('sidebar-sub-items');

    for (let i = 0; i < sidebar.length; i++) {
      if (
        i === keyV &&
        sidebar[i].classList.contains('sidebar-sub-items-active')
      ) {
        sidebar[i].classList.remove('sidebar-sub-items-active');
      } else if (i === keyV) {
        sidebar[i].classList.add('sidebar-sub-items-active');
      } else {
        sidebar[i].classList.remove('sidebar-sub-items-active');
      }
    }
    if (secSDcss[1] === 'emp') {
      setsecSDcss(['sec-sidebar show-sec', data]);
    } else if (secSDcss[1] === data) {
      setsecSDcss(['sec-sidebar hide-sec', 'emp']);
    } else if (secSDcss[1] !== data) {
      //update the data in sec sidebar
      setsecSDcss(['sec-sidebar show-sec', data]);
    }
  };

  const handleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const handlePrimarySize = () => {
    if (SDsize === 'long') setSDsize('short');
    else setSDsize('long');
  };

  const handleCSidebar = (keyV) => {
    if (keyV === subKey[0]) {
      setsubKey([-1, false]);
    } else {
      setsubKey([-1, false]);
      setsubKey([keyV, true]);
    }
  };

  const handleSecL1 = (val) => {
    if (secDataState[0] === val) setsecDataState(['level1', false]);
    else setsecDataState([val, true]);
  };

  return (
    <div className={theme}>
      <div className="navbar">
        <div className="left-nav-header">
          <div className={`sidebar-logo-${theme}`}>
            <AliyunOutlined />
          </div>
        </div>
        <div className="right-nav-header">
          <div onClick={handleTheme} className={`theme-logo-${theme}`}>
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </div>
          <div>
            <Dropdown overlay={menu}>
              <Button
                style={{
                  backgroundColor: `${
                    theme === 'dark' ? 'black' : 'rgb(65, 100, 240)'
                  }`,
                  color: 'white',
                }}
              >
                {ddState}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="navbar-search">
            <input
              className={`nb-srh-in-${theme}`}
              type="text"
              placeholder="Search..."
            />
            <div className="navbar-search-button">
              <SearchOutlined />
            </div>
          </div>
          <div className="bell-icon">
            <BellOutlined />
          </div>
          <div className="navbar-bar">|</div>
          <div className="navbar-user-continer">
            <div className="user-img"></div>
            <div className={`user-data-${theme}`}>
              <h3>User Name</h3>
              <div>other data</div>
            </div>
            <div>
              <DownSquareOutlined />
            </div>
          </div>
        </div>
      </div>

      <div onClick={handlePrimarySize} className={`sidebar-arrow-${SDsize}`}>
        {SDsize === 'long' ? <ArrowCircleLeftIcon /> : <ArrowCircleRightIcon />}
      </div>

      <div
        // onMouseEnter={() => handlePrimarySize('long')}
        // onMouseLeave={() => handlePrimarySize('short')}
        className={`sidebar sidebar-${SDsize}`}
      >
        {dashboardData[ddState] &&
          dashboardData[ddState]['Level1'].map((data, keyV) => (
            <div className="sidebar-main-items" key={keyV}>
              <div
                onClick={() => handleCSidebar(keyV)}
                className="sidebar-items"
              >
                <span className="sidebar-items-img">{data[0]}</span>
                {SDsize === 'long' && (
                  <span className="sidebar-items-text">{data[1]}</span>
                )}
                {SDsize === 'long' && keyV === subKey[0] && (
                  <span className="sidebar-items-arrow">
                    <ArrowDropDownIcon />
                  </span>
                )}
                {SDsize === 'long' && keyV !== subKey[0] && (
                  <span className="sidebar-items-arrow">
                    <ArrowLeftIcon />
                  </span>
                )}
              </div>

              <Collapse in={subKey[1]} unmountOnExit>
                {subKey[0] === keyV &&
                  data[2].map((newdata) => {
                    return (
                      <div
                        className="sidebar-sub-items"
                        key={newdata[2]}
                        onClick={() =>
                          handleMSidebarBtn(newdata[1], newdata[2])
                        }
                        // onMouseEnter={() =>
                        //   handleMSidebarBtn(newdata[1], newdata[2])
                        // }
                      >
                        <div className="sidebar-sub-items-img">
                          {newdata[0]}
                        </div>
                        {SDsize === 'long' && (
                          <span className="sidebar-sub-items-text">
                            {newdata[1]}
                          </span>
                        )}
                      </div>
                    );
                  })}
              </Collapse>
            </div>
          ))}
      </div>

      <div
        // onMouseEnter={() => handlePrimarySize('short')}
        className={
          secSDcss[0] + ` sec-sidebar-${theme}` + ` sec-pri-sidebar-${SDsize}`
        }
      >
        {dashboardData[ddState]['SecSide'] &&
          dashboardData[ddState]['SecSide']['Organize New Match'] &&
          dashboardData[ddState]['SecSide']['Organize New Match'].map(
            (data, keyV) => (
              <div className="sec-level1" key={keyV}>
                <div
                  onClick={() => handleSecL1(data[0])}
                  className="level1-title"
                >
                  {data[0]}

                  <span className="sec-arrow">
                    {secDataState[0] === data[0] ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowRightIcon />
                    )}
                    {/* <ArrowDropDownIcon /> */}
                    {/* <ArrowrigthIcon /> */}
                  </span>
                </div>

                <Collapse in={secDataState[1]}>
                  {secDataState[0] === data[0] &&
                    data[1] &&
                    data[1].map((secdata) => (
                      <div key={secdata[1]} className="seclevel2">
                        {secdata[0]}
                      </div>
                    ))}
                </Collapse>
              </div>
            )
          )}
      </div>
    </div>
  );
}
