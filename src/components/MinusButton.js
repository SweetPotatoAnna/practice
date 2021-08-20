import React from 'react';

function MinusButton(props) {
    return (
        <div>
            <button onClick={props.minus}>minus</button>
        </div>
    );
}

export default MinusButton;