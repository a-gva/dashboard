import { styled } from '@stitches/react';

import Activities from '../components/rightBar/Activities';
import Contacts from '../components/rightBar/Contacts';
import Notifications from '../components/rightBar/Notifications';

import { statusBar } from '../data/statusBar';
const { notifications, activities, contacts } = statusBar;

export default function StatusBar() {
  return (
    <RightBarArea>
      <RightBarDiv>
        <Notifications data={notifications} />
        <Activities data={activities} />
        <Contacts data={contacts} />
      </RightBarDiv>
    </RightBarArea>
  );
}

const RightBarArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  // border: '3px solid orange',
  width: '280px',
  // display: 'none',
});

const RightBarDiv = styled('div', {
  width: '240px',
  marginTop: '22px',
  // border: '3px solid orange',
});
