import React from 'react';
import WaitingListForm from './components/WaitingListForm';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1>Spot On <br />
          <span className="highlight">Parking At Your Finger Tips.</span>
        </h1>
        <p>Join Us, and watch parking be a whole lot easier.....</p>
      </div>
      <div className="right-section">
        <WaitingListForm />
      </div>
    </div>
  );
};

export default App;

