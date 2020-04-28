import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  ExpensesScreen
} from "./screens/ExpensesScreen";

import {
    LoadingScreen
  } from "./screens/LoadingScreen";
  

const Router = createStackNavigator(
  {
    LoadingScreen,
    ExpensesScreen
  },
  {
    initialRouteName: "ExpensesScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);