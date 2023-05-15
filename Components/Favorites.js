import RenderMeals from "../Components/RenderMeals";
import { useContext } from "react";
import FavoriteContext from "../Context/Context";
import { MEALS } from "../Data/dummy-data";
import { FlatList } from "react-native";
export default function Favorites() {
  const FavoriteCxt = useContext(FavoriteContext);
  const filteredMealData = MEALS.filter(
    (meal) =>FavoriteCxt.ids.indexOf(meal.id)>=0
  );

  return (
    <FlatList
      data={filteredMealData}
      keyExtractor={(meal) => meal.id}
      renderItem={({ item }) => <RenderMeals item={item} />}
    />
  );
}
