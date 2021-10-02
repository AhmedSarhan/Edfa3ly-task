import { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContextProvider';
import { cleanObjects } from '../utils/cleanObjects';

export default function useFilter(changingFilter: any, key: any) {
	const firstRender = useRef(true);
	const { updateFilters, filters } = useContext(AppContext);
	useEffect(() => {
		console.log("it's changing");
		if (firstRender?.current) {
			firstRender.current = false;
			return;
		}
		let dummyFilters = { ...filters };
		dummyFilters[key] = changingFilter;
		let newFilters = cleanObjects(dummyFilters);
		console.log('filters', newFilters, dummyFilters);
		updateFilters({ ...newFilters });
	}, [changingFilter]);

	return firstRender;
}
