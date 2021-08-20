import React from 'react';

function AddButton(props) {
    return (
        <div>
            <button onClick={props.add}>add</button>
        </div>
    );
}

export default AddButton;