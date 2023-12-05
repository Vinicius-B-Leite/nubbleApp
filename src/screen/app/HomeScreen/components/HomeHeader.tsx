import React from 'react'

import { Box, BoxProps, Icon } from '@components'
import { useAppSafeArea } from '@hooks'

import LogoSimple from '../../../../assets/brands/SimpleLogo'

// import { Container } from './styles';

const HomeHeader: React.FC = () => {
	const { top } = useAppSafeArea()
	return (
		<Box {...wrapperStyle} style={{ paddingTop: top }}>
			<LogoSimple width={70} />
			<Box flexDirection="row" alignItems="center" gap="s24">
				<Icon name="search" />
				<Icon name="bellOn" />
				<Icon name="chatOn" />
			</Box>
		</Box>
	)
}

const wrapperStyle: BoxProps = {
	flexDirection: 'row',
	paddingHorizontal: 's24',
	pb: 's24',
	justifyContent: 'space-between',
}
export default HomeHeader
