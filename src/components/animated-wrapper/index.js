import { keyframes } from '@emotion/react';
import React from 'react';
import Reveal from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 300px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const AnimatedWrapper = ({ children }) => (
  // <Reveal keyframes={customAnimation} triggerOnce={true} cascade={true}>
  <>{children}</>
)
// </Reveal>
