import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ParallaxContainer from "shared/ui/Parallax";
import CreateIcon from "@mui/icons-material/Create";

const firstSectionStyles = makeStyles((theme: any) => ({
  imgArea: {
    textAlign: "center",
    "& img": {
      objectFit: "cover",
      maxHeight: "100%",
    },
  },
  ourWork: {
    color: theme.palette.primary.light,
    width: "80%",
  },
  parallaxFooterArea: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

const FirstSection = () => {
  const styles = firstSectionStyles();
  return (
    <Box>
      <Box className={styles.imgArea}>
        <ParallaxContainer bgImageSrc="https://static.wixstatic.com/media/c837a6_135dfe766a0249529808c9960058758b~mv2.jpg/v1/fill/w_980,h_897,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_135dfe766a0249529808c9960058758b~mv2.jpg">
          <Box height="750px">
            <Typography
              fontSize="60px"
              className={styles.ourWork}
              pt="10%"
              margin="0 auto"
            >
              We Specialize in Strategy, Design & Marketing
            </Typography>
            <Box
              display="flex"
              justifyContent="space-around"
              className={styles.parallaxFooterArea}
            >
              <Box display="flex" padding="30px 0">
                <CreateIcon />
                <Typography ml={3}>Branding</Typography>
              </Box>
              <Box display="flex" padding="30px 0">
                <CreateIcon />
                <Typography ml={3}>Branding</Typography>
              </Box>
              <Box display="flex" padding="30px 0">
                <CreateIcon />
                <Typography ml={3}>Branding</Typography>
              </Box>
              <Box display="flex" padding="30px 0">
                <CreateIcon />
                <Typography ml={3}>Branding</Typography>
              </Box>
            </Box>
          </Box>
        </ParallaxContainer>
      </Box>
    </Box>
  );
};

export default FirstSection;
