import { styled } from '@stitches/react';

import Activities from '../components/rightBar/Activities';
import Contacts from '../components/rightBar/Contacts';
import Notifications from '../components/rightBar/Notifications';

import { rightBar } from '../data/rightBar';
const { notifications, activities, contacts } = rightBar;

export default function RightBar() {
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
