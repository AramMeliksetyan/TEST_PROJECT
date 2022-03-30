import { ThemeProvider } from "@mui/material";
import React from "react";
import MuiTheme from "./assets/theme";
import MainLayout from "./layout/Layout";
import MainRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <MainLayout>
        <MainRoutes />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
