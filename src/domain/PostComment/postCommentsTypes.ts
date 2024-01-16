export type PostCommentsAPIResponse = {
	id: number
	message: string
	user_id: number
	post_id: number
	created_at: string
	updated_at: string
	user: {
		id: number
		first_name: string
		last_name: string
		username: string
		email: string
		profile_url: string
		is_online: boolean
		full_name: string
	}
	post: {
		id: number
		text: string
		user_id: number
		image_url: string
		is_fixed: boolean
		is_activated: boolean
		created_at: string
		updated_at: string
		status: string
		meta: unknown
	}
}

export type PostComments = {
	author: {
		id: number
		profileURL: string
		name: string
		userName: string
	}
	createdAt: string
	createdAtRelative: string
	message: string
	id: number
}
