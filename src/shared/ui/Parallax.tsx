import React from "react";
import { Parallax } from "react-parallax";

const ParallaxContainer = ({
  bgImageSrc,
  children,
}: {
  bgImageSrc: string;
  children: any;
}) => (
  <Parallax blur={3} bgImage={bgImageSrc} bgImageAlt="the cat" strength={200}>
    {children}
  </Parallax>
);

export default ParallaxContainer;
