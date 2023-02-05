import { styled } from '@stitches/react';

export default function Notifications({ data }) {
  const { label, items } = data;
  return (
    <NotificationsDiv>
      <div>{label}</div>
      {items.map((item) => {
        return (
          <>
            <p>{item.message}</p>
            <p>{item.time}</p>
            <p>{item.image}</p>
            <p>{item.backgroundColor}</p>
          </>
        );
      })}
    </NotificationsDiv>
  );
}

const NotificationsDiv = styled('div', {
  background: 'orange',
  // color: 'white',
});
