import { styled } from '../../theme/stitches.config';

import SearchBar from '../../elements/SearchBar';

interface IData {
  leftIcons: string[];
  selected: { menu: string; item: string };
  rightIcons: string[];
}

export default function InfoBar({ data }: { data: IData }) {
  const { leftIcons, selected, rightIcons } = data;

  return (
    <InfoBarDiv>
      <WorkableArea>
        <LeftContent>
          <LeftIconDiv>
            {leftIcons.map((icon) => (
              <Icon key={icon} src={`/assets/icons/${icon}`} alt={icon} />
            ))}
          </LeftIconDiv>
          <SelectedDiv>
            <MenuText>{selected.menu}</MenuText>
            <Separator>/</Separator>
            <ItemText>{selected.item}</ItemText>
          </SelectedDiv>
        </LeftContent>

        <RightIconDiv>
          <SearchBar />

          {rightIcons.map((icon) => (
            <Icon key={icon} src={`/assets/icons/${icon}`} alt={icon} />
          ))}
        </RightIconDiv>
      </WorkableArea>
    </InfoBarDiv>
  );
}

const InfoBarDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  flexWrap: 'wrap',
  //   background: '#9d3b3b',
  // border: '2px solid blue',
});

const WorkableArea = styled('div', {
  display: 'flex',
  alignItems: 'start',
  gap: '20px',
  flexDirection: 'column',
  width: '100%',
  borderBottom: '1px solid #EBEEF3',

  margin: '0px 30px',
  padding: '24px 5px',

  // flexWrap: 'wrap',

  // border: '3px solid red',

  '@md': {
    alignItems: 'center',
    margin: '0px 30px',
    padding: '26px 5px',
    flexDirection: 'row',

    // border: '3px solid yellow',
  },
  '@lg': {
    // border: '3px solid green',
  },
});

const LeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '100%',
  gap: '22px',
  flexWrap: 'wrap',
});

const LeftIconDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '18px',
  // border: '2px solid red',
});

const Icon = styled('img', {
  '&:hover': {
    background: '#cacaca6c',
    borderRadius: '8px',
    cursor: 'pointer',
  },
});

const SelectedDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  height: '100%',
  gap: '12px',
  flexWrap: 'wrap',
  color: 'rgba(0, 0, 0, 0.4)',
  // border: '2px solid blue',
});

const RightIconDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  height: '100%',
  gap: '18px',
  flexWrap: 'wrap',

  '@md': {
    marginLeft: 'auto',
  },

  // border: '2px solid red',
});

const MenuText = styled('p', {
  '&:hover': {
    background: '#cacaca6c',
    borderRadius: '8px',
    cursor: 'pointer',
  },
});
const Separator = styled('p', {});
const ItemText = styled('p', {
  color: 'rgba(0, 0, 0, 0.9)',
  '&:hover': {
    background: '#cacaca6c',
    borderRadius: '8px',
    cursor: 'pointer',
  },
});
