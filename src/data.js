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
        'Match Related',
        [
          [<ListAltIcon />, 'All Matches', 0],
          [<ViewListIcon />, 'My Matches', 1],
        ],
      ],
      [
        <PaidIcon />,
        'Money Related',
        [
          [<PaidIcon />, 'Wallets', 0],
          [<PaidIcon />, 'Payment History', 1],
        ],
      ],
      [
        <LocalLibraryIcon />,
        'Community Related',
        [
          [<ForumIcon />, 'Groups', 0],
          [<GroupIcon />, 'Friends', 1],
          [<MilitaryTechIcon />, 'LeaderBoards', 2],
          [<UserSwitchOutlined />, 'Past Organizers', 3],
          [<UserSwitchOutlined />, 'Pages', 4],
          [<UserSwitchOutlined />, 'Servers', 5],
          [<UserSwitchOutlined />, 'Teams', 6],
          [<LocalLibraryIcon />, 'Communitys', 7],
        ],
      ],
      [
        <Inventory2Icon />,
        'My Stuffs',
        [
          [<Inventory2Icon />, 'Folders & Files', 0],
          [<Inventory2Icon />, 'Videos', 1],
          [<Inventory2Icon />, 'Images', 2],
          [<Inventory2Icon />, 'Cloned Matches', 3],
          [<Inventory2Icon />, 'Posts', 4],
          [<Inventory2Icon />, 'My Vault', 5],
          [<EmojiEventsIcon />, 'My Prizes', 6],
        ],
      ],
      [
        <AnalyticsIcon />,
        'Data Related',
        [
          [<AnalyticsIcon />, 'Data Analysis', 0],
          [<EscalatorIcon />, 'My Activity', 1],
        ],
      ],
      [
        <ChatIcon />,
        'Message Related',
        [
          [<CircleNotificationsIcon />, 'Notifications', 0],
          [<ChatIcon />, 'Messages', 1],
        ],
      ],
      [
        <HomeRepairServiceIcon />,
        'Service Related',
        [
          [<HomeRepairServiceIcon />, 'My Gfx Artist', 0],
          [<HomeRepairServiceIcon />, 'My Service Providers', 1],
        ],
      ],
    ],
  },
  Organizer: {
    Level1: [
      [
        <ViewListIcon />,
        'Match Related',
        [
          [<ViewListIcon />, 'My Matches', 0],
          [<AddBoxIcon />, 'Organize New Match', 1],
          [<AddBoxIcon />, 'Drafts', 2],
        ],
      ],
      [
        <PaidIcon />,
        'Money Related',
        [
          [<PaidIcon />, 'Wallets', 0],
          [<PaidIcon />, 'Payment History', 1],
        ],
      ],
      [
        <LocalLibraryIcon />,
        'Community Related',
        [
          [<ForumIcon />, 'Groups', 0],
          [<GroupIcon />, 'Friends', 1],
          [<MilitaryTechIcon />, 'LeaderBoards', 2],
          [<UserSwitchOutlined />, 'Pages', 3],
          [<EmojiPeopleIcon />, 'Past Players', 4],
          [<UserSwitchOutlined />, 'Servers', 5],
          [<UserSwitchOutlined />, 'Teams', 6],
          [<LocalLibraryIcon />, 'Community', 7],
        ],
      ],
      [
        <Inventory2Icon />,
        'My Stuffs',
        [
          [<ViewListIcon />, 'Rules', 0],
          [<Inventory2Icon />, 'Folders & Files', 1],
          [<Inventory2Icon />, 'Videos', 2],
          [<Inventory2Icon />, 'Images', 3],
          [<Inventory2Icon />, 'Cloned Matches', 4],
          [<Inventory2Icon />, 'Posts', 5],
          [<Inventory2Icon />, 'My Vault', 6],
          [<SportsScoreIcon />, 'My Scorers', 7],
        ],
      ],
      [
        <AnalyticsIcon />,
        'Data Related',
        [
          [<AnalyticsIcon />, 'Data Analysis', 0],
          [<EscalatorIcon />, 'My Activity', 1],
        ],
      ],
      [
        <ChatIcon />,
        'Message Related',
        [
          [<CircleNotificationsIcon />, 'Notifications', 0],
          [<ChatIcon />, 'New Messages', 1],
        ],
      ],
      [
        <HomeRepairServiceIcon />,
        'Service Related',
        [
          [<HomeRepairServiceIcon />, 'My Umpires', 0],
          [<HomeRepairServiceIcon />, 'My Scorers', 1],
          [<HomeRepairServiceIcon />, 'My Casters', 2],
          [<HomeRepairServiceIcon />, 'My Gfx Artist', 3],
        ],
      ],
    ],
    SecSide: {
      'Organize New Match': [
        [
          'Has Entry Fee',
          [
            ['Single Match Format', 0],
            ['Multi Match Format', 1],
            ['Challenge', 2],
          ],
        ],
        [
          'Free Entry',
          [
            ['Single Match Format', 0],
            ['Multi Match Format', 1],
            ['Challenge', 2],
          ],
        ],
      ],
    },
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
