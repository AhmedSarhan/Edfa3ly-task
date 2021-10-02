/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { CategoryType } from '../../../types/Category';
import { CardImageFallBack } from '../../../utils/ImagesFallBack';
import styles from './categories.module.scss';
import { AppContext } from './../../../context/AppContextProvider';
const CategoryCard = ({ category }: { category: CategoryType }) => {
	const [src, setSrc] = useState(() =>
		category?.image ? `${category?.image}${category?.id}` : CardImageFallBack
	);
	const { setCurrentCategory, currentCategory } = useContext(AppContext);
	return (
		<div
			className={clsx(
				styles.categoryCard,
				currentCategory?.id === category?.id ? styles.active : ''
			)}
			onClick={() => setCurrentCategory(category)}
		>
			<img
				src={src}
				alt={category?.name}
				onError={() => setSrc(CardImageFallBack)}
			/>
			<h3>{category?.name}</h3>
		</div>
	);
};

export default CategoryCard;
