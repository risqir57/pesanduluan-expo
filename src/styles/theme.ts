import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";

type CustomTheme = {
  colors: {
    secondary: string;
    backdrop: string;
  };
};
export type AppTheme = Theme & CustomTheme;

export const lightTheme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FC6A57",
    backdrop: "rgb(242, 242, 242)",
    background: "#f7f7f7",
    secondary: "#9b9b9b",
    text: "#333333",
    border: "#ededed",
  },
};
export const darkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#FC6A57",
    secondary: "#cccccc",
    backdrop: "rgb(242, 242, 242)",
    card: "#282828",
    background: "#121212",
    border: "#333333",
  },
};

export const spaceBeetwenSection: number = 8;
