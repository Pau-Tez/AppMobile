import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator,createStackNavigator} from 'react-navigation';
// import App from './App';
//Components
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import ButtonComponent from './components/ButtonComponent';
//Screen names
import { Home, Info, Settings, CButton } from './screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    Info: {
        path: '/info',
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    CButton: {
        screen: ButtonComponent,
    },
};
let drawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
    order: [Info, Settings, CButton, Home]
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('AppTeshis', () => App);
