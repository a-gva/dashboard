import { styled } from '@stitches/react';

interface IData {
  outterText: string;
  label: string;
  list: {
    manager: string;
    date: string;
    amount: string;
    status: string;
    image: string;
  }[];
}

export default function BlockArea({ data }: { data: IData }) {
  return <BlockAreaDiv>BlockArea</BlockAreaDiv>;
}

const BlockAreaDiv = styled('div', {
  //   border: '2px solid blue',
  //   background: '#65c26a',
});
