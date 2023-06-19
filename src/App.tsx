import React from 'react';
import ComA from './ComA';
import ComB from './ComB';

interface States {
    counter: number;
};

class App extends React.Component<{}, States> {
    public render(): React.ReactNode {
        return (
            <div id="app">
                
            </div>
        );
    }
}

export default App;