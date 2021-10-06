/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface TitleProps {
	title: string;
	description: string;
	img?: string;
}
const SectionTitle = ({ title, description, img }: TitleProps) => {
	return (
		<section className="text-center mx-auto mt-0 mb-2 bg-primary py-6 w-full text-white">
			{img && <img className="bg-white mx-auto my-2" src={img} alt={title} />}
			<h3 className="my-2 text-lg font-semibold">{title}</h3>
			<p className="my-2">{description}</p>
		</section>
	);
};

export default SectionTitle;
