import { styled } from '@stitches/react';

export default function Contacts({ data }) {
  console.log(data);

  const { label, user } = data;

  return (
    <ContactsDiv>
      <div>{label}</div>
      {user.map((item) => {
        return (
          <>
            <p>{item.name}</p>
            <p>{item.image}</p>
          </>
        );
      })}
    </ContactsDiv>
  );
}

const ContactsDiv = styled('div', {
  background: 'yellow',
  // color: 'white',
});
