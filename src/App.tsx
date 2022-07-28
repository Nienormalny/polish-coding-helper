import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState<string>('World');
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => setName('Dude')} id="change">
        Changes
      </button>
    </div>
  );
};

export default App;
