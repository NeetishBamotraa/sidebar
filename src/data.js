import { HomeOutlined } from '@ant-design/icons';
import React from 'react';

const dashboardData = {
  Gamer: {
    Level1: [
      [
        <HomeOutlined />,
        'Dashboard',
        [
          [
            'dash-l1-val1',
            [
              [
                'dash-l2-val1',
                ['dash-l3-val1', 'dash-l3-val2', 'dash-l3-val3'],
              ],
              'dash-l2-val2',
              [
                'dash-l2-val3',
                ['dash-l3-val1', 'dash-l3-val2', 'dash-l3-val3'],
              ],
            ],
          ],
          ['dash-l1-val2', []],
        ],
      ],
      [<HomeOutlined />, 'Gamer'],
      [<HomeOutlined />, 'Cricket'],
      [<HomeOutlined />, 'Gamers'],
      [<HomeOutlined />, 'Dice'],
      [<HomeOutlined />, 'Cricket'],
    ],
  },
  Organizer: {
    Level1: [
      [<HomeOutlined />, 'Dashboard'],
      [<HomeOutlined />, 'Organizer'],
      [<HomeOutlined />, 'Cricket'],
      [<HomeOutlined />, 'Gamers'],
      [<HomeOutlined />, 'Organizer'],
      [<HomeOutlined />, 'Cricket'],
    ],
    Level2: [],
  },
  'Team Owner': {
    Level1: [
      [<HomeOutlined />, 'Dashboard'],
      [<HomeOutlined />, 'Team Owner'],
      [<HomeOutlined />, 'Cricket'],
      [<HomeOutlined />, 'Team Owner'],
      [<HomeOutlined />, 'Dice'],
      [<HomeOutlined />, 'Cricket'],
    ],
    Level2: [],
  },
  'Content creator': {
    Level1: [
      [<HomeOutlined />, 'Dashboard'],
      [<HomeOutlined />, 'Gamer'],
      [<HomeOutlined />, 'Content creator'],
      [<HomeOutlined />, 'Gamers'],
      [<HomeOutlined />, 'Content creator'],
      [<HomeOutlined />, 'Cricket'],
    ],
    Level2: [],
  },
  'Buyer and Seller': {
    Level1: [
      [<HomeOutlined />, 'Dashboard'],
      [<HomeOutlined />, 'Buyer and Seller'],
      [<HomeOutlined />, 'Cricket'],
      [<HomeOutlined />, 'Buyer and Seller'],
      [<HomeOutlined />, 'Dice'],
      [<HomeOutlined />, 'Cricket'],
    ],
    Level2: [],
  },
  'Service Provider': {
    Level1: [
      [<HomeOutlined />, 'Dashboard'],
      [<HomeOutlined />, 'Service Provider'],
      [<HomeOutlined />, 'Cricket'],
      [<HomeOutlined />, 'Gamers'],
      [<HomeOutlined />, 'Service Provider'],
      [<HomeOutlined />, 'Cricket'],
    ],
    Level2: [],
  },
  'Investor & Investment': {
    Level1: [
      [<HomeOutlined />, 'Investor & Investment'],
      [<HomeOutlined />, 'Gamer'],
      [<HomeOutlined />, 'Investor & Investment'],
      [<HomeOutlined />, 'Gamers'],
      [<HomeOutlined />, 'Dice'],
      [<HomeOutlined />, 'Cricket'],
    ],
    Level2: [],
  },
};

export default dashboardData;
