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
          [<ListAltIcon />, 'All Matches'],
          [<ViewListIcon />, 'My Matches'],
        ],
      ],
      [
        <PaidIcon />,
        'Money Related',
        [
          [<PaidIcon />, 'Wallets'],
          [<PaidIcon />, 'Payment History'],
        ],
      ],
      [
        <LocalLibraryIcon />,
        'Community Related',
        [
          [<ForumIcon />, 'Groups'],
          [<GroupIcon />, 'Friends'],
          [<MilitaryTechIcon />, 'LeaderBoards'],
          [<UserSwitchOutlined />, 'Past Organizers'],
          [<UserSwitchOutlined />, 'Pages'],
          [<UserSwitchOutlined />, 'Servers'],
          [<UserSwitchOutlined />, 'Teams'],
          [<LocalLibraryIcon />, 'Communitys'],
        ],
      ],
      [
        <Inventory2Icon />,
        'My Stuffs',
        [
          [<Inventory2Icon />, 'Folders & Files'],
          [<Inventory2Icon />, 'Videos'],
          [<Inventory2Icon />, 'Images'],
          [<Inventory2Icon />, 'Cloned Matches'],
          [<Inventory2Icon />, 'Posts'],
          [<Inventory2Icon />, 'My Vault'],
          [<EmojiEventsIcon />, 'My Prizes'],
        ],
      ],
      [
        <AnalyticsIcon />,
        'Data Related',
        [
          [<AnalyticsIcon />, 'Data Analysis'],
          [<EscalatorIcon />, 'My Activity'],
        ],
      ],
      [
        <ChatIcon />,
        'Message Related',
        [
          [<CircleNotificationsIcon />, 'Notifications'],
          [<ChatIcon />, 'Messages'],
        ],
      ],
      [
        <HomeRepairServiceIcon />,
        'Service Related',
        [
          [<HomeRepairServiceIcon />, 'My Gfx Artist'],
          [<HomeRepairServiceIcon />, 'My Service Providers'],
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
          [<ViewListIcon />, 'My Matches'],
          [<AddBoxIcon />, 'Organize New Match'],
          [<AddBoxIcon />, 'Drafts'],
        ],
      ],
      [
        <PaidIcon />,
        'Money Related',
        [
          [<PaidIcon />, 'Wallets'],
          [<PaidIcon />, 'Payment History'],
        ],
      ],
      [
        <LocalLibraryIcon />,
        'Community Related',
        [
          [<ForumIcon />, 'Groups'],
          [<GroupIcon />, 'Friends'],
          [<MilitaryTechIcon />, 'LeaderBoards'],
          [<UserSwitchOutlined />, 'Pages'],
          [<EmojiPeopleIcon />, 'Past Players'],
          [<UserSwitchOutlined />, 'Servers'],
          [<UserSwitchOutlined />, 'Teams'],
          [<LocalLibraryIcon />, 'Community'],
        ],
      ],
      [
        <Inventory2Icon />,
        'My Stuffs',
        [
          [<ViewListIcon />, 'Rules'],
          [<Inventory2Icon />, 'Folders & Files'],
          [<Inventory2Icon />, 'Videos'],
          [<Inventory2Icon />, 'Images'],
          [<Inventory2Icon />, 'Cloned Matches'],
          [<Inventory2Icon />, 'Posts'],
          [<Inventory2Icon />, 'My Vault'],
          [<SportsScoreIcon />, 'My Scorers'],
        ],
      ],
      [
        <AnalyticsIcon />,
        'Data Related',
        [
          [<AnalyticsIcon />, 'Data Analysis'],
          [<EscalatorIcon />, 'My Activity'],
        ],
      ],
      [
        <ChatIcon />,
        'Message Related',
        [
          [<CircleNotificationsIcon />, 'Notifications'],
          [<ChatIcon />, 'New Messages'],
        ],
      ],
      [
        <HomeRepairServiceIcon />,
        'Service Related',
        [
          [<HomeRepairServiceIcon />, 'My Umpires'],
          [<HomeRepairServiceIcon />, 'My Scorers'],
          [<HomeRepairServiceIcon />, 'My Casters'],
          [<HomeRepairServiceIcon />, 'My Gfx Artist'],
        ],
      ],
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
