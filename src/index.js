import './scss/main.scss';

const initialState = {
	value: 0
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'INC':
			return { ...state, value: state.value + 1 };
		default:
			return state;
	}
};

let state = reducer(initialState, {});

state = reducer(state, { type: 'INC' });
console.log(state);

state = reducer(state, { type: 'INC' });
console.log(state);