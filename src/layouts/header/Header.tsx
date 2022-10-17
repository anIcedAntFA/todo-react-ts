import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Collapse,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import Tooltip from 'src/components/Tooltip';
import { images } from 'src/constant';
import { MENU_USER_ITEMS } from './header-config';

export default function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div>Logo</div>
        <StyledHeading variant="h4">TODO APP</StyledHeading>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={14} color="error">
              <NotificationsIcon sx={{ fontSize: '28px' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            {true ? <Brightness7Icon sx={{ fontSize: '28px' }} /> : <Brightness2Icon />}
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={images.adminAvatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {MENU_USER_ITEMS.map((item, index) => (
                <div key={index}>
                  <MenuItem onClick={handleClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                    {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
                  </MenuItem>
                  {item.children && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List disablePadding>
                        {item.children.map((nestedItem, index) => (
                          <MenuItem key={index} sx={{ pl: 4 }}>
                            <ListItemIcon>{nestedItem.icon}</ListItemIcon>
                            <ListItemText>{nestedItem.title}</ListItemText>
                          </MenuItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                  {item.divider}
                </div>
              ))}
            </Menu>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

const StyledHeading = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  padding: '8px',
  borderRadius: '8px',
  textAlign: 'center',
  color: '#ffff',
}));
