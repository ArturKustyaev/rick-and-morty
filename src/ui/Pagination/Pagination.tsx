import classNames from 'classnames'
import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import classes from './Pagination.module.css'

export interface PaginationProps {
	className?: string
	initialPage?: number
	marginPagesDisplayed?: number
	pagesCount: number
	pageRangeDisplayed?: number
	onChange: ({ selected }: { selected: number }) => void
}

export const Pagination: FC<PaginationProps> = ({
	className,
	initialPage,
	marginPagesDisplayed = 3,
	pagesCount,
	pageRangeDisplayed = 3,
	onChange
}): JSX.Element => {
	if (pagesCount <= 1) {
		return <></>
	}

	return (
		<div className={classes.pagination_container}>
			<ReactPaginate
				initialPage={initialPage}
				marginPagesDisplayed={marginPagesDisplayed}
				pageCount={pagesCount}
				pageRangeDisplayed={pageRangeDisplayed}
				onPageChange={onChange}
				containerClassName={classNames(classes.pagination, className)}
				activeClassName={classes.pagination_active}
				pageLinkClassName={classes.pagination_link}
				breakLinkClassName={classes.pagination_link}
				nextLinkClassName={classes.pagination_link}
				previousLinkClassName={classes.pagination_link}
				pageClassName={classes.pagintation_item}
				breakClassName={classes.pagintation_item}
				nextClassName={classNames(classes.pagintation_item, classes.pagination_previos_label)}
				previousClassName={classNames(classes.pagintation_item, classes.pagination_previous_label)}
				previousLabel='<'
				nextLabel='>'
			/>
		</div>
	)
}
