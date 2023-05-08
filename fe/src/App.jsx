import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import MainPage from './components/MainPage';

function App() {
  const [websiteStatus, setWebsiteStatus] = useState(null);

  const handleStatusUpdate = (status) => {
    setWebsiteStatus('UP');
  };

  return (
    <div>
      <MainPage  />
      {/* <Chatbot  /> */}
    </div>
  );
}

export default App;

