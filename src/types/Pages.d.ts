export type MetaDataPage = {
	total: number
	perPage: number
	currentPage: number
	lastPage: number
	firstPage: number
	hasNextPage: boolean
	hasPreviousPage: boolean
}

export type Page<D> = {
	data: D[]
	meta: MetaDataPage
}
