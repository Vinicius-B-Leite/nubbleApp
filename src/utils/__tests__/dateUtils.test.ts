import {
	subSeconds,
	subMinutes,
	subHours,
	subDays,
	subWeeks,
	subMonths,
	subYears,
	format,
} from 'date-fns'

import { dateUtils } from '../dateUtils'

describe('dateUtils', () => {
	describe('formatRelative', () => {
		beforeAll(() => {
			jest.spyOn(Date, 'now').mockImplementation(() => 1696573824333)
		})
		afterAll(() => {
			jest.clearAllMocks()
		})
		it('should format seconds difference correctly', () => {
			const date = subSeconds(Date.now(), 30).toISOString()
			expect(dateUtils.formatRelative(date)).toBe('30 s')
		})

		it('should format minutes difference correctly', () => {
			const date = subMinutes(Date.now(), 30).toISOString()
			expect(dateUtils.formatRelative(date)).toBe('30 m')
		})

		it('should format hours difference correctly', () => {
			const date = subHours(Date.now(), 12).toISOString()
			expect(dateUtils.formatRelative(date)).toBe('12 h')
		})

		it('should format days difference correctly', () => {
			const date = subDays(Date.now(), 3).toISOString()
			expect(dateUtils.formatRelative(date)).toBe('3 d')
		})
		it('should format weeks difference correctly', () => {
			const date = subWeeks(Date.now(), 1).toISOString()
			expect(dateUtils.formatRelative(date)).toBe('1 sem')
		})
		it('should format months difference correctly', () => {
			const date = subMonths(Date.now(), 1).toISOString()
			expect(dateUtils.formatRelative(date)).toBe('1 mes')
		})
		it('should format years difference correctly', () => {
			const date = subYears(Date.now(), 2).toISOString()
			expect(dateUtils.formatRelative(date)).toBe(format(date, 'dd/MM/yyyy'))
		})
	})
})
