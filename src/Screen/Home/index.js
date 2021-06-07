import React,{ useEffect, useState } from 'react';
import './style.css';
// import QrCode from '../../components/QrCode';
const QRCode = require('qrcode.react');

const Home = (props) =>{

    const [urlQr,setUrlQr] = useState('http://localhost:3000');

    useEffect(()=>{
        setUrlQr('http://localhost:3000');
    },[]);

    async function testDatabase(){
        
       console.log(process.env.DB_NAME);
    }

    return (
        <section className='section' style={{display: props.location.pathname !== '/'? 'none': 'flex'}}>

            <div className="section_search">
                <div className='div_search'>
                    <input type='search' name='search' className='search'/>
                </div>
                   <QRCode value={urlQr} />
            </div>

            <div className="section_aside">
                second
            </div>

        </section>
    );
}

export default Home;

function QR(props){
    return 
}