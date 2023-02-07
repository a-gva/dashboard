import { styled } from '@stitches/react';

import InfoBar from '../components/CenterArea/InfoBar';
import ActionArea from '../components/CenterArea/ActionArea';
import BlockArea from '../components/CenterArea/BlockArea';

import { centerArea } from '../data/centerArea';
const { infoBar, actionArea } = centerArea;

export default function CenterArea() {
  return (
    <CenterAreaDiv>
      <WorkableArea>
        <InfoBar data={infoBar} />
        <ActionArea data={actionArea} />
        <BlockArea />
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
