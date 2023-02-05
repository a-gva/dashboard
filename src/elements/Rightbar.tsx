import { styled } from '@stitches/react';

import Activities from '../components/rightBar/Activities';
import Contacts from '../components/rightBar/Contacts';
import Notifications from '../components/rightBar/Notifications';

import { rightBar } from '../data/rightBar';
const { notifications, activities, contacts } = rightBar;

export default function RightBar() {
  return (
    <RightBarArea>
      <Notifications data={notifications} />
      <Activities data={activities} />
      <Contacts data={contacts} />
    </RightBarArea>
  );
}

const RightBarArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  //   border: '3px solid orange',
  minWidth: '280px',
});
