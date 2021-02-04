import * as React from "react";
import { Card, Container, Icon, Text } from "@src/components/elements";
import PlaceCardInfo from "@src/components/common/PlaceCardInfo";
import styles from "./styles";
import { Place } from "@src/data/mock-places";

type HeadingInformationProps = {
  data: Place;
};

const HeadingInformation: React.FC<HeadingInformationProps> = ({ data }) => {
  const { title, subTitle } = data;
  return (
    <Card
      isSmallCover
      title={title}
      subTitle={subTitle}
      titleStyle={styles.title}
      style={styles.headingContainer}
    >
      <PlaceCardInfo data={data} />
      <Container style={styles.infoSection}>
        <Text style={styles.label}>Jadwal</Text>
        <Text>09:30 AM - 10:00PM</Text>
      </Container>
      <Container style={styles.infoSection}>
        <Text style={styles.label}>Promo</Text>
        <Container>
          <Container style={styles.coupon}>
            <Icon name="tag" style={styles.couponIcon} isPrimary />
            <Text isPrimary>Gratis Biaya Pengantaran</Text>
          </Container>
          <Container style={styles.coupon}>
            <Icon name="tag" style={styles.couponIcon} isPrimary />
            <Text isPrimary>5% untuk semua menu</Text>
          </Container>
        </Container>
      </Container>
    </Card>
  );
};

export default HeadingInformation;
