import React from 'react'
import { Image } from 'react-native'

type ProfileAvatarProps = {
	profileURL: string

	/** @default 32 */
	size?: number

	/** @default 14 */
	borderRadius?: number
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
	profileURL,
	size = 32,
	borderRadius = 14,
}) => {
	return <Image source={{ uri: profileURL }} style={{ width: size, height: size, borderRadius }} />
}
