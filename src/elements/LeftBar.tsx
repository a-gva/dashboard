import { styled } from '@stitches/react';

import UserLoginDiv from '../components/UserLogin';
import FavoritesRecently from '../components/FavoritesRecently';
import Dashboards from '../components/Dashboards';
import Pages from '../components/Pages';
import Footer from '../components/Footer';

import { leftBar } from '../data/leftBar';
const { userLogin, favoritesRecently, dashboards, pages, footer } = leftBar;

export default function LeftBar() {
  return (
    <LeftBarArea>
      <UserLoginDiv data={userLogin} />
      <FavoritesRecently data={favoritesRecently} />
      <Dashboards data={dashboards} />
      <Pages data={pages} />
      <Footer data={footer} />
    </LeftBarArea>
  );
}

const LeftBarArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRight: '2px solid #EBEEF3',
  minWidth: '212px',
  padding: '24px 24px 0 24px',
  // color: 'white',
});
