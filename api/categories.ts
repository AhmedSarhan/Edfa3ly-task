import { CategoryType } from '../types/Category';
import { Axios } from './Axios';

export const fetchCategories = async () => {
	let results: CategoryType[] = [];
	await Axios.get('/category')
		.then((res) => {
			results = [...res?.data];
		})
		.catch((err) => {
			console.log(err?.response);
		});

	return results;
};
