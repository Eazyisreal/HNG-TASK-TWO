import './App.css';

import AppRouter from './components/router';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}
