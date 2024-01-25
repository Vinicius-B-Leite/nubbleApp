import React from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { server } from 'tests'
import { fireEvent, renderScreen } from 'testUtils'

import { AppStackParamsList } from '@routes'

import { PostCommentScreen } from '../../PostCommentsScreen'

beforeAll(() => {
	server.listen()
	jest.useFakeTimers()
})

afterEach(() => server.resetHandlers())

afterAll(() => {
	server.close()
	jest.useRealTimers()
})
describe('integration: PostCommentsScreen', () => {
	test('when add a comment the list is automatically updated', async () => {
		const { getByPlaceholderText, getByText, findByText } = renderScreen(
			<PostCommentScreen
				navigation={
					{} as NativeStackNavigationProp<AppStackParamsList, 'PostCommentScreen', undefined>
				}
				route={{
					name: 'PostCommentScreen',
					key: 'PostCommentsScreen',
					params: {
						postAuthorId: 1,
						postId: 1,
					},
				}}
			/>
		)

		const input = getByPlaceholderText('Adicione um comentário')
		fireEvent.changeText(input, 'new comment')

		const submitButton = getByText('Enviar')
		fireEvent.press(submitButton)

		const newComment = await findByText('new comment', { exact: false })
		expect(newComment).toBeTruthy()
	})
})
