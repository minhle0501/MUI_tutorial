import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Drawer,
  Box,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { KeyboardArrowDown } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MuiNavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const open = Boolean(anchorEl);
  //Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="error">
      <Toolbar>
        <IconButton>
          <MenuIcon onClick={() => setIsDrawerOpen(true)} />
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Box p={2} width="250px" textAlign={"center"} role="presentation">
            <Typography variant="h6" component="div">
              Side Panel
            </Typography>
          </Box>
        </Drawer>

        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>

        <Typography variant="h6" component="div">
          Pokemon App
        </Typography>

        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>

          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="Resource-button"
            onClick={HandleClick}
            aria-controls={open ? "Resource-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Resource
          </Button>
          <Button color="inherit">Features</Button>
        </Stack>
        <Menu
          id="Resource-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "Resource-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavBar;
