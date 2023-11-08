import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamsList } from "../routes/routes";


export default function useResetNavigationSuccess() {

    const navigation = useNavigation()
    const navigateToSucess = (params: StackParamsList['Success']) => {

        navigation.reset({
            index: 0,
            routes: [
                {
                    name: 'Login'
                },
                {
                    name: 'Success',
                    params: params
                }
            ]
        })
    }


    return {
        navigateToSucess
    }
}