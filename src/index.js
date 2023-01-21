import './scss/main.scss';

import { createStore } from "redux";

const initialState = {
	value: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return { ...state, value: state.value + 1 };
		case 'DEC':
			return { ...state, value: state.value - 1 };
		default:
			return state;
	}
};

const store = createStore(reducer);

document
	.getElementById('inc')
	.addEventListener('click', () => {
		store.dispatch({ type: 'INC' })
	});

document
	.getElementById('dec')
	.addEventListener('click', () => {
		store.dispatch({ type: 'DEC' })
	})

const update = () => {
	document
		.getElementById('counter')
		.innerHTML = store.getState().value;
}

store.subscribe(update)
