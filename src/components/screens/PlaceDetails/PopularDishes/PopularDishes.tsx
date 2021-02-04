import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { Carousel, Section, Card, Text } from "@src/components/elements";
import { Dimensions } from "react-native";
import {
  Dish,
  mockDishDetails,
  mockPlaces,
  mockPopularDish,
  Place,
} from "@src/data/mock-places";
import { formatCurrency } from "@src/utils/number-formatter";

type PopularDishesProps = {};

const PopularDishes: React.FC<PopularDishesProps> = () => {
  const navigation = useNavigation();

  const _onButtonActionPressed = () => {
    navigation.navigate("PlaceListScreen", { title: "What's Popular Here" });
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate("DishDetailsModal");
  };

  return (
    <Section
      title="Rekomendasi"
      actionButtonText="Lihat semua"
      onButtonActionPressed={_onButtonActionPressed}
    >
      <Carousel
        data={mockPopularDish}
        itemWidth={Dimensions.get("window").width / 2 - 15}
        renderContent={(item: Dish, _, parallaxProps) => {
          const { image, title, description } = item;
          return (
            <Card
              coverImage={image}
              isSmallCover
              title={title}
              subTitle={description}
              parallaxProps={parallaxProps}
              onPress={_onPlaceItemPressed}
            >
              <Text isPrimary isBold>
                {formatCurrency(10000)}
              </Text>
            </Card>
          );
        }}
      />
    </Section>
  );
};

export default PopularDishes;
