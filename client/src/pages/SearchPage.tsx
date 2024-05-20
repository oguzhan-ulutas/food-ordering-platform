import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

// export type SearchState = {
//   searchQuery: string;
//   page: number;
//   selectedCuisines: string[];
//   sortOption: string;
// };

const SearchPage = () => {
  const { city } = useParams();

  const { results } = useSearchRestaurants(city);

  return (
    <span>
      User search for {city}
      <span>
        found -
        {results?.data.map((restaurant) => (
          <span>
            {" "}
            {restaurant.restaurantName} {restaurant.city}{" "}
          </span>
        ))}
      </span>{" "}
    </span>
  );
};

export default SearchPage;
