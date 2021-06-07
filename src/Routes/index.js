import React, {useContext} from 'react';
import {AuthContext} from '../Context';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes = () =>{

    const {isSigned} = useContext(AuthContext);
    
    return isSigned? <AppRoutes/> : <AuthRoutes />;
}

export default Routes;