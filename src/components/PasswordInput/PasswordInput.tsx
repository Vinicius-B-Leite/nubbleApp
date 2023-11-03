import React, { useState } from 'react';
import TextInput, { TextInputProps } from '../TextInput';
import { Icon } from '../Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)


    const handleToggleSecureTextEntry = () => {
        setIsSecureTextEntry(old => !old)
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

export default PasswordInput;