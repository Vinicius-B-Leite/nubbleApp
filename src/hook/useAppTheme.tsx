import { useTheme } from "@shopify/restyle";
import { Theme } from "../theme/theme";

export const useAppTheme = () => useTheme<Theme>()