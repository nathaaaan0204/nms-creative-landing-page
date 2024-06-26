import { Divider, Tooltip } from "@mui/material";
import { Avatar, Box, Icon, IconButton, ListItemIcon, Menu, MenuItem, Typography } from "nms-creative-ui";
import React, { Fragment } from "react";

import * as SolarIconSet from "solar-icon-set";

const Account = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar alt="User Avatar" src="/avatars/Avatar 3.svg"/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.User}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.UsersGroupTwoRounded}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon
              solariconset={SolarIconSet.UserPlusRounded}
              size={24}
              iconStyle={"BoldDuotone"}
            />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon
              solariconset={SolarIconSet.Settings}
              size={24}
              iconStyle={"BoldDuotone"}
            />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Icon
              solariconset={SolarIconSet.Logout3}
              size={24}
              iconStyle={"BoldDuotone"}
            />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default Account;
