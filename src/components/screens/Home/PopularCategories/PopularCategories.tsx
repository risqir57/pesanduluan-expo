import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme, useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text, Container, Touchable } from "@src/components/elements";
import { mockCategories } from "@src/data/mock-categories";
import styles from "./styles";

type PopularCategoriesProps = {};

const PopularCategories: React.FC<PopularCategoriesProps> = () => {
  const navigation = useNavigation();
  const {
    colors: { primary, card },
  } = useTheme();

  const _onButtonCategoryItemPressed = (name: string) => {
    return () => {
      navigation.navigate("PlaceListScreen", { title: name });
    };
  };

  return (
    <Container style={styles.categoryContainer}>
      {mockCategories.map((category) => {
        const { id, image, name } = category;
        return (
          <Touchable key={id} onPress={_onButtonCategoryItemPressed(name)}>
            <View style={[styles.categoryItem, { borderColor: card }]}>
              <Container>
                <Svg viewBox="0 0 300 300" {...styles.categoryImage}>
                  <Path
                    d="M80.6,16.74c-34.4,17.78-64.79,53.33-74,86C-17.45,190.48,36.45,279.93,123,296l21.22,4V250.11c0-47.59-1.15-51-17.2-70-19.5-21.79-22.36-47-9.75-78,17.2-40.71,43.58-41.29,61.93-2.3,16.05,35.56,13.76,57.34-6.31,80.85-17.2,18.93-17.78,21.22-16.06,67.66l1.72,47.6,18.93-1.72c25.23-1.72,57.34-18.93,79.7-42.44,51-53.32,56.19-136.46,11.47-195C226.25,1.26,143.68-16.51,80.6,16.74Z"
                    fill={primary}
                  />
                </Svg>
              </Container>
              <Container>
                <Text style={styles.categoryTitle}>{name}</Text>
              </Container>
            </View>
          </Touchable>
        );
      })}
    </Container>
  );
};

export default PopularCategories;
