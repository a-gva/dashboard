import { styled } from '@stitches/react';
import lineVertical from '../../assets/icons/lineVertical.svg';

interface IData {
  label: string;
  items: {
    message: string;
    time: string;
    image: string;
  }[];
}

export default function Activities({ data }: { data: IData }) {
  const { label, items } = data;

  return (
    <ActivitiesDiv>
      <Label>{label}</Label>
      <NotificationArea>
        {items.map((item, index) => {
          return (
            <Notification key={item.message}>
              <ImageDiv>
                <ImageBg>
                  <Image
                    src={`src/assets/users/unnamed/${item.image}`}
                    alt=''
                  />
                </ImageBg>
                {index !== items.length - 1 && (
                  <LineDiv>
                    <Line src={lineVertical} />
                  </LineDiv>
                )}
              </ImageDiv>
              <MessageDiv>
                <Message>{item.message}</Message>
                <Time>{item.time}</Time>
              </MessageDiv>
            </Notification>
          );
        })}
      </NotificationArea>
    </ActivitiesDiv>
  );
}

const ActivitiesDiv = styled('div', {
  // background: 'blue',
  display: ' flex',
  flexDirection: 'column',
  width: '240px',
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
  flexDirection: 'column',
  borderRadius: '8px',
  width: '24px',
  // background: 'orange',
});

const ImageBg = styled('div', {
  display: ' flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  width: '24px',
  height: '24px',
  // background: '#E3F5FF',
});

const Image = styled('img', {
  // background: 'orange',
  width: '100%',
});

const LineDiv = styled('div', {
  display: ' flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '8px',
  // background: '#E3F5FF',
  // width: '24px',
  // height: '24px',
});

const Line = styled('img', {});

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
