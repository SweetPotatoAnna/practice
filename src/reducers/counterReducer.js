const initState = {
    num: 10,
    changeValue: 1
}
export default function counterReducer (state=initState, action) {
    let newState = {...state};
    switch(action.type) {
        case 'add':
            newState.num += 1;
            return newState;
        case 'minus':
            newState.num -= 1;
            return newState;
        default:
            return newState;
    }
}