import DashboardArea from './views/DashboardArea';
import Calculator from './views/Calculator';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact>
          <DashboardArea />
        </Route>
        <Route path='/calculator' exact>
          <Calculator />
        </Route>
      </Router>
    </div>
  );
}

export default App;
