import initialState from './initial-state';

const reducer = (state = initialState, action) => {
    const { type, random } = action;

    switch (type) {
        case 'INC':
            return { ...state, value: state.value + 1 };
        case 'DEC':
            return { ...state, value: state.value - 1 };
        case 'RND':
            return { ...state, value: state.value + random };
        default:
            return state;
    }
}

export default reducer;