import React from 'react';
import ComA from './ComA';
import ComB from './ComB';
import ComC from './ComC';
import { context, reducer } from './Store/User';

const App = () => {
    const [ user, dispatch ] = React.useReducer( reducer, { counter: 0 } );
    return (
        <div id="app">
            <context.Provider value={ { user, dispatch } }>
                <ComA />
                <ComB>
                    <ComC />
                </ComB>
            </context.Provider>
        </div>
    );
}

export default App;