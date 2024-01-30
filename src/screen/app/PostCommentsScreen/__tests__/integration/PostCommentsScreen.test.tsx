import React from 'react'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { mockedData, server, resetInMemoryResponse } from 'tests'
import { act, fireEvent, renderScreen, screen, waitFor, waitForElementToBeRemoved } from 'testUtils'

import { AppStackParamsList } from '@routes'

import { PostCommentScreen } from '../../PostCommentsScreen'
import { authStorage } from '@services'
import { Alert, AlertButton } from 'react-native'

beforeAll(() => {
	server.listen()
	jest.useFakeTimers()
})

afterEach(() => {
	server.resetHandlers()
	resetInMemoryResponse()
})

afterAll(() => {
	server.close()
	jest.useRealTimers()
	jest.resetAllMocks()
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
	test('when deleting a comment, the list is automatically updated and toast is displayed', async () => {
		jest.spyOn(authStorage, 'getAuth').mockResolvedValue(mockedData.mateusAuthCredentials)

		let mockedConfirm: AlertButton['onPress']

		const mockedAlert = jest.spyOn(Alert, 'alert').mockImplementation((title, message, buttons) => {
			if (buttons && buttons[0].onPress) {
				mockedConfirm = buttons[0].onPress
			}
		})
		const { getByPlaceholderText, getByTestId, queryByTestId } = renderScreen(
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
		const comment = await screen.findByText(mockedData.mateusPostCommentAPI.message, {
			exact: false,
		})

		fireEvent(comment, 'longPress')
		expect(mockedAlert).toHaveBeenCalled()

		mockedConfirm && mockedConfirm()

		await waitForElementToBeRemoved(() =>
			screen.getByText(mockedData.mateusPostCommentAPI.message, { exact: false })
		)

		await waitFor(() => expect(getByTestId('toast')).toBeTruthy())

		act(() => {
			jest.runAllTimers()
		})
		expect(queryByTestId('toast')).toBeNull()
	})
})
