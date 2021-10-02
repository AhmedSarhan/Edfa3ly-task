import React, { useContext, useEffect, useRef, useState } from 'react';
import { usePagination } from '../../../Hooks/usePagination';
import { ProductType } from '../../../types/Product';
import PaginationComp from '../../common/Pagination/PaginationComp';
import ProductCard from './ProductCard';
import SectionTitle from './../../common/SectionTitle';
import styles from './Product.module.scss';
import { AppContext } from './../../../context/AppContextProvider';
import { filterProducts } from './FilterProducts';
const ProductsList = ({
	products,
	originalProducts,
	setProducts,
}: {
	products: ProductType[];
	setProducts: (products: ProductType[]) => void;
	originalProducts: ProductType[];
}) => {
	const {
		changePaginationDims,
		nextPageHandler,
		prevPageHandler,
		shownProducts,
		totalPages,
		currentPage,
		paginationDim,
		navigateToPage,
	} = usePagination(products, 15);

	const { filters } = useContext(AppContext);

	useEffect(() => {
		const filteredProducts = filterProducts(filters, originalProducts);
		setProducts([...filteredProducts]);
	}, [filters]);

	useEffect(() => {
		console.log('shownProducts', shownProducts);
	}, [shownProducts]);
	return (
		<div className="col-span-1 md:col-span-2">
			<h3 className="text-lg font-semibold my-2">
				{paginationDim[0]} - {paginationDim[1]} of {products?.length} products
				found{' '}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				{shownProducts.length > 0 &&
					shownProducts.map((product) => (
						<ProductCard product={product} key={product?.id} />
					))}
			</div>
			<div className="flex justify-between items-center mt-5 mb-2">
				<div>
					<select
						className={styles.paginationDim}
						onChange={(e) => changePaginationDims(parseInt(e?.target?.value))}
						defaultValue={15}
					>
						{[10, 15, 25, 50].map((val) => (
							<option key={val} value={val}>
								{val} items per page
							</option>
						))}
					</select>
				</div>
				<PaginationComp
					navigateToPage={navigateToPage}
					totalPages={totalPages}
					nextPageHandler={nextPageHandler}
					prevPageHandler={prevPageHandler}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
};

export default ProductsList;
