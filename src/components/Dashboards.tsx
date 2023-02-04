import { styled } from '@stitches/react';

export default function Dashboards({ data }) {
  const { items } = data;
  console.log('Dashboards data', data);
  console.log('Dashboards items', items);

  return (
    <DashboardsDiv>
      {items.map((item: any) => {
        return (
          <Item key={item.name}>
            <Image src={`src/assets/${item.image}`} alt='' />
            <Name>{item.name}</Name>
          </Item>
        );
      })}
    </DashboardsDiv>
  );
}

const DashboardsDiv = styled('div', {});

const Item = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
});

const Image = styled('img', {});

const Name = styled('p', {
  fontSize: '14px',
});
