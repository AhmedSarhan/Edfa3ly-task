/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { ProductType } from '../../../types/Product';
import { CardImageFallBack } from '../../../utils/ImagesFallBack';
import ReactStars from 'react-rating-stars-component';

import styles from './Product.module.scss';
const ProductCard = ({ product }: { product: ProductType }) => {
	const [src, setSrc] = useState(() =>
		product?.image ? `${product?.image}${product?.id}` : CardImageFallBack
	);
	return (
		<div className={styles.productCard}>
			<img
				src={src}
				alt={product?.name}
				onError={() => setSrc(CardImageFallBack)}
			/>
			<h3>{product?.name}</h3>
			<div className={styles.ratingNColor}>
				<ReactStars
					count={5}
					edit={false}
					value={product?.rating}
					size={24}
					color="#ffffff"
					activeColor="#ffd700"
					classNames={styles.rateContainer}
				/>
				<span
					className={styles.prodColor}
					style={{ backgroundColor: product?.color ?? 'transparent' }}
				></span>
			</div>
			<p>
				{product?.currency} {product?.price}
			</p>
		</div>
	);
};

export default ProductCard;
