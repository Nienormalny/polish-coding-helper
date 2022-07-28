import React, { useEffect, useState } from 'react';

const Result = () => {
  const [stateName, setStateName] = useState<string>('stateName');

  useEffect(() => {
    console.log(stateName);
  }, []); // Component did mount (hook)

  return (
    <div>
      <h1>Component Title</h1>
    </div>
  );
};

export default Result;
