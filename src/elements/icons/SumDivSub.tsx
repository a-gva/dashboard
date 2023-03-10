import React from 'react';

export default function SumDivSub({ fill }: { fill: string }) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M22.8321 7.5547L23.3867 6.72265L21.7226 5.61325L21.1679 6.4453L9.16795 24.4453L8.61325 25.2774L10.2773 26.3868L10.8321 25.5547L22.8321 7.5547ZM9 6V7V9H11H12V11H11H9V13V14H7V13V11H5H4V9H5H7V7V6H9ZM21 21H20V23H21H27H28V21H27H21Z'
        fill={fill}
      />
    </svg>
  );
}
