import React, { useContext, useEffect, useState } from 'react';
import styles from './filters.module.scss';
import ReactStars from 'react-rating-stars-component';
import FilterTitle from './FilterTitle';
import { AppContext } from './../../../context/AppContextProvider';
import useFilter from '../../../Hooks/useFilter';

const RatingFilters = () => {
	const { filters } = useContext(AppContext);
	const [rating, setRating] = useState<number>(3);

	useEffect(() => {
		if (firstRender.current) return;

		console.log('filters Rating', filters.rating);
		if (!filters?.rating) {
			setRating(0);
		}
	}, [filters?.rating]);
	const firstRender = useFilter(rating, 'rating');
	return (
		<>
			<FilterTitle title="Product Rating" />
			<div className={styles.filterContainer}>
				<ReactStars
					count={5}
					onChange={(value: number) => setRating(value)}
					value={rating}
					size={24}
					activeColor="#ffd700"
					classNames={styles.rateContainer}
				/>
			</div>
		</>
	);
};

export default RatingFilters;
