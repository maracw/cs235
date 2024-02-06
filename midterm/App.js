import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import LocalScreen from "./src/screens/LocalScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Favorite: FavoriteScreen,
    Local : LocalScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Hiker's Guide",
    },
  }
);

export default createAppContainer(navigator);
