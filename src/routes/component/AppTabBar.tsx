/* eslint-disable indent */
import React from 'react'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components'
import { useAppSafeArea } from '@hooks'

import { AppTabParamsList } from '../AppTabNavigator'

type MapScreenToProp = {
	label: string
	icon: {
		focused: IconProps['name']
		unfocused: IconProps['name']
	}
}
const mapScreenToProp: Record<keyof AppTabParamsList, MapScreenToProp> = {
	HomeScreen: {
		label: 'Início',
		icon: {
			focused: 'homeFill',
			unfocused: 'home',
		},
	},
	NewPostScreen: {
		label: 'Novo post',
		icon: {
			focused: 'newPost',
			unfocused: 'newPost',
		},
	},
	FavoriteScreen: {
		label: 'Favoritos',
		icon: {
			focused: 'bookmarkFill',
			unfocused: 'bookmark',
		},
	},
	MyProfileScreen: {
		label: 'Perfil',
		icon: {
			focused: 'profileFill',
			unfocused: 'profile',
		},
	},
}

const AppTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
	const { bottom } = useAppSafeArea()
	return (
		<Box
			flexDirection="row"
			backgroundColor="background"
			paddingTop="s12"
			style={{ paddingBottom: bottom }}
		>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]

				const tabItem = mapScreenToProp[route.name as keyof AppTabParamsList]

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params)
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					})
				}

				return (
					<TouchableOpacityBox
						key={index}
						alignItems="center"
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						activeOpacity={1}
						style={{ flex: 1 }}
					>
						<Icon name={tabItem.icon[isFocused ? 'focused' : 'unfocused']} />
						<Text
							mt="s4"
							semiBold
							color={isFocused ? 'primary' : 'backgroundContrast'}
							preset="paragraphCaption"
						>
							{tabItem.label}
						</Text>
					</TouchableOpacityBox>
				)
			})}
		</Box>
	)
}

export default AppTabBar
