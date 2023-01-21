import './scss/main.scss';

import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch, getState, subscribe } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

document
	.getElementById('inc')
	.addEventListener('click', inc);

document
	.getElementById('dec')
	.addEventListener('click', dec);

document
	.getElementById('rnd')
	.addEventListener('click', () => {
		const payload = Math.floor(Math.random()*10+1); // extra param for action
		rnd(payload)
	});

const update = () => {
	document
		.getElementById('counter')
		.innerHTML = getState().value;
};

subscribe(update);
