import { makeStyles } from "@mui/styles";

export const headerStyles = makeStyles((theme: any) => ({
  trademarkLink: {
    fontSize: 22,
    color: theme.palette.primary.main,
  },
  mainWrapper: {
    padding: "15px 0",
    "& a": {
      textDecoration: "none",
    },
  },
  linksWrapper: {
    "& a": {
      color: theme.palette.secondary.main,
      marginLeft: 20,
      "&.active": {
        color: theme.palette.primary.main,
      },
    },
  },
}));
