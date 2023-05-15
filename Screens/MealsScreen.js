import { FlatList } from "react-native";

import { MEALS } from "../Data/dummy-data";

import { useLayoutEffect } from "react";
import { CATEGORIES } from "../Data/dummy-data";
import RenderMeals from "../Components/RenderMeals";

function MealsScreen({ route, navigation }) {
  const catID = route.params.catId;

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catID).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catID, CATEGORIES, navigation]);

  const filteredMealData = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catID) >= 0;
  });

  return (
    <FlatList
      data={filteredMealData}
      keyExtractor={(meal) => meal.id}
      renderItem={({ item }) => <RenderMeals item={item} />}
    />
  );
}

export default MealsScreen;
