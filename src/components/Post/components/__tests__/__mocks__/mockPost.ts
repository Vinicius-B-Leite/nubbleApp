import { Post } from '@domain'

export const mockPost: Post = {
	id: 1,
	text: 'Texto de exemplo',
	author: {
		profileURL: 'https://exemplo.com/perfil.jpg',
		name: 'Nome de Exemplo',
		userName: 'usuario_exemplo',
		id: 2,
	},
	imageURL: 'https://exemplo.com/imagem.jpg',
	reactionCount: 10,
	commentCount: 5,
	favoriteCount: 3,
}
