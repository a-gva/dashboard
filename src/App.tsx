import DashboardArea from './views/DashboardArea';
import Calculator from './views/Calculator';

import { styled } from '../src/theme/stitches.config';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <AppDiv>
      <Router>
        <Route path='/' exact>
          <DashboardArea />
        </Route>
        <Route path='/calculator' exact>
          <Calculator />
        </Route>
      </Router>
    </AppDiv>
  );
}

const AppDiv = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  background: '#ebeef3',
  /* flex-direction: column; */
  /* align-items: center; */
  height: '100%',
});

export default App;
