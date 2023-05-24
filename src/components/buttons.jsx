import React from 'react';


const Button = ({ bgcolor = 'blue', color = 'white', text, fontsize = '1rem' }) => {
    return (
        <button style={{ backgroundColor: bgcolor, color, fontSize: fontsize }}>{text}</button>
    );
};


return (
    <div className="test-components">
    <Button text="Click me" />
    <Button fontsize="2rem" text="Hover me" />
</div>

  );

export default Card;
