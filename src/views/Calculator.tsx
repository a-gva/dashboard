import { styled } from '../theme/stitches.config';

import { useState, useEffect } from 'react';

import { calculatorTheme } from '../data/calculatorTheme';

import SumDivSub from '../elements/icons/SumDivSub';
import Percent from '../elements/icons/Percent';
import Delete from '../elements/icons/Delete';

import divide from '/assets/calculator/divide.svg';
import multiply from '/assets/calculator/multiply.svg';
import subtraction from '/assets/calculator/subtraction.svg';

export default function Calculator() {
  const darkTheme = calculatorTheme.dark;
  const lightTheme = calculatorTheme.light;

  const [currentTheme, setCurrentTheme] = useState('dark');
  const [theme, setTheme] = useState(darkTheme);
  const [mainDisplay, setMainDisplay] = useState<number>(0);
  const [auxiliaryDisplay, setAuxiliaryDisplay] = useState<number>(0);

  console.log('Calculator Full Object: ', calculatorTheme);
  console.log('theme to render: ', theme);
  console.log('bg theme: ', theme.background);

  const handleNumberClick = (number: number) => {
    if (mainDisplay == 0) {
      setMainDisplay(number);
      setAuxiliaryDisplay(number);
    } else {
      setMainDisplay(parseInt(`${mainDisplay}${number}`));
      setAuxiliaryDisplay(parseInt(`${mainDisplay}${number}`));
    }
  };

  const clearDisplay = () => {
    setMainDisplay(0);
    setAuxiliaryDisplay(0);
  };

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
      setTheme(darkTheme);
    } else {
      setCurrentTheme('light');
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    console.log('theme variable:', currentTheme);
  }, [currentTheme]);

  const CalculatorArea = styled('div', {
    display: 'flex',
    position: 'relative',
    width: '375px',
    height: '812px',
    background: `${theme.background}`,

    // background: '#fff',
    color: '#fff',
    fontFamily: 'Work Sans',
    borderRadius: '16px',
    // border: '3px solid orange',
  });

  const WorkableArea = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '60px 20px 66px 20px',
    // border: '3px solid white',
  });

  const TopArea = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    // background: '#2E2E38',
    width: '100%',
    height: '32px',
    marginBottom: '55px',
    // border: '3px solid red',
  });

  const ToggleTheme = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '32px',
    width: '72px',
    borderRadius: '16px',
    gap: '16px',
    cursor: 'pointer',
    // background: '#2E2E38',
    background: `${theme.themeButton.background}`,

    // border: '3px solid red',
  });

  const Button = styled('div', {
    width: '24px',
    height: '24px',
    background: '#4E505F',
    borderRadius: '50%',
    transition: 'transform 1s',
    '&:hover': {
      opacity: 0.5,
    },
  });

  const ThemeIcon = styled('img', {
    width: '16x',
    height: '16px',
  });

  const OperationsArea = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '599px',
    // border: '3px solid green',
  });
  const AuxiliaryDisplay = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: '16px',
    // border: '3px solid red',
  });
  const AuxiliaryData = styled('p', {
    fontSize: '40px',
    fontWeight: '300',
    // color: '#B3B3B3',
    color: `${theme.numbers.secondaryColor}`,

    // display: 'flex',
    // width: '100%',
    // border: '3px solid red',
  });

  const MainDisplay = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: '16px',

    // border: '3px solid red',
  });
  const MainData = styled('p', {
    fontSize: '96px',
    fontWeight: '300',
    color: `${theme.numbers.primaryColor}`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // display: 'flex',
    // width: '100%',
    // border: '3px solid red',
  });

  const KeysArea = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    // border: '3px solid red',
  });

  const Row = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    // height: '100%',
    // border: '3px solid blue',
  });

  const Key = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    width: '72px',
    height: '72px',
    cursor: 'pointer',
    // color: '#000',
    // border: '3px solid red',
    borderRadius: '16px',
    // hover
    '&:hover': {
      opacity: 0.5,
    },

    variants: {
      type: {
        number: {
          // background: '#2E2E38',
          background: `${theme.numbers.background}`,
          color: `${theme.numbers.primaryColor}`,
        },
        operator: {
          // background: '#4B5EFC',
          background: `${theme.operators.background}`,
        },
        specialOperator: {
          // background: '#4E505F',
          background: `${theme.specialOperators.background}`,
          color: `${theme.specialOperators.color}`,
        },
      },
    },
  });

  const Icon = styled('img', {});

  return (
    <CalculatorArea>
      <WorkableArea>
        <TopArea>
          <ToggleTheme onClick={toggleTheme}>
            {theme.id === 'dark' ? (
              <>
                <Button />
                <ThemeIcon
                  src={`/assets/icons/${theme.icon}`}
                  alt={theme.icon}
                />
              </>
            ) : (
              <>
                <ThemeIcon
                  src={`/assets/icons/${theme.icon}`}
                  alt={theme.icon}
                />
                <Button />
              </>
            )}
          </ToggleTheme>
        </TopArea>
        <OperationsArea>
          <AuxiliaryDisplay>
            <AuxiliaryData>{auxiliaryDisplay}</AuxiliaryData>
          </AuxiliaryDisplay>
          <MainDisplay>
            <MainData>{mainDisplay}</MainData>
          </MainDisplay>
          <KeysArea>
            <Row>
              <Key type='specialOperator' onClick={clearDisplay}>
                C
              </Key>
              <Key type='specialOperator'>
                <SumDivSub fill={theme.specialOperators.color} />
              </Key>
              <Key type='specialOperator'>
                <Percent fill={theme.specialOperators.color} />
              </Key>
              <Key type='operator'>
                <Icon src={divide} />
              </Key>
            </Row>
            <Row>
              <Key type='number' onClick={() => handleNumberClick(7)}>
                7
              </Key>
              <Key type='number' onClick={() => handleNumberClick(8)}>
                8
              </Key>
              <Key type='number' onClick={() => handleNumberClick(9)}>
                9
              </Key>
              <Key type='operator'>
                <Icon src={multiply} />
              </Key>
            </Row>
            <Row>
              <Key type='number' onClick={() => handleNumberClick(4)}>
                4
              </Key>
              <Key type='number' onClick={() => handleNumberClick(5)}>
                5
              </Key>
              <Key type='number' onClick={() => handleNumberClick(6)}>
                6
              </Key>
              <Key type='operator'>
                <Icon src={subtraction} />
              </Key>
            </Row>
            <Row>
              <Key type='number' onClick={() => handleNumberClick(1)}>
                1
              </Key>
              <Key type='number' onClick={() => handleNumberClick(2)}>
                2
              </Key>
              <Key type='number' onClick={() => handleNumberClick(3)}>
                3
              </Key>
              <Key type='operator'>+</Key>
            </Row>
            <Row>
              <Key type='number'>.</Key>
              <Key type='number'>0</Key>
              <Key type='number'>
                <Delete fill={theme.specialOperators.color} />
              </Key>
              <Key type='operator'>=</Key>
            </Row>
          </KeysArea>
        </OperationsArea>
      </WorkableArea>
    </CalculatorArea>
  );
}
