import React, { useContext } from 'react';
import CategoryFilters from './CategoryFilters';
import styles from './filters.module.scss';
import PriceRangeFilters from './PriceRangeFilters';
import ColorFilters from './ColorFilters';
import RatingFilters from './RatingFilters';
import { CategoryType } from '../../../types/Category';
import { AppContext } from './../../../context/AppContextProvider';

interface filtersProps {
	categories: CategoryType[];
	closeFilters: () => void;
}
const FiltersContainer = ({ categories, closeFilters }: filtersProps) => {
	const { updateFilters, setCurrentCategory } = useContext(AppContext);
	const clearAllFiltersHandler = () => {
		updateFilters({});
		setCurrentCategory({});
	};
	return (
		<div className={styles.filtersContainer}>
			<button onClick={() => closeFilters()} className={styles.closeBtn}>
				&times;
			</button>
			<CategoryFilters categories={categories} />
			<PriceRangeFilters />
			<ColorFilters />
			<RatingFilters />

			<button
				onClick={clearAllFiltersHandler}
				className="bg-white text-lg font-medium mx-auto w-full my-8 px-2 py-3 rounded-3xl flex justify-center items-center"
			>
				<span className="text-2xl mx-2 mt-1">&times;</span>
				<span>clear all</span>
			</button>
		</div>
	);
};

export default FiltersContainer;
