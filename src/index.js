import './scss/main.scss';

import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';
import reducer from "./reducer";

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', inc);

document
    .getElementById('dec')
    .addEventListener('click', dec);

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const random = Math.floor(Math.random()*10 + 1);
        rnd(random)
    })

const update = () => {
    document
        .getElementById('counter')
        .innerText = getState().value;
};

subscribe(update);