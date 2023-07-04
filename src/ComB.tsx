
import React, { useState ,useEffect, useCallback, useReducer, Reducer, useContext } from 'react';
import { context } from './Store/User';
const ComB: any = () => {
    const { user, dispatch } = useContext( context );
    
    const hander = () => {
        dispatch( { type: 'test' } );
    }

    return (
        <div>
            B:{user.counter}
            <button onClick={hander}>111</button>
        </div>
    );
}

export default ComB;
