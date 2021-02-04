import * as React from "react";
import { SafeAreaView, ScrollView, Image, View } from "react-native";
import { Container, SearchBar, Divider } from "@src/components/elements";
import styles from "./styles";
import { promotions } from "@src/data/mock-promotion";
import ListRowItem from "@src/components/elements/List/ListRowItem";
import { AppImagePlaceholder } from "@src/constants";

type PromotionProps = {};

const Promotion: React.FC<PromotionProps> = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Container>
          <SearchBar placeholder="Enter promo code here" />
        </Container>
        <Container style={styles.promotionListContainer}>
          {promotions.map((item) => {
            const { name, description, image, id } = item;
            return (
              <View key={id}>
                <ListRowItem
                  title={name}
                  subTitle={description}
                  leftIcon={
                    <Image
                      source={image}
                      style={styles.promotionImage}
                      defaultSource={AppImagePlaceholder}
                    />
                  }
                />
                <Divider />
              </View>
            );
          })}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Promotion;
