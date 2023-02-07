import { styled } from '@stitches/react';

import InfoBar from '../snippets/CenterArea/InfoBar';
import ActionArea from '../snippets/CenterArea/ActionArea';
import BlockArea from '../snippets/CenterArea/BlockArea';

import { centerArea } from '../data/centerArea';
const { infoBar, actionArea, blockArea } = centerArea;

export default function CenterArea() {
  return (
    <CenterAreaDiv>
      <WorkableArea>
        <InfoBar data={infoBar} />
        <ActionArea data={actionArea} />
        <BlockArea data={blockArea} />
      </WorkableArea>
    </CenterAreaDiv>
  );
}

const CenterAreaDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid #EBEEF3',
  width: '946px',
  // border: '2px solid green',
});

const WorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // width: '100%',
  height: '100%',
  // border: '2px solid red',
});
