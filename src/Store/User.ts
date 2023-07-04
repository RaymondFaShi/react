import React, { useState } from 'react';

type state = {
    counter: number
};

type store = {
    user: state,
    dispatch: any
};

export const reducer: React.Reducer<state, { type: string }> = ( prev_state, action ) => {
    return { counter: 1 };
};

export const context: React.Context<store> = React.createContext( { user: { counter: 0 }, dispatch: '' } );

