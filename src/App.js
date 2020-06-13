import './App.css';

import React, { Fragment } from 'react';

function App() {
    return (
        <Fragment>
            <Button danger />
            <Button />
        </Fragment>
    );
}

const Button = ({ danger }) => (
    <button
        className={danger ? 'button button--danger' : 'button button--success'}
    >
        Hello
    </button>
);

export default App;
