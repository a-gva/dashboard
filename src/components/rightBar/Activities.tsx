import { styled } from '@stitches/react';

export default function Activities({ data }) {
  const { label, items } = data;

  return (
    <ActivitiesDiv>
      <div>
        {label} {'  '} + {'  '}
      </div>
      {items.map((item) => {
        return (
          <>
            <p>{item.message}</p>
            <p>{item.time}</p>
          </>
        );
      })}
    </ActivitiesDiv>
  );
}

const ActivitiesDiv = styled('div', {
  background: 'blue',
  color: 'white',
});
