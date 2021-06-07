import React from 'react';
import Header from '../components/Header'
import Routes from '../Routes';
import Footer from '../components/Footer';

import './style.css'

function Application(){

    return (
        <div className="App">
            {/* <div className='mask'> */}
                {/* <Header title="Credenciamento"/> */}
                <Routes />
            {/* </div> */}
            {/* <Footer/> */}
        </div>
    );
}

export default Application;