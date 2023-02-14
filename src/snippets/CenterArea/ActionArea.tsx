import { styled } from '../../theme/stitches.config';

import Separator from '../../elements/Separator';

import ProgressBar from '../../elements/ProgressBar';

interface IData {
  menuItems: {
    name: string;
    isActive: boolean;
  }[];
  actions: string[];
  headerText: string;
  status: {
    label: string;
    value: number;
  };
  specs: {
    totalTasks: {
      label: string;
      value: {
        current: number;
        total: number;
      };
    };
    dueDate: {
      label: string;
      value: string;
    };
    budgetSpent: {
      label: string;
      value: string;
    };
  };
  logo: string;
  avatarGroup: string;
}

export default function ActionArea({ data }: { data: IData }) {
  const { menuItems, actions, headerText, status, specs, logo, avatarGroup } =
    data;

  return (
    <ActionAreaDiv>
      <WorkableArea>
        <MenuDiv>
          <MenuItems>
            {menuItems.map((item) =>
              item.isActive ? (
                <Tab type='active' key={item.name}>
                  {item.name}
                </Tab>
              ) : (
                <Tab key={item.name}>{item.name}</Tab>
              )
            )}
          </MenuItems>
          <Actions>
            {actions.map((item) => (
              <TabActions key={item}>{item}</TabActions>
            ))}
          </Actions>
        </MenuDiv>
        <InfoArea>
          <InfoWorkableArea>
            <Block1>
              <Header>
                <h1>{headerText}</h1>
              </Header>
              <Content>
                <InfoDiv>
                  <Info>
                    <InfoLabel>{status.label}:</InfoLabel>
                    {status.value < 100 && (
                      // <ProgressBarDiv>
                      <ProgressBar value={status.value} />
                      // <InfoText>
                      // </InfoText>
                      // </ProgressBarDiv>
                    )}
                  </Info>
                  {Object.keys(specs).map((key) => {
                    if (typeof specs[key].value === 'object') {
                      return (
                        <Info key={key}>
                          <InfoLabel>{specs[key].label}:</InfoLabel>
                          <InfoText>
                            {specs[key].value.current}
                            <Separator />
                            {specs[key].value.total}
                          </InfoText>
                        </Info>
                      );
                    } else {
                      return (
                        <Info key={key}>
                          <InfoLabel>{specs[key].label}:</InfoLabel>
                          <InfoText>{specs[key].value}</InfoText>
                        </Info>
                      );
                    }
                  })}
                  {/* check if specs.value is an object */}
                </InfoDiv>
              </Content>
            </Block1>
            <IconsDiv>
              {/* <Icon src={}>{logo}</Icon> */}
              {/* <Icon>{avatarGroup}</Icon> */}
              <Icon key={logo} src={`/assets/brand/${logo}`} alt={logo} />
              <Icon
                key={avatarGroup}
                src={`/assets/users/${avatarGroup}`}
                alt={avatarGroup}
              />
            </IconsDiv>
          </InfoWorkableArea>
        </InfoArea>
      </WorkableArea>
    </ActionAreaDiv>
  );
}

const ActionAreaDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '32px',
  height: '100%',
  // border: '2px solid green',
});

const WorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0px 30px 30px 30px',
  // border: '2px solid blue',
});

const MenuDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  flexWrap: 'wrap',
  marginBottom: '24px',
  gap: '20px 20px',

  color: 'rgba(0, 0, 0, 0.4)',
  // border: '2px solid red',

  '@md': {
    gap: 0,
  },
});

const MenuItems = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '5px 20px',
  flexWrap: 'wrap',
  // border: '2px solid black',

  '@md': {
    gap: '20px',
  },
});

const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '24px',

  '@md': {
    marginLeft: 'auto',
  },

  //   width: '100%',
  // border: '2px solid blue',
});

const Tab = styled('p', {
  paddingBottom: '4px 12px 0 12px',
  // border: '2px solid red',
  '&:hover': {
    background: '#cacaca6c',
    color: '#000000',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  variants: {
    type: {
      active: {
        color: '#1c1c1c',
        fontWeight: 'bold',
        borderBottom: '2px solid #1c1c1c',
      },
    },
  },
});

const TabActions = styled('p', {
  paddingBottom: '4px 12px 0 12px',
  gap: '24px',
  // border: '2px solid green',
  '&:hover': {
    background: '#cacaca6c',
    color: '#000000',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  variants: {
    type: {
      active: {
        color: '#1c1c1c',
        fontWeight: 'bold',
        borderBottom: '2px solid #1c1c1c',
      },
    },
  },
});

const InfoArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flexWrap: 'wrap',
  borderRadius: '16px',
  background: '#F7F9FB',
  //   padding: '24px',
  // border: '2px solid green',
  '@md': {
    height: '144px',

    flexDirection: 'row',
  },
});

const InfoWorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  margin: '24px',
  width: '100%',
  flexWrap: 'wrap',

  //   padding: '24px 24px',
  // border: '2px solid green',
});

const Block1 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  // width: '100%',
  flexWrap: 'wrap',
  // background: 'yellow',
  // border: '2px solid red',
});

const Header = styled('div', {
  // width: '100%',
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '16px',
  // border: '2px solid orange',
});

const Content = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  // width: '100%',
  '@md': {
    flexDirection: 'row',
  },
  // border: '2px solid red',
});

const InfoDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  // border: '2px solid orange',
  // justifyItems: 'start',
  // justifySelf: 'start',
  '@md': {
    alignItems: 'center',
    height: '52px',
    flexDirection: 'row',
    width: '650px',
  },
});

const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '100%',
  // border: '2px solid purple',
  margin: '12px 0',
  gap: '4px',

  '@md': {
    borderRight: '1px solid #E5E5E5',
    padding: '0 28px',
    gap: '8px',
  },

  '&:first-child': {
    // borderLeft: '10px solid #E5E5E5',
    '@md': {
      padding: '0 28px 0 0',
    },
  },
  '&:last-child': {
    '@md': {
      borderRight: 'none',
    },
  },
});

const InfoLabel = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  color: '#1C1C1C',
  fontSize: '14px',
  fontWeight: '400',
  whiteSpace: 'nowrap',

  // border: '2px solid purple',

  //   display: 'none',
});

const InfoText = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '18px',
  fontWeight: '600',
  whiteSpace: 'nowrap',

  // border: '2px solid orange',

  //   display: 'none',
});

const IconsDiv = styled('div', {
  //   width: '100%',
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // border: '2px solid purple',

  '@lg': {
    display: 'flex',

    marginLeft: 'auto',
    alignItems: 'end',
  },
});

const Icon = styled('img', {});
