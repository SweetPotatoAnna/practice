import React, { useState } from 'react';
import { connect } from 'react-redux';
import counterReducer from '../reducers/counterReducer';

import AddButton from './AddButton';
import MinusButton from './MinusButton';

function Counter(props) {
    console.log(props)
    const [num, setNum] = useState(10);
    const add = () => setNum(num + 1);
    const minus = () => setNum(num - 1);
    return (
        <div>
            <div>{props.displayNum}</div>
            <AddButton add={props.add}/>
            <MinusButton minus={props.minus}/>
        </div>
    );
}

export default connect(
    (state, props) => ({
        displayNum: state.num
    }),
    dispatch => ({
        add: () => dispatch({ type: 'add'}),
        minus: () => dispatch({ type: 'minus'})
    })
)(Counter);