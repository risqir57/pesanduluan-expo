import * as React from "react";
import { View, Image } from "react-native";
import { Profile } from "@src/data/mock-profile";
import { Text } from "@src/components/elements";
import styles from "./styles";
import { AppImagePlaceholder } from "@src/constants";

type HeadingInformationProps = {
  profile: Profile;
};

const HeadingInformation: React.FC<HeadingInformationProps> = ({ profile }) => {
  return (
    <View>
      <Image
        source={profile.coverPhoto}
        style={styles.coverPhoto}
        resizeMode="cover"
        defaultSource={AppImagePlaceholder}
      />
      <View style={styles.informationContainer}>
        <Image
          source={profile.avatar}
          style={styles.avatar}
          defaultSource={AppImagePlaceholder}
        />
        <Text isHeadingTitle style={styles.name}>
          {profile.name}
        </Text>
        <Text style={styles.memberPoints}>73 Points | Gold Member</Text>
      </View>
    </View>
  );
};

export default HeadingInformation;
