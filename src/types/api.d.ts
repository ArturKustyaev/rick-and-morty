interface ResponseData<T> {
	info: PageInfo
	results: T
}

interface PageInfo {
	count: number
	pages: number
	prev: string | null
	next: string | null
}
