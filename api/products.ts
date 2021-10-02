import { ProductType } from '../types/Product';
import { Axios } from './Axios';

export const fetchProducts = async () => {
	let results: ProductType[] = [];
	await Axios.get('/product')
		.then((res) => {
			results = [...res?.data];
		})
		.catch((err) => {
			console.log(err?.response);
		});

	return results;
};

export const fetchProductsByCat = async (catId: number) => {
	let results: ProductType[] = [];

	await Axios.get(`/product?categoryId=${catId}`)
		.then((res) => {
			results = [...res?.data];
		})
		.catch((err) => {
			console.log(err?.response);
		});

	return results;
};
