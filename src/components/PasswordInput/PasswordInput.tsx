import React, { useState } from 'react'

import { TextInputProps, TextInput, Icon } from '@components'

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
	const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

	const handleToggleSecureTextEntry = () => {
		setIsSecureTextEntry((old) => !old)
	}
	return (
		<TextInput
			secureTextEntry={isSecureTextEntry}
			RightComponent={
				<Icon name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'} onPress={handleToggleSecureTextEntry} />
			}
			{...props}
		/>
	)
}
