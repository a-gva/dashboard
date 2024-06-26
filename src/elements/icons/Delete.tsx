import React from 'react';

type DeleteProps = {
  fill: string;
};

export default function Delete({ fill }: DeleteProps) {
  return (
    <svg
      width='27'
      height='18'
      viewBox='0 0 27 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M9.58578 0H10H26H27V1V17V18H26H10H9.58578L9.29289 17.7071L1.29289 9.70711L0.585785 9L1.29289 8.29289L9.29289 0.292893L9.58578 0ZM10.4142 2L3.41421 9L10.4142 16H25V2H10.4142ZM14 4.58578L14.7071 5.29288L17 7.58578L19.2929 5.29289L20 4.58579L21.4142 6L20.7071 6.70711L18.4142 9L20.7071 11.2929L21.4142 12L20 13.4142L19.2929 12.7071L17 10.4142L14.7071 12.7071L14 13.4142L12.5858 12L13.2929 11.2929L15.5858 9L13.2929 6.7071L12.5858 5.99999L14 4.58578Z'
        fill={fill}
      />
    </svg>
  );
}
