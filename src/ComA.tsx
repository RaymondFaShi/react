
import React, { useContext } from 'react';
import { context } from './Store/User';


const ComA = () => {
    const { user, dispatch } = useContext( context );
    return (
        <div id="com_a">
            A:{user.counter}
        </div>
    );
}
export default ComA;
