/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import CategoryList from '../components/store/categories/CategoryList';
import ProductsList from '../components/store/products/ProductsList';
import { AppContext } from '../context/AppContextProvider';
import useWindowSize from '../Hooks/useWindowSize';
import { CategoryType } from '../types/Category';
import { ProductType } from '../types/Product';
import { fetchCategories } from './../api/categories';
import { fetchProducts, fetchProductsByCat } from './../api/products';
import FiltersContainer from './../components/store/Filters/FiltersContainer';

interface HomePageProps {
	products: ProductType[];
	categories: CategoryType[];
}

const Home: NextPage<HomePageProps> = ({ products, categories }) => {
	const [productsState, setProductsState] = useState<ProductType[]>(
		() => products
	);
	const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(
		() => products
	);
	const [showFilters, setShowFilters] = useState<boolean>(false);
	const { currentCategory, isMobile } = useContext(AppContext);

	useEffect(() => {
		if (!currentCategory || Object.keys(currentCategory).length === 0) return;
		fetchCategoryProducts(currentCategory?.id);
	}, [currentCategory]);

	useEffect(() => {
		setFilteredProducts([...productsState]);
		console.log('cateProState', productsState);
	}, [productsState]);
	const fetchCategoryProducts = async (catId: number) => {
		const categoryProducts = await fetchProductsByCat(catId);
		console.log('catePro', categoryProducts);
		setProductsState([...categoryProducts]);
	};

	return (
		<>
			<Head>
				<title>Edfa3ly Store</title>
				<meta
					name="description"
					content="e-commerce where you can buy different products from different store abroad without any customs and shipping hassles"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SectionTitle
				img="/empty-cart.png"
				title="Edfa3ly Store"
				description="Choose from our different products and categories"
			/>
			<div className="container mx-auto px-3">
				<CategoryList categories={categories} />
				<button
					className="flex md:hidden justify-center items-center my-2 ms-auto btn-primary"
					onClick={() => setShowFilters(true)}
				>
					<img src="/filter.svg" alt="filters" className="w-5 h-5 mx-1" />
					<span className="mx-1">Filters</span>
				</button>
				<section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
					{/* filters here */}
					{(!isMobile || showFilters) && (
						<div className="filters-backdrop">
							<FiltersContainer
								closeFilters={() => setShowFilters(false)}
								categories={categories}
							/>
						</div>
					)}
					<ProductsList
						setProducts={setFilteredProducts}
						products={filteredProducts}
						originalProducts={products}
					/>
				</section>
			</div>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
	const categories = await fetchCategories();
	const products = await fetchProducts();
	return {
		props: {
			categories,
			products,
		},
	};
};
