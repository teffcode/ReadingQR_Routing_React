import React from 'react';
import{ Match, Link } from 'react-router';
import Code_qr from './teacher/qr';
import Start from './student/start';

function Pages(){
    return (
        <main role="application">
            <Match
                pattern="/"
                exactly
                component={Code_qr}
            />
            <Match
                pattern="/about"
                exactly
                component={Start}
            />
        </main>
    );
}

export default Pages;