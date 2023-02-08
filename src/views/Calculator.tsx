import { styled } from '../theme/stitches.config';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const [calc, setCalc] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const ops = ['+', '-', '*', '/', '.'];

  const updateCalc = (value: string) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearDisplay = () => {
    setCalc('');
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
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '375px',
    height: '812px',
    background: `${theme.background}`,
    color: '#fff',
    fontFamily: 'Work Sans',
    borderRadius: '16px',
    // border: '3px solid orange',
  });

  const TopDiv = styled('div', {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
    padding: '0px 20px',
    // border: '3px solid red',
  });

  const DashBoardLink = styled(Link, {
    fontSize: '14px',
    textDecoration: 'none',
    color: `${theme.numbers.secondaryColor}`,
    padding: '5px 20px',
    '&:hover': {
      opacity: 0.5,
    },
  });

  const BottomDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '40px 20px',
    // border: '3px solid white',
  });

  const ThemeDiv = styled('div', {
    display: 'flex',
    justifyContent: 'center',
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
    alignItems: 'center',
    height: '599px',
    padding: '10px 20px',
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
    color: `${theme.numbers.secondaryColor}`,
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
    justifyContent: 'center',
    gap: '16px',
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
    borderRadius: '16px',
    // border: '3px solid ',

    '&:hover': {
      opacity: 0.5,
    },

    variants: {
      type: {
        number: {
          background: `${theme.numbers.background}`,
          color: `${theme.numbers.primaryColor}`,
        },
        operator: {
          background: `${theme.operators.background}`,
        },
        specialOperator: {
          background: `${theme.specialOperators.background}`,
          color: `${theme.specialOperators.color}`,
        },
      },
    },
  });

  const Icon = styled('img', {});

  return (
    <CalculatorArea>
      <TopDiv>
        <DashBoardLink to='/'>Dashboard</DashBoardLink>
      </TopDiv>
      <BottomDiv>
        <ThemeDiv>
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
        </ThemeDiv>
        <OperationsArea>
          <AuxiliaryDisplay>
            <AuxiliaryData> {result ? result : '0'}</AuxiliaryData>
          </AuxiliaryDisplay>
          <MainDisplay>
            <MainData>{calc || '0'}</MainData>
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
              <Key type='operator' onClick={() => updateCalc('/')}>
                <Icon src={divide} />
              </Key>
            </Row>
            <Row>
              <Key type='number' onClick={() => updateCalc('7')}>
                7
              </Key>
              <Key type='number' onClick={() => updateCalc('8')}>
                8
              </Key>
              <Key type='number' onClick={() => updateCalc('9')}>
                9
              </Key>
              <Key type='operator' onClick={() => updateCalc('*')}>
                <Icon src={multiply} />
              </Key>
            </Row>
            <Row>
              <Key type='number' onClick={() => updateCalc('4')}>
                4
              </Key>
              <Key type='number' onClick={() => updateCalc('5')}>
                5
              </Key>
              <Key type='number' onClick={() => updateCalc('6')}>
                6
              </Key>
              <Key type='operator' onClick={() => updateCalc('-')}>
                <Icon src={subtraction} />
              </Key>
            </Row>
            <Row>
              <Key type='number' onClick={() => updateCalc('1')}>
                1
              </Key>
              <Key type='number' onClick={() => updateCalc('2')}>
                2
              </Key>
              <Key type='number' onClick={() => updateCalc('3')}>
                3
              </Key>
              <Key type='operator' onClick={() => updateCalc('+')}>
                +
              </Key>
            </Row>
            <Row>
              <Key type='number' onClick={() => updateCalc('.')}>
                .
              </Key>
              <Key type='number' onClick={() => updateCalc('0')}>
                0
              </Key>
              <Key type='number' onClick={deleteLast}>
                <Delete fill={theme.specialOperators.color} />
              </Key>
              <Key type='operator' onClick={calculate}>
                =
              </Key>
            </Row>
          </KeysArea>
        </OperationsArea>
      </BottomDiv>
    </CalculatorArea>
  );
}
