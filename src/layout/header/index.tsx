import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { headerStyles } from "layout/header/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CustomButton from "shared/ui/Button";

const Header = () => {
  const styles = headerStyles();
  return (
    <header>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={styles.mainWrapper}
      >
        <Box>
          <Link to="/" className={styles.trademarkLink}>
            TRADEMARK®
          </Link>
        </Box>
        <Box className={styles.linksWrapper} display="flex" alignItems="center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/works">Contact</NavLink>
          <Box display="flex" alignItems="center" ml={2.5}>
            <AccountCircleIcon color="primary" />
            <Typography color="primary" ml={1}>
              Log In
            </Typography>
          </Box>
          <Box ml={2.5}>
            <CustomButton
              buttonName="Lets Meet"
              onClick={() => console.log("open")}
            />
          </Box>
        </Box>
      </Box>
    </header>
  );
};
export default Header;
