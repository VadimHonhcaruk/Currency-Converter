import { ITheme, ThemeEnum } from "../interfaces/styled";
import { DefaultTheme } from "styled-components";

export const baseTheme: ITheme = {
  colors: {
    bg: "#18191a",
    font: "#c5d3d3",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg: "#19191B",
    font: "#18191a",
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: "#18191a",
    font: "#c5d3d3",
  },
};
