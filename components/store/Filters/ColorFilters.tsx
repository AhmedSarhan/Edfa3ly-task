import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContextProvider';
import useFilter from '../../../Hooks/useFilter';
import styles from './filters.module.scss';
import FilterTitle from './FilterTitle';

const colors = [
	{ title: 'black', active: false },
	{ title: 'white', active: false },
	{ title: 'cyan', active: false },
	{ title: 'silver', active: false },
	{ title: 'gold', active: false },
	{ title: 'lavender', active: false },
	{ title: 'orchid', active: false },
	{ title: 'maroon', active: false },
	{ title: 'mint green', active: false },
	{ title: 'fuchsia', active: false },
	{ title: 'ivory', active: false },
	{ title: 'teal', active: false },
	{ title: 'blue', active: false },
	{ title: 'red', active: false },
	{ title: 'green', active: false },
	{ title: 'olive', active: false },
	{ title: 'orange', active: false },
	{ title: 'salmon', active: false },
	{ title: 'indigo', active: false },
	{ title: 'yellow', active: false },
	{ title: 'azure', active: false },
	{ title: 'purple', active: false },
	{ title: 'magenta', active: false },
	{ title: 'turquoise', active: false },
];
interface Color {
	title: string;
	active: boolean;
}
const ColorFilters = () => {
	const { filters } = useContext(AppContext);
	const [colorsState, setColorsState] = useState<Color[]>(() => colors);
	const [filterColors, setFiltersColors] = useState<string[]>([]);
	useEffect(() => {
		if (firstRender.current) return;
		if (!filters?.colors || filters?.colors?.length! === 0) {
			setColorsState(colors);
			setFiltersColors([]);
		}
	}, [filters?.colors]);
	const firstRender = useFilter(filterColors, 'colors');

	const selectColorHandle = (colorName: string, checkedState: boolean) => {
		console.log(colorName, checkedState);
		let newColors = [];
		console.log(colorsState);
		newColors = [...colorsState].map((color) => {
			if (color.title === colorName) {
				return { ...color, active: checkedState };
			} else {
				return color;
			}
		});
		setColorsState([...newColors]);
		if (checkedState) {
			setFiltersColors((prev) => [...prev, colorName]);
		} else {
			setFiltersColors((prev) => prev.filter((color) => color !== colorName));
		}
	};
	const clearColorsFilterHandler = () => {
		setColorsState([...colors]);
		setFiltersColors([]);
	};
	return (
		<>
			<FilterTitle title="Colors" />
			<div className={styles.filterContainer}>
				{colorsState.map((color: Color) => (
					<div
						key={color.title}
						className="flex justify-start items-center my-2 px-2"
					>
						<input
							className="mx-1"
							type="checkbox"
							checked={color?.active}
							onChange={(e) =>
								selectColorHandle(color?.title, e?.target.checked)
							}
						/>
						<label className="mx-1 capitalize" htmlFor={color?.title}>
							{color?.title}
						</label>
					</div>
				))}

				<button
					className="px-3 text-lg font-medium"
					onClick={clearColorsFilterHandler}
				>
					&times; clear
				</button>
			</div>
		</>
	);
};

export default ColorFilters;
