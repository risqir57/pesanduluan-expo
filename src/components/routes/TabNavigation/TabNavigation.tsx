import * as React from "react";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeStack from "../Stacks/HomeStack";
import AccountStack from "../Stacks/AccountStack";
import NotificationStack from "../Stacks/NotificationStack";
import ActivityHistoryStack from "../Stacks/ActivityHistoryStack";
// import Documentation from '@src/components/screens/Documentation';

type TabNavigationProps = {};
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const renderTabBarIcon = (routeName: string) => {
  return (props: TabBarIconProps) => {
    const { color } = props;
    let iconName = "home";
    switch (routeName) {
      case "Beranda":
        iconName = "compass";
        break;
      case "History":
        iconName = "history";
        break;
      case "Notifikasi":
        iconName = "bell";
        break;
      case "Akun":
        iconName = "user";
        break;
      // case "Documentation":
      //   iconName = "book";
      //   break;
      default:
        break;
    }
    return <Icon name={iconName} solid size={22} color={color} />;
  };
};

const TabNavigation: React.FC<TabNavigationProps> = () => {
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          height: 55,
        },
        tabStyle: {
          height: 50,
        },
        labelStyle: {
          fontSize: 11,
        },
      }}
      screenOptions={(props) => {
        const {
          route: { name: routeName },
        } = props;
        return {
          tabBarIcon: renderTabBarIcon(routeName),
        };
      }}
    >
      <Screen name="Beranda" component={HomeStack} />
      <Screen name="History" component={ActivityHistoryStack} />
      <Screen name="Notifikasi" component={NotificationStack} />
      <Screen name="Akun" component={AccountStack} />
      {/* <Screen name="Documentation" component={Documentation} /> */}
    </Navigator>
  );
};

export default TabNavigation;
