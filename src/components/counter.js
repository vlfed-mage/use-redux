import React from "react";
import { connect } from "react-redux";

import * as actions from '../actions'

const Counter = ({ counter, ...actions }) => {
    const { inc, dec, rnd } = actions;

    return (
        <div className='jumbotron'>
            <h2>{ counter }</h2>
            <button
                onClick={ inc }
                className='btn btn-primary btn-md' >
                inc
            </button>
            <button
                onClick={ dec }
                className='btn btn-primary btn-md' >
                dec
            </button>
            <button
                onClick={ rnd }
                className='btn btn-primary btn-md' >
                rnd
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

export default connect(mapStateToProps, actions)(Counter);