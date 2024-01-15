import { MetaDataPage } from '@types'

import { MetaDataPageAPI } from './apiTypes'

function parseToMetaDatePage(meta: MetaDataPageAPI): MetaDataPage {
	return {
		currentPage: meta.current_page,
		firstPage: meta.first_page,
		total: meta.total,
		perPage: meta.per_page,
		lastPage: meta.last_page,
		hasNextPage: !!meta.next_page_url,
		hasPreviousPage: !!meta.previous_page_url,
	}
}

export const apiAdapter = { parseToMetaDatePage }
