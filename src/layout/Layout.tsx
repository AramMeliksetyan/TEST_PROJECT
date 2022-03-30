import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "./header";

const layoutStyles = makeStyles((theme: any) => ({
  mainLayout: {
    width: "90%",
    margin: "0 auto",
  },
}));

const MainLayout = ({ children }: any) => {
  const styles = layoutStyles();

  return (
    <Fragment>
      <Box className={styles.mainLayout}>
        <Header />
        {children}
      </Box>
    </Fragment>
  );
};

export default MainLayout;
