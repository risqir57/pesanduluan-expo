import * as React from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Text, Touchable } from "@src/components/elements";
import { Dish } from "@src/data/mock-places";
import styles from "./styles";
import { formatCurrency } from "@src/utils/number-formatter";
import { AppImagePlaceholder } from "@src/constants";

type DishItemProps = {
  data: Dish;
};

const DishItem: React.FC<DishItemProps> = ({ data }) => {
  const { price, title, description, image } = data;
  const navigation = useNavigation();

  const _onPlaceItemPressed = () => {
    navigation.navigate("DishDetailsModal");
  };

  return (
    <Touchable onPress={_onPlaceItemPressed}>
      <Container style={styles.container}>
        {image && (
          <Image
            style={styles.image}
            source={{
              uri:
                "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            }}
            defaultSource={AppImagePlaceholder}
          />
        )}
        <View style={styles.placeInfoContainer}>
          <View style={styles.placeInfo}>
            <Text style={styles.placeTitle}>{title}</Text>
            <Text style={styles.placeSubTitle}>{description}</Text>
            <Text isPrimary isBold>
              {formatCurrency(parseInt(price))}
            </Text>
          </View>
        </View>
      </Container>
    </Touchable>
  );
};

export default DishItem;
