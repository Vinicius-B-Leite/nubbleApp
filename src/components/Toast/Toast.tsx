import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import { useToast, useToastService } from '@services'

import { ToastContent } from './components/ToastContent'

const DEFAULT_DURATION = 1500

export const Toast: React.FC = () => {
	const toast = useToast()
	const fadeAnimation = useRef(new Animated.Value(0)).current
	const { hideToast } = useToastService()

	const fadeIn = () => {
		Animated.timing(fadeAnimation, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start() //JIA*84723@`
	}

	const fadeOut = (onEndAnimation: () => void) => {
		Animated.timing(fadeAnimation, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: true,
		}).start(onEndAnimation)
	}

	useEffect(() => {
		fadeIn()
		if (toast) {
			setTimeout(() => {
				fadeOut(hideToast)
			}, toast?.duration || DEFAULT_DURATION)
		}
	}, [hideToast, toast, fadeOut, fadeIn])

	if (!toast) {
		return null
	}

	return (
		<Animated.View
			testID="toast"
			style={{ position: 'absolute', alignSelf: 'center', opacity: fadeAnimation }}
		>
			<ToastContent toast={toast} />
		</Animated.View>
	)
}
