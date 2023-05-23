import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="mb-3">
      <h5>Toggle Button</h5>
      <button onClick={handleToggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleButton;