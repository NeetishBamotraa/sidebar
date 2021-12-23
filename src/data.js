import { HomeOutlined, UserSwitchOutlined } from '@ant-design/icons';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ViewListIcon from '@mui/icons-material/ViewList';
import PaidIcon from '@mui/icons-material/Paid';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupIcon from '@mui/icons-material/Group';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EscalatorIcon from '@mui/icons-material/Escalator';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import React from 'react';

const dashboardData = {
  Gamer: {
    Level1: [
      [
        <ListAltIcon />,
        'Match List',
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
      [<ViewListIcon />, 'My Matches'],
      [<PaidIcon />, 'Wallet & Payments'],
      [<Inventory2Icon />, 'My Vault'],
      [<AnalyticsIcon />, 'Data Analysis'],
      [<MilitaryTechIcon />, 'LeaderBoards'],
      [<GroupIcon />, 'Friendlist'],
      [<ForumIcon />, 'Group Chat'],
      [<CircleNotificationsIcon />, 'Notifications'],
      [<UserSwitchOutlined />, 'Past Organizers'],
      [<EscalatorIcon />, 'My Activity'],
      [<ChatIcon />, 'Messages'],
      [<HomeRepairServiceIcon />, 'My Service Providers'],
      [<EmojiEventsIcon />, 'My Prizes'],
      [<LocalLibraryIcon />, 'Communitys'],
    ],
  },
  Organizer: {
    Level1: [
      [<ViewListIcon />, 'My Matches'],
      [<AddBoxIcon />, 'Organize New Match'],
      [<Inventory2Icon />, 'My Vault'],
      [<MilitaryTechIcon />, 'LeaderBoards'],
      [<PaidIcon />, 'Wallet & Payments'],
      [<AnalyticsIcon />, 'Data Analysis'],
      [<EmojiPeopleIcon />, 'Past Players'],
      [<EscalatorIcon />, 'My Activity'],
      [<CircleNotificationsIcon />, 'Notifications'],
      [<ForumIcon />, 'Chat Groups'],
      [<HomeRepairServiceIcon />, 'My Service Providers'],
      [<SportsScoreIcon />, 'My Scorers'],
      [<LocalLibraryIcon />, 'Community'],
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
