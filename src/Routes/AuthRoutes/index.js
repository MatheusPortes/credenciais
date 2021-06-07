import Login from '../../Screen/Login';
import {Switch,Route} from 'react-router-dom';
import {useContext} from 'react';
import { AuthContext } from '../../Context';
import Registry from '../../Screen/Registry';
import Home from '../../Screen/Home';

const AuthRoutes = () =>{

    const {isSigned} = useContext(AuthContext);

    return (
        <Switch>
            {!isSigned?
                <>
                <Route path="/login" component={Login}/>
                <Route exact path="/" component={Home} />
                </>
                :
                <></>
            }
        </Switch>
    );
}

export default AuthRoutes;