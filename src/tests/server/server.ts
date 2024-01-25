import { setupServer } from 'msw/node'

import { postCommentsHandlers } from './postComments/postCommentsHandlers'

export const server = setupServer(...postCommentsHandlers)
