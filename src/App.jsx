import React, { useState } from 'react';
import Loader from './components/Loader';
import Home from './pages/Home';
import './styles.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Home />
    </>
  );
};

export default App;
