
import React, { useState ,useEffect, useCallback, useReducer, useContext } from 'react';
import { context } from './Store/User';
const ComC: React.FC = () => {
    const { user, dispatch } = useContext( context );
    return (
        <div>
            <span>C:{user.counter}</span>
        </div>
    );
}

export default ComC;
