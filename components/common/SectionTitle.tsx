import React from 'react';

interface TitleProps {
	title: string;
	description: string;
}
const SectionTitle = ({ title, description }: TitleProps) => {
	return (
		<section className="text-center mx-auto mt-4 mb-2 bg-primary py-6 w-full text-white">
			<h3 className="my-2 text-lg font-semibold">{title}</h3>
			<p className="my-2">{description}</p>
		</section>
	);
};

export default SectionTitle;
