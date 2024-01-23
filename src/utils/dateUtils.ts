import { parseISO, differenceInSeconds, format } from 'date-fns'

function formatRelative(dateISO: string) {
	const date = parseISO(dateISO)
	const now = Date.now()

	const diffInSeconds = differenceInSeconds(now, date)
	if (diffInSeconds < 60) {
		return `${diffInSeconds} s`
	}

	const diffInMinutes = Math.round(diffInSeconds / 60)
	if (diffInMinutes < 60) {
		return `${diffInMinutes} m`
	}

	const diffInHours = Math.round(diffInMinutes / 60)
	if (diffInHours < 24) {
		return `${diffInHours} h`
	}

	const diffInDays = Math.round(diffInHours / 24)
	if (diffInDays < 7) {
		return `${diffInDays} d`
	}

	const diffInWeeks = Math.round(diffInDays / 7)
	if (diffInWeeks < 4) {
		return `${diffInWeeks} sem`
	}

	const diffInMonth = Math.round(diffInDays / 30)
	if (diffInMonth < 12) {
		return `${diffInMonth} mes`
	}

	return format(date, 'dd/MM/yyyy')
}

export const dateUtils = {
	formatRelative,
}
