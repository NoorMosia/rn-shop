import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Auth from '../screens/Auth';
import Drawer from '../Navigation/Drawer';

const Switch = createSwitchNavigator({
    Auth: Auth,
    drawer: Drawer
})

export default createAppContainer(Switch);