import React from 'react';
import { styled } from '@stitches/react';

export default function Separator() {
  return <SeparatorComponent>/</SeparatorComponent>;
}

const SeparatorComponent = styled('p', {
  color: ' rgba(0, 0, 0, 0.2)',
  padding: '0 6px',
});
