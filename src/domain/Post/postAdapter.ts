import { Post, PostAPI } from './postTypes'

/**
 * @description Adapta o PostAPI para o modelo de Post
 */
function parseToPost(postApi: PostAPI): Post {
	return {
		author: {
			name: postApi.user.full_name,
			profileURL: postApi.user.profile_url,
			userName: postApi.user.username,
		},
		commentCount: parseInt(postApi.meta.comments_count, 10),
		favoriteCount: parseInt(postApi.meta.favorite_count, 10),
		reactionCount: parseInt(postApi.meta.like_count, 10),
		id: String(postApi.id),
		imageURL: postApi.image_url,
		text: postApi.text,
	}
}

export const postAdapter = { parseToPost }
