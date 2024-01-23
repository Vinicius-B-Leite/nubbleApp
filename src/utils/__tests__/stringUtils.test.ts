import { stringUtils } from '@utils'

describe('stringUtils', () => {
	describe('capitalizeFirstLetter', () => {
		it('should capitalize the first letter of each word in a string', () => {
			const result = stringUtils.capitalizeFirstLetter('hello world')
			expect(result).toBe('Hello World')
		})

		it('should return an empty string when input is an empty string', () => {
			const result = stringUtils.capitalizeFirstLetter('')
			expect(result).toBe('')
		})

		it('should handle single word strings', () => {
			const result = stringUtils.capitalizeFirstLetter('hello')
			expect(result).toBe('Hello')
		})

		it('should handle strings with leading and trailing spaces', () => {
			const result = stringUtils.capitalizeFirstLetter(' hello world ')
			expect(result).toBe('Hello World')
		})
	})
})
