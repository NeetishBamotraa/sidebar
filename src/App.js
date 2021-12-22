import React, { useState } from 'react';
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
import dashboardData from './data.js';

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
  function handleMenuClick(e) {
    setsecSDcss(['sec-sidebar hide-sec', 'emp']);
    setDDState(e.domEvent.target.innerText);
  }
  const menu = (
    <Menu
      style={{ backgroundColor: 'black', border: '1px solid white' }}
      onClick={handleMenuClick}
    >
      {menudata.map((data, keyV) => (
        <Menu.Item className="menuitems" key={keyV} icon={<UserOutlined />}>
          {data}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleMSidebarBtn = (data) => {
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

  return (
    <div>
      <div className="navbar">
        <div></div>
        <div className="right-nav-header">
          <div>
            <Dropdown overlay={menu}>
              <Button style={{ backgroundColor: 'black', color: 'white' }}>
                {ddState}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="navbar-search">
            <input type="text" placeholder="Search..." />
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
            <div className='user-data'>
              <h3>User Name</h3>
              <div>other data</div>
            </div>
            <div><DownSquareOutlined /></div>
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div className="sidebar-logo">
          {' '}
          <DingdingOutlined />
        </div>
        {dashboardData[ddState] &&
          dashboardData[ddState]['Level1'].map((data, keyV) => (
            <div
              className="sidebar-items"
              key={keyV}
              onClick={() => handleMSidebarBtn(data[1])}
            >
              <span className="sidebar-items-img">{data[0]}</span>
              <span className="sidebar-items-text">{data[1]}</span>
            </div>
          ))}
      </div>

      <div className={secSDcss[0]}>
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
