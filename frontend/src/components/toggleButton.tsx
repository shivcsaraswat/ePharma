import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, ListItemText, ListItemButton , ListItemIcon} from '@mui/material';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CatalogCard from './catalog_card';
import CloseIcon from './closeIcon.tsx'


export const ToggleButton: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent): void => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };
  const listItems = [
    {name: "Home"},
    {name: "Cart"},
    {name: "Address"}
  ];

  const handleClick = (name: string) => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="p-4">
      {/* Button to open the drawer */}
      <Button
        className="!bg-pink-700 !text-white !font-bold !py-2 !px-4 !rounded flex items-center space-x-4"
        variant="contained"
        onClick={toggleDrawer(true)}
      >
        <FormatAlignJustifyIcon />
        <span>Shop</span>
      </Button>

      {/* Drawer component */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} PaperProps={{
            sx: { width: "25%" },
          }}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >  
          <div className = "ml-[30px] mt-[30px] flex justify-between items-center text-4xl">
            <h1 className = "text-pink-500">
              Conditions
            </h1>
            <Button startIcon = {<CloseIcon/>} ></Button>
          </div>
          <List className = "mt-[1px]">
          {listItems.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
          {isLoggedIn ? (
                <p>Welcome, User!</p>
            ) : (
              <CatalogCard name={item.name} onClick={() => handleClick(item.name)}/>
            )
          }
            
          </ListItemButton>
        </ListItem>
      ))}
    </List>
        </div>
      </Drawer>
    </div>
  );
};
