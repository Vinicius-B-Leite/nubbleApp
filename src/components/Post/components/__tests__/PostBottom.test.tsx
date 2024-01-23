import React from 'react'

import { render, fireEvent } from 'testUtils'

import { PostBottom } from '../PostBottom'

import { mockPost } from './__mocks__/mockPost'

const mockNavigate = jest.fn()
jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useNavigation: () => ({
		navigate: mockNavigate,
	}),
}))
describe('PostBottom', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should render correctly with given props', () => {
		const post = mockPost

		const { getByText } = render(<PostBottom {...post} />)

		expect(getByText(post.author.userName)).toBeTruthy()
		expect(getByText(post.text)).toBeTruthy()
		expect(getByText('ver 5 comentários')).toBeTruthy()
	})

	it('should not show link to comments when there are no comments', () => {
		const { queryByText } = render(<PostBottom {...mockPost} commentCount={0} />)
		expect(queryByText('ver comentário')).toBeFalsy()
	})

	//teste o cenario de quando o commentCound é 1
	it('should show singular message comments when there is one comment', () => {
		const { getByText } = render(<PostBottom {...mockPost} commentCount={1} />)
		expect(getByText('ver comentário')).toBeTruthy()
	})

	it('should navigate to PostCommentScreen when comment text is clicked', () => {
		const post = mockPost

		const { getByText } = render(<PostBottom {...post} />)

		fireEvent.press(getByText('ver 5 comentários'))

		expect(mockNavigate).toHaveBeenCalledWith('PostCommentScreen', {
			postId: post.id,
			postAuthorId: post.author.id,
		})
	})
})
