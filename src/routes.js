import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';

import Explore from './pages/explore';
import Save from './pages/save';
import Trips from './pages/trips';
import Imbox from './pages/imbox';
import Profile from './pages/profile';

import Category from './component/explore/category';
import Home from './component/explore/home';

export default createStackNavigator(
    {
        Main,
        Explore,
        Save,
        Trips,
        Imbox,
        Profile,
        Category,
        Home,
    },
);