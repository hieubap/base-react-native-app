import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import Calendar from "../screen/calendar";
import Home from "../screen/home";
import Setting from "../screen/setting";
import Stock from "../screen/stock";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

// const DrawManager = (props) => {
//   return (
//     <Drawer.Navigator
//       // drawerContent={(props) => <CustomDrawerContent {...props} />}
//       initialRouteName="Home"
//     >
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Calendar" component={Calendar} />
//       <Drawer.Screen name="Setting" component={Setting} />
//     </Drawer.Navigator>
//   );
// };

const screenOptions = [
  {
    name: "Home",
    icon: require("../assets/image/home.jpg"),
    iconActive: require("../assets/image/home-active.jpg"),
    component: Home,
  },
  {
    name: "Notification",
    icon: require("../assets/image/bell.jpg"),
    iconActive: require("../assets/image/bell-active.jpg"),
    component: Calendar,
  },
  {
    name: "Shop",
    icon: require("../assets/image/shop.jpg"),
    component: Setting,
  },
  {
    name: "Stock",
    icon: require("../assets/image/stock.jpg"),
    iconActive: require("../assets/image/stock-active.jpg"),
    component: Stock,
  },
  {
    name: "Setting",
    icon: require("../assets/image/setting.jpg"),
    component: Setting,
  },
];

function StackNavigation({ mode }) {
  return (
    <Tab.Navigator
      // headerMode="screen"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const currentScreen = screenOptions.find(
            (item) => item.name === route.name
          );
          // You can return any component that you like here!
          return (
            <Image
              source={
                focused
                  ? currentScreen.iconActive || currentScreen.icon
                  : currentScreen.icon
              }
              style={{ width: 32, height: 32, marginTop: 10 }}
            />
          );
        },
        tabBarLabel: "",
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {screenOptions.map((item, index) => (
        <Tab.Screen
          key={index + 1}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}

export default connect(({ navigation: { mode } }) => ({ mode }))(
  StackNavigation
);
