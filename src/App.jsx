import React from 'react';
import './App.css';
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark text-light">
      <div className="card shadow-lg p-5 bg-secondary text-light rounded">
        <div className="card-body text-center">
          <ClockHeading className="mb-4" />
          <ClockSlogan className="mb-3" />
          <CurrentTime className="display-4 mt-4" />
        </div>
      </div>
    </div>
  );
}

export default App;