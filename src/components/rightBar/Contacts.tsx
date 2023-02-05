import { styled } from '@stitches/react';

interface IData {
  label: string;
  user: { image: string; name: string }[];
}

export default function Contacts({ data }: { data: IData }) {
  const { label, user } = data;

  return (
    <ContactsDiv>
      <Label>{label}</Label>
      <NotificationArea>
        {user.map((item, index) => {
          return (
            <Notification key={index}>
              <ImageDiv>
                <Image src={`src/assets/users/named/${item.image}`} alt='' />
              </ImageDiv>
              <p>{item.name}</p>
            </Notification>
          );
        })}
      </NotificationArea>
    </ContactsDiv>
  );
}

const ContactsDiv = styled('div', {
  // background: 'yellow',
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
  alignItems: 'center',
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
const Image = styled('img', {
  // background: 'orange',
  width: '100%',
});
