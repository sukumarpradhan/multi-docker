import React from 'react';
import { Link } from 'react-router-dom';

function msg () 
{ 
    return(
        <div>
            I am some other page !
            <Link to="/">Go back Home</Link>
        </div>
    );
}

export default msg;