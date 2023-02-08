import { styled } from '../../theme/stitches.config';

import arrow from '/assets/icons/arrowLineRight.svg';

interface IData {
  label: string;
  items: {
    name: string;
    image: string;
  }[];
}

export default function Dashboards({ data }: { data: IData }) {
  const { items, label } = data;

  return (
    <DashboardsDiv>
      <LabelDiv>
        <LabelItem>{label}</LabelItem>
      </LabelDiv>
      {items.map((item: any) => {
        return (
          <Item key={item.name}>
            <LabelArrow src={arrow} />
            <Image src={`/assets/icons/${item.image}`} alt='' />
            <Name>{item.name}</Name>
          </Item>
        );
      })}
    </DashboardsDiv>
  );
}

const DashboardsDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  // border: ' blue 3px solid',
  width: '100%',
  '@xxl': {
    flexDirection: 'column',
    paddingBottom: '6px',
  },
});

const LabelDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  color: '#A0A3BD',

  gap: '20px',
  '@xxl': {
    padding: '24px 0 6px 0',
  },
});

const LabelArrow = styled('img', {});

const LabelItem = styled('p', {
  // background: 'blue',
});

const Item = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 0',
  // width: '100%',
  '&:hover': {
    background: '#cacaca6c',
    borderRadius: '8px',
    cursor: 'pointer',
  },
});

const Image = styled('img', {});

const Name = styled('p', {
  fontSize: '14px',
});
