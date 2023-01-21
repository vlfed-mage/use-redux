import './scss/main.scss';

import { createStore } from "redux";

const initialState = {
	value: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return { ...state, value: state.value + 1 };
		default:
			return state;
	}
};

const store = createStore(reducer);
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
