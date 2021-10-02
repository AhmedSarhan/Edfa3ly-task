import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context/AppContextProvider';
import useFilter from '../../../Hooks/useFilter';
import styles from './filters.module.scss';
import FilterTitle from './FilterTitle';

export default function PriceRangeFilters() {
	const { filters } = useContext(AppContext);
	const [rangeValues, setRangeValues] = useState<number[]>([100, 500]);
	useEffect(() => {
		if (firstRender.current) return;
		console.log(filters?.price, 'price in');
		if (!filters?.price || filters?.price?.length === 0) {
			setRangeValues([0, 1000]);
			return;
		}
	}, [filters?.price]);
	const firstRender = useFilter(rangeValues, 'price');

	const sliderChangeHandler = (value: any) => {
		setRangeValues([...value]);
	};
	const minChangeHandler = (value: any) => {
		setRangeValues((prev) => {
			return [value, prev[1]];
		});
	};
	const maxChangeHandler = (value: any) => {
		setRangeValues((prev) => {
			return [prev[0], value];
		});
	};
	const clearPriceFilterHandler = () => {
		setRangeValues([0, 1000]);
	};
	return (
		<>
			<FilterTitle title="Price" />
			<div className={styles.filterContainer}>
				<div className="my-1 flex justify-between items-center">
					<input
						className="border border-gray-500 rounded-sm outline-none focus:outline-none w-14 text-center"
						type="text"
						value={rangeValues[0]}
						onChange={(e) => minChangeHandler(e?.target.value)}
					/>

					<input
						className="border border-gray-500 rounded-sm outline-none focus:outline-none w-14 text-center"
						type="text"
						value={rangeValues[1]}
						onChange={(e) => maxChangeHandler(e?.target.value)}
					/>
				</div>
				<Range
					defaultValue={[150, 500]}
					min={0}
					max={1000}
					step={100}
					value={rangeValues}
					onChange={(value) => sliderChangeHandler(value)}
				/>

				<button
					className="px-3 text-lg my-2 font-medium"
					onClick={clearPriceFilterHandler}
				>
					&times; clear
				</button>
			</div>
		</>
	);
}
