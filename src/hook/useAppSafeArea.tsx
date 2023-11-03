import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "./useAppTheme";

const useAppSafeArea = () => {
    const { top, bottom } = useSafeAreaInsets()
    const { spacing } = useAppTheme()

    return {
        top: Math.max(top, spacing.s24),
        bottom: Math.max(bottom, spacing.s24)
    }
}

export default useAppSafeArea;