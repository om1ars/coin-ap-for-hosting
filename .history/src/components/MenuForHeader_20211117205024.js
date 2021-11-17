import { Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { MenuOpen } from "@material-ui/icons";
import { Link } from "react-router-dom";

function MenuForHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuOpen style={{ marginRight: "25px" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link to='/settings' style={{color: 'white', textDecoration: 'none'}}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Link>
          <Link to='/settings' style={{color: 'white', textDecoration: 'none'}}>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Link>
          <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default MenuForHeader;
