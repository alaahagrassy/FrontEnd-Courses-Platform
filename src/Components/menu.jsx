import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import axios from 'axios'
export default function PositionedMenu() {

  const [Categories, setCategories] = useState([]);


  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/category`)
      .then((response) => {
        setCategories(response.data);
      });
  },[]);
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
      sx={{
        position:"absolute",
        top:"35px",
        paddingTop : '50px',
        
      }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {Categories?.map((e)=>{return(
          <MenuItem>
            {e.name}
          </MenuItem>
        )})}

      </Menu>
    </div>
  );
}
