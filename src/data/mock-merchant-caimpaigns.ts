import { ImageSourcePropType } from "react-native";

export type MerchantCampaign = {
  id: string;
  title: string;
  subTitle: string;
  code: string;
  image: ImageSourcePropType;
  backgroundColor: string;
};

export const mockMerchantCaimpaigns: MerchantCampaign[] = [
  {
    id: "1",
    title: "Enter LUCNCHBOX50",
    subTitle: "50% Off | 11:00PM - 2:00PM",
    code: "LUCNCHBOX50",
    image: require("@src/assets/campaigns/campaign-1.png"),
    backgroundColor: "#FB6930",
  },
  {
    id: "2",
    title: "Enter FREESHIP10",
    subTitle: "FREESHIP in District 10",
    code: "FREESHIP10",
    image: require("@src/assets/campaigns/campaign-2.png"),
    backgroundColor: "#75CCD3",
  },
  {
    id: "3",
    title: "Enter FREEBREAKFAST",
    subTitle: "FREE | 6:00AM - 10:00AM",
    code: "FREEBREAKFAST",
    image: require("@src/assets/campaigns/campaign-3.png"),
    backgroundColor: "#FB6930",
  },
  {
    id: "4",
    title: "Enter HAPPYMEAL",
    subTitle: "70% Off | 1:00PM - 3:00PM",
    code: "HAPPYMEAL",
    image: require("@src/assets/campaigns/campaign-4.png"),
    backgroundColor: "#28BBC7",
  },
];
