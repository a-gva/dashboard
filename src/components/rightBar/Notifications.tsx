import { styled } from '@stitches/react';

export default function Notifications({ data }) {
  const { label, items } = data;
  return (
    <NotificationsDiv>
      <Label>{label}</Label>
      <NotificationArea>
        {items.map((item) => {
          return (
            <Notification key={item.message}>
              <ImageDiv>
                <ImageBg>
                  <Image src={`src/assets/icons/${item.image}`} alt='' />
                </ImageBg>
              </ImageDiv>
              <MessageDiv>
                <Message>{item.message}</Message>
                <Time>{item.time}</Time>
                {/* <p>{item.backgroundColor}</p> */}
              </MessageDiv>
            </Notification>
          );
        })}
      </NotificationArea>
    </NotificationsDiv>
  );
}

const NotificationsDiv = styled('div', {
  // background: 'orange',
  display: ' flex',
  flexDirection: 'column',
  width: '240px',
  fontSize: '14px',
  // border: '1px solid black',
  // color: 'white',
});

const Label = styled('p', {
  fontWeight: 'bold',
  padding: '4px 0',
  // border: '1px solid black',
});

const NotificationArea = styled('div', {
  padding: '18px 0',
  // border: '1px solid black',
});

const Notification = styled('div', {
  // background: 'orange',
  display: ' flex',
  flexDirection: 'row',
  gap: '8px',
  // border: '1px solid black',
  marginBottom: '16px',
  // color: 'white',
});

const ImageDiv = styled('div', {
  display: ' flex',
  alignItems: 'start',
  // background: 'orange',
  borderRadius: '8px',
  width: '24px',
});

const ImageBg = styled('div', {
  display: ' flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#E3F5FF',
  borderRadius: '8px',
  width: '24px',
  height: '24px',
});

const Image = styled('img', {
  // background: 'orange',
  width: '16px',
});
const MessageDiv = styled('div', {
  // whiteSpace: 'nowrap',
  // textOverflow: ' ellipsis',
  // width: '200px',
  // overflow: 'hidden',
  // display: 'block',
});

const Message = styled('p', {
  whiteSpace: 'nowrap',
  textOverflow: ' ellipsis',
  width: '200px',
  overflow: 'hidden',
  marginBottom: '4px',
});

const Time = styled('p', {
  fontSize: '12px',
  color: 'rgba(0, 0, 0, 0.4)',
});
