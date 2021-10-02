import React, { useRef, useState, useEffect } from 'react';
import { ProductType } from '../types/Product';

export const usePagination = (products: ProductType[], showCount: number) => {
	const firstRender = useRef(true);
	const [shownProducts, setShownProducts] = useState<ProductType[]>(() =>
		products.slice(0, showCount)
	);
	const [totalPages, setTotalPages] = useState<number>(() =>
		Math.ceil(products.length / showCount)
	);
	const [showCountState, setShowCountState] = useState<number>(() => showCount);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [paginationDim, setPaginationDim] = useState<number[]>([0, showCount]);
	const resetPagination = () => {
		console.log('will reset now');
		setShownProducts(products.slice(0, showCount));
		setTotalPages(Math.ceil(products.length / showCount));
		setShowCountState(showCount);
		setCurrentPage(1);
		setPaginationDim([0, showCount]);
	};
	useEffect(() => {
		resetPagination();
	}, [products]);
	const nextPageHandler = () => {
		if (currentPage === totalPages) return;

		setCurrentPage((prev) => prev + 1);
		setPaginationDim((prev) => [
			prev[0] + showCountState,
			prev[1] + showCountState,
		]);
	};
	const prevPageHandler = () => {
		if (currentPage === 1) return;
		setPaginationDim((prev) => [
			prev[0] - showCountState,
			prev[1] - showCountState,
		]);

		setCurrentPage((prev) => prev - 1);
	};
	const changePaginationDims = (val: number) => {
		setPaginationDim((prev) => [prev[0], prev[0] + val]);
		setShowCountState(val);
	};
	const navigateToPage = (val: number) => {
		setCurrentPage(val);
		setPaginationDim([(val - 1) * showCountState, val * showCountState]);
	};
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		setShownProducts(products.slice(paginationDim[0], paginationDim[1]));
		setTotalPages(
			Math.ceil(products.length / (paginationDim[1] - paginationDim[0]))
		);
	}, [paginationDim]);

	return {
		shownProducts,
		nextPageHandler,
		prevPageHandler,
		changePaginationDims,
		totalPages,
		currentPage,
		paginationDim,
		navigateToPage,
	};
};
