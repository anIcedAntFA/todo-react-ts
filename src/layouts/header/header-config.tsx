import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';

import { EnglishIcon, VietnameseIcon } from 'src/components/Icons';

export const MENU_USER_ITEMS = [
  {
    title: 'Profile',
    icon: <AccountCircleIcon />,
  },
  {
    title: 'Languages',
    icon: <LanguageIcon />,
    children: [
      {
        title: 'English',
        icon: <EnglishIcon />,
      },
      {
        title: 'Vietnamese',
        icon: <VietnameseIcon />,
      },
    ],
    divider: <Divider />,
  },
  {
    title: 'Logout',
    icon: <LogoutIcon />,
  },
];
