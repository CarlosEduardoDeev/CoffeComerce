import  "styled-components";
import { defaultTheme } from "../Style/Theme/Default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType{}
}