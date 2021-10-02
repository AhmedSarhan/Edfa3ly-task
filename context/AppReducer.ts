import { ActionType, ACTION_TYPES, StateType } from './ContextTypes';

export const AppReducer = (state: StateType, { type, payload }: ActionType) => {
	switch (type) {
		case ACTION_TYPES.UPDATE_CURRENT_CATEGORY:
			return {
				...state,
				currentCategory: { ...payload },
			};
		case ACTION_TYPES.NEW_FILTER:
			return {
				...state,
				filters: { ...payload },
			};
		default:
			return state;
	}
};
