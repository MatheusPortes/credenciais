import "./style.css";
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Context';
import { useContext } from "react";


const Header = (props) =>{
    
    const {isSigned} = useContext(AuthContext);

    return (
        <nav className="header">
            <div style={{display: 'flex', justifyContent: 'space-around',alignItems: 'center',height: '100%', width: '100%'}}>

                <Link to='/'><div id="logo"></div></Link>
                
                <h1>{props.title}</h1>

                <ul className="list">
                    {!isSigned?
                        <>
                        <li className='link_header'>
                            <Link to="/login">Login</Link>
                        </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/teste">link 1</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Header;