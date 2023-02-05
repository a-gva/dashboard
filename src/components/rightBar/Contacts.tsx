import { styled } from '@stitches/react';

export default function Contacts({ data }) {
  const { label, user } = data;

  return (
    <ContactsDiv>
      <div>{label}</div>
      {user.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.image}</p>
          </div>
        );
      })}
    </ContactsDiv>
  );
}

const ContactsDiv = styled('div', {
  background: 'yellow',
  // color: 'white',
});
