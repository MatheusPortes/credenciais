import {Switch, Route} from 'react-router-dom';
import Info from '../../Screen/Info';
import Home from '../../Screen/Home';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/home" component={Info} />
        </Switch>
    );
}

export default AppRoutes;