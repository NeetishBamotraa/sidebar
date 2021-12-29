import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Menu, Dropdown, Button, Layout } from 'antd';
import {
  DownOutlined,
  UserOutlined,
  DingdingOutlined,
  SearchOutlined,
  BellOutlined,
  DownSquareOutlined,
} from '@ant-design/icons';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import dashboardData from './data.js';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
  const [secSDcss, setsecSDcss] = useState(['sec-sidebar show-sec', 'emp']);
  const [theme, setTheme] = useState('dark');
  const [SDsize, setSDsize] = useState('long');
  const [subKey, setsubKey] = useState(0);

  let subkeyval = 0;

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

  const handlelevel1 = (e) => {
    let ele = e.target.parentElement.childNodes[1].classList;
    if (ele.contains('hide')) {
      ele.remove('hide');
    } else {
      ele.add('hide');
    }
  };

  const handlelevel2 = (e) => {
    let ele = e.target.parentElement.childNodes[1].classList;
    if (ele.contains('hide')) {
      ele.remove('hide');
    } else {
      ele.add('hide');
    }
  };

  const handleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const handlePrimarySize = (val) => {
    setSDsize(val);
  };

  const handleCSidebar = (keyV) => {
    if (keyV === subKey) {
      setsubKey(-1);
    } else setsubKey(keyV);
  };
  return (
    <div className={theme}>
      <div className="navbar">
        <div className="left-nav-header">
          <div className={`sidebar-logo-${theme}`}>
            <DingdingOutlined />
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
                {SDsize === 'long' && keyV === subKey && (
                  <span className="sidebar-items-arrow">
                    <ArrowDropDownIcon />
                  </span>
                )}
                {SDsize === 'long' && keyV !== subKey && (
                  <span className="sidebar-items-arrow">
                    <ArrowLeftIcon />
                  </span>
                )}
              </div>

              {subKey === keyV &&
                data[2].map((newdata) => {
                  return (
                    <div
                      className="sidebar-sub-items"
                      key={newdata[2]}
                      onClick={() => handleMSidebarBtn(newdata[1], newdata[2])}
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
            </div>
          ))}
      </div>

      <div
        // onMouseEnter={() => handlePrimarySize('short')}
        className={
          secSDcss[0] + ` sec-sidebar-${theme}` + ` sec-pri-sidebar-${SDsize}`
        }
      >
        <div className="sec-level1">
          <div className="level1-title" onClick={(e) => handlelevel1(e)}>
            Level1
          </div>
          <div className={`sec-level2 hide`}>
            <div className="level2-title">
              <span onClick={(e) => handlelevel2(e)}>Level2</span>
              <div className="sec-level3 hide">
                <div className="level3-title">Level3</div>
                <div className="level3-title">Level3</div>
                <div className="level3-title">Level3</div>
                <div className="level3-title">Level3</div>
                <div className="level3-title">Level3</div>
                <div className="level3-title">Level3</div>
              </div>
            </div>
            <div className="level2-title">Level2</div>
            <div className="level2-title">Level2</div>
            <div className="level2-title">Level2</div>
            <div className="level2-title">Level2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
