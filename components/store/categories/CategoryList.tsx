import React from 'react';
import { CategoryType } from '../../../types/Category';
import CategoryCard from './CategoryCard';
import styles from './categories.module.scss';

const CategoryList = ({ categories }: { categories: CategoryType[] }) => {
	return (
		<section
			className={`hidden md:flex justify-between items-center flex-wrap`}
		>
			{categories?.length > 0 &&
				categories.map((cat: CategoryType) => (
					<CategoryCard key={cat?.id} category={cat} />
				))}
		</section>
	);
};

export default CategoryList;
