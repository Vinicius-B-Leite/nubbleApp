import { AuthCredentials, User } from '@domain'

const user: User = {
	id: 1,
	firstName: 'Maria',
	lastName: 'Julia',
	username: 'mariajulia',
	email: 'mariajulia@coffstack.com',
	profileUrl:
		'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png',
	isOnline: false,
	fullName: 'Maria Julia',
}

const authCredentials: AuthCredentials = {
	refreshToken: 'refreshToken',
	token: 'token',
	user: user,
	tokenExpiresAt: 'tokenExpiresAt',
}

export const mock = {
	authCredentials,
}
