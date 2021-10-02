import { CategoryType } from '../types/Category';
import { FiltersType } from '../types/Filters';

export interface StateType {
	currentCategory?: CategoryType;
	filters: FiltersType;
	setCurrentCategory: (cat: CategoryType) => void;
	updateFilters: (filters: FiltersType) => void;
}

export interface ActionType {
	type: string;
	payload: any;
}

export const ACTION_TYPES = {
	UPDATE_CURRENT_CATEGORY: 'UPDATE_CURRENT_CATEGORY',
	NEW_FILTER: 'NEW_FILTER',
};
