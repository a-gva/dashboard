import { createStitches } from '@stitches/react';
import { light } from './themes';
import { media } from './media';

export const { styled, getCssText, globalCss, css, config, theme, keyframes } =
  createStitches({
    theme: light,
    media,
  });
