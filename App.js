import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesScreen from "./Screens/CategoriesScreen";
import MealsScreen from "./Screens/MealsScreen";
import RecipeScreen from "./Screens/RecipeScreen";
import Favorites from "./Components/Favorites";
import { NavigationContainer } from "@react-navigation/native";
import { FavoriteContextProvider } from "./Context/Context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MealsCategories">
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: () => <Ionicons name="list" size={25} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{ drawerIcon: () => <Ionicons name="star" size={25} /> }}
      />
    </Drawer.Navigator>
  );
}
function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
            <Stack.Screen name="Meals" component={MealsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
export default App;
