import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import SplashScreen from './src/screens/SplashScreen';
import NoticeScreen from './src/screens/NoticesScreen';
import cambiarContra from './src/screens/newPassword';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Calendar: CalendarScreen,
    Splash: SplashScreen,
    Notice: NoticeScreen,
    Cambiar: cambiarContra,
  },
  {

    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'DiarioAdiario App',
    },
    headerLayoutPreset: 'center'
  },

);

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer;

