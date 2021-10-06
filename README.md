


## Project Name & Pitch

**Edfa3ly Store**

an e-commerce where you can buy different products from different store abroad without any customs and shipping hassles


## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`localhost:3000/ideas`


## Reflection

This was a 10 days task for Edfa3ly / Yashry.com.

Project goals were:

* Show different products according to the category.

* Allow user to filter between different products 

* Allow user to filter between products with more than one filter

Originally I wanted to connect the app to Edfa3ly test api to get the data from it based on the api, 
the api could filter the data for me so I could have done the filters on the server side but I preferred to do the filtering on the user side as I wouldn't have been able to filter with a price range on the server.



The task was to show products only after the user chooses a category, I thought for a better ux, we show the user a variety of products with the categories for him to click on to show only that category products.



The products in full capacity and in some categories were a bit too much, so I took the decision to add a pagination feature to show batches of the products and allow the user to move between those pages.



One of my main goals while writing the code were to not repeat myself so I used the context api for some features like the filtering and changing the category

The main idea of using the ContextApi was to avoid props drilling more than to manage global state

In larger projects I would have gone with something like Redux and managed the whole Products state including filters there


## Code Documentation

I have used two custom hooks:

1. useFilter();
2. usePagination();

### useFilter Custom Hook

`	const firstRender = useFilter(filterColors, 'colors');`

**Description:**

useFilter is a custom hook used to update the filters data, when this data changes, the `ProductsList` components watches for those changes and using the `filterProducts` helper function, the products are filtered and the state is set to the newly filtered products

**parameters:**

changingFilter: the new value of the filter that's being changing,
key: the name of that filter in the filters object

**What useFilter Hook Returns:**

the useFilter Hook returns the ref value of firstRender which is used to check if this is the firstRender of this hook or not

### usePagination Custom Hook

`const usePagination = (products: ProductType[], showCount: number)`

**Description:**

usePagination is a custom React hook that's used to paginate between pages using different functions and hooks within it and returns the paginated products, the functions that can be used inside of it, the pagination component meta data, i.e: current_page, total_pages, ...etc.

**parameters:**

products: an array of the all the products available whether filtered, categorized or just all the data coming from the api,
showCount: the number of products to show per page

**What useFilter Hook Returns:**

the useFilter Hook returns multiple values and functions, i.e:
  * shownProducts: the paginated products to show.
	*	nextPageHandler: a function to paginate to the next page.
	*	prevPageHandler: a function to paginate to the previous page.
	*	changePaginationDims: a function to change the number of products show per page
	*	totalPages: the amount of pages available
	*	currentPage: the current page the user is viewing
	*	paginationDim: the range of pages available
	*	navigateToPage: a function that allows the user to jump between different pages


## Technologies used and Why

* Next.Js: I used Next.js on top of React.js to take advantage of its main features including the SEO and the server side rendering
* TypeScript: typescript was used here to make the project strongly typed and to avoid errors in the development process
* TailwindCss combined with Sass modules: this is my preferred ui combination as tailwind offers great ease in development with its utility classes, nevertheless this ease comes with very long lines of classes which might be repeated. to avoid this I made use of the scss modules and tailwind features i.e: `@apply`, `@layer utilities`, `@layer components`

