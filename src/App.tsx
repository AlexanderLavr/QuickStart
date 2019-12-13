import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './components/main'; 
import PropTypes from 'prop-types';
import configStore from './redux/store';

const store = configStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={ Main } />
      </Router>
    </Provider>
  );
}

export default App;
