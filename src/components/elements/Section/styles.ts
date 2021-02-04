import { spaceBeetwenSection } from "./../../../styles/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#fff",
  },
  sectionContainerWithTopSpace: {
    marginTop: spaceBeetwenSection,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    minHeight: 50,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  actionButtonText: {
    fontSize: 14,
  },
});
