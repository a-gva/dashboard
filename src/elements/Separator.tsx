import React from 'react';
import { styled } from '../theme/stitches.config';

export default function Separator() {
  return <SeparatorComponent>/</SeparatorComponent>;
}

const SeparatorComponent = styled('p', {
  color: ' rgba(0, 0, 0, 0.2)',
  padding: '0 6px',
});
