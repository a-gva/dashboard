import { createStitches } from '@stitches/react';
import { media } from './media';
// import { light } from './themes';

export const { styled, getCssText, globalCss, css, config, theme, keyframes } =
  createStitches({
    // theme: light,
    media,
  });
