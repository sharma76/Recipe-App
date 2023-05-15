import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";
import PropTypes from "prop-types";
function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function handleNavigation() {
      navigation.navigate("Meals", { catId:item.id});
    }
    return <CategoryGridTile item={item} onPress={handleNavigation} />;
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}
CategoriesScreen.prototype = {
  navigation: PropTypes.object,
};
export default CategoriesScreen;
