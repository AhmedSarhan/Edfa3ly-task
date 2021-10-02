import React from 'react';
import styles from './pagination.module.scss';
interface PaginationProps {
	nextPageHandler: () => void;
	prevPageHandler: () => void;
	navigateToPage: (pageNo: number) => void;
	totalPages: number;
	currentPage: number;
}
const PaginationComp = ({
	totalPages,
	nextPageHandler,
	prevPageHandler,
	navigateToPage,
	currentPage,
}: PaginationProps) => {
	return (
		<div className={styles.paginationContainer}>
			<button onClick={prevPageHandler}>&#60;</button>
			{totalPages > 5 ? (
				<>
					{currentPage > 1 && (
						<button onClick={() => navigateToPage(currentPage - 1)}>
							{currentPage - 1}
						</button>
					)}
					<button disabled className={styles.active}>
						{currentPage}
					</button>

					{currentPage < totalPages && (
						<>
							<button disabled>...</button>
							{currentPage !== totalPages - 1 && (
								<button onClick={() => navigateToPage(totalPages - 1)}>
									{totalPages - 1}
								</button>
							)}
							<button onClick={() => navigateToPage(totalPages)}>
								{totalPages}
							</button>
						</>
					)}
				</>
			) : (
				<>
					{Array.from(Array(totalPages).keys()).map((key) => (
						<button
							onClick={() => navigateToPage(key + 1)}
							className={currentPage === key + 1 ? styles.active : ''}
							key={key + 1}
						>
							{key + 1}
						</button>
					))}
				</>
			)}
			<button onClick={nextPageHandler}>&#62;</button>
		</div>
	);
};

export default PaginationComp;
