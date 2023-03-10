import { useState } from 'react';

const Button = () => {
  const [showAnotherButton, setShowAnotherButton] = useState(false);

  return (
    <div>
      <button
        data-testid="button"
        onClick={() => {
          setShowAnotherButton(true);
        }}
      >
        CLICK HEREEEE
      </button>
      {showAnotherButton && (
        <button data-testid="button">CLICK HEREEEEE</button>
      )}
    </div>
  );
};

export default Button;
