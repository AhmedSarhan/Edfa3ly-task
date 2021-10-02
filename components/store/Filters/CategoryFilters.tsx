import React, { useContext } from 'react';
import { CategoryType } from '../../../types/Category';
import styles from './filters.module.scss';
import clsx from 'clsx';
import { AppContext } from '../../../context/AppContextProvider';
import FilterTitle from './FilterTitle';
const CategoryFilters = ({ categories }: { categories: CategoryType[] }) => {
	const { setCurrentCategory, currentCategory } = useContext(AppContext);
	return (
		<>
			<FilterTitle title="Categories" />

			<div className={clsx(styles.filterContainer, styles.categoriesContainer)}>
				{categories.map((cat: CategoryType) => (
					<button
						key={cat?.id}
						onClick={() => setCurrentCategory(cat)}
						className={clsx(
							cat?.id === currentCategory?.id ? styles.active : '',
							styles.category
						)}
					>
						{cat?.name}
					</button>
				))}
			</div>
		</>
	);
};

export default CategoryFilters;
