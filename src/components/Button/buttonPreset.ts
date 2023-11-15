import { ThemeColors } from "@theme"
import { TouchableOpacityBoxProps } from "@components"


export type ButtonPreset = 'primary' | 'outline'

export type ButtonUI = {
    container: TouchableOpacityBoxProps
    content: ThemeColors
}

export const buttonPreset: Record<ButtonPreset, {
    default: ButtonUI
    disabled: ButtonUI
}> = {
    outline: {
        default: {
            container: {
                borderColor: 'buttonPrimary',
                borderWidth: 1
            },
            content: 'buttonPrimary'
        },
        disabled: {
            container: {
                borderColor: 'gray1',
                borderWidth: 1
            },
            content: 'gray1'
        }
    },
    primary: {
        default: {
            container: {
                backgroundColor: 'buttonPrimary'
            },
            content: 'primaryContrast'
        },
        disabled: {
            container: {
                backgroundColor: 'gray4',
            },
            content: 'gray2'
        }
    }
}
