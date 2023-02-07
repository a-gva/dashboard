import { createStitches } from '@stitches/react';
import { media } from './media';
// import { light } from './themes';

const { styled, getCssText, globalCss, css, config, theme, keyframes } =
  createStitches({
    // theme: light,
    media,
  });

export { styled, getCssText, css, theme, keyframes };
