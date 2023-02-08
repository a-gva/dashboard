import { styled } from '../theme/stitches.config';

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
  // border: '5px solid black',
  '@xxl': {
    width: '946px',
  },
});

const WorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // width: '100%',
  // height: '100%',
  // border: '2px solid red',
});
