import { createContext, ReactNode, ReactNodeArray, useReducer } from 'react';
import useWindowSize from '../Hooks/useWindowSize';
import { CategoryType } from '../types/Category';
import { AppReducer } from './AppReducer';
import { ACTION_TYPES, StateType } from './ContextTypes';

const initialState = {
	currentCategory: undefined,
	filters: {},
} as StateType;
export const AppContext = createContext<StateType>(initialState);

export const AppContextProvider = ({
	children,
}: {
	children: ReactNode | ReactNodeArray;
}) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	const deviceSize = useWindowSize();
	const setCurrentCategory = (currentCat: CategoryType) => {
		dispatch({
			type: ACTION_TYPES.UPDATE_CURRENT_CATEGORY,
			payload: currentCat,
		});
	};
	const updateFilters = (filters: any) => {
		dispatch({
			type: ACTION_TYPES.NEW_FILTER,
			payload: filters,
		});
	};
	const contextValues = {
		...state,
		setCurrentCategory,
		updateFilters,
		isMobile: deviceSize?.width! < 768,
	};
	return (
		<AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
	);
};
