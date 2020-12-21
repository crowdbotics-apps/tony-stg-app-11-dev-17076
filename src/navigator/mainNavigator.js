import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen215994Navigator from '../features/BlankScreen215994/navigator';
import BlankScreen115993Navigator from '../features/BlankScreen115993/navigator';
import BlankScreen015992Navigator from '../features/BlankScreen015992/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen215994: { screen: BlankScreen215994Navigator },
BlankScreen115993: { screen: BlankScreen115993Navigator },
BlankScreen015992: { screen: BlankScreen015992Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
