import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';

import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { Home as HomeIcon } from '@mui/icons-material';

import MnitLogo from '../assets/Mnit_logo.png';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Director's Message", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> }
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={MnitLogo} alt="MNIT Logo" width={50} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: 0 }}>Training and Placement Cell</h3>
          <h3 style={{ margin: 0 }}>Malaviya National Institute of Technology, Jaipur</h3>
        </div>
      </div>


      <div className="navbar-links-container">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Director's Message</a>
        <a href="#">Contact</a>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 size={24} onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <div style={{ width: 250 }}>
          {menuOptions.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
