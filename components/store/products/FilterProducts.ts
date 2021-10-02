import { FiltersType } from '../../../types/Filters';
import { ProductType } from '../../../types/Product';

export const filterProducts = (
	filters: FiltersType,
	products: ProductType[]
) => {
	let filteredProducts = [...products];
	if (filters['colors']) {
		filteredProducts = filteredProducts.filter(
			(e) => filters?.colors?.indexOf(e.color) !== -1
		);
	}
	if (filters['rating']) {
		filteredProducts = filteredProducts.filter(
			(product: ProductType) => product?.rating === filters?.rating
		);
	}
	if (filters['price']) {
		filteredProducts = filteredProducts.filter((product: ProductType) => {
			return (
				product?.price > parseInt(filters?.price![0]) &&
				product?.price < parseInt(filters?.price![1])
			);
		});
	}
	return filteredProducts;
};
