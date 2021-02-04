import * as React from "react";
import { View } from "react-native";
import Button from "../Button";
import Text from "../Text";
import styles from "./styles";

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
  actionButtonText?: string;
  withTopSpace?: boolean;
  onButtonActionPressed?: () => void;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  actionButtonText,
  onButtonActionPressed,
  withTopSpace,
}) => {
  const _onButtonActionPressed = () => {
    if (onButtonActionPressed) {
      onButtonActionPressed();
    }
  };

  return (
    <View
      style={[
        styles.sectionContainer,
        withTopSpace && styles.sectionContainerWithTopSpace,
      ]}
    >
      {(title || actionButtonText) && (
        <View style={styles.sectionTitleContainer}>
          {title && <Text style={styles.sectionTitle}>{title}</Text>}
          {actionButtonText && (
            <Button onPress={_onButtonActionPressed} isTransparent>
              <Text style={styles.actionButtonText} isPrimary>
                {actionButtonText}
              </Text>
            </Button>
          )}
        </View>
      )}
      {children}
    </View>
  );
};

export default Section;
