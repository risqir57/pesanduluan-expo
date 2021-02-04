import * as React from "react";
import { Container, Text } from "@src/components/elements";
import styles from "./styles";

type DeliveryTimeProps = {};

const date = new Date();

const DeliveryTime: React.FC<DeliveryTimeProps> = () => {
  return (
    <Container style={styles.deliveryTimeContainer}>
      <Text isSecondary>Waktu Pengantaran</Text>
      <Text isPrimary isHeadingTitle isBold>
        {date.getHours()}:{date.getMinutes()}
      </Text>
    </Container>
  );
};

export default DeliveryTime;
