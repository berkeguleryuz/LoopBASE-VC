import React from 'react';
import HomeContainer from '@/containers/home';

import { getSingleCategory, getCategories, getPopularMovies, getTopRatedMovies } from '@/services/movie';

// HomePage burası|| ana sayfa oldu artık

async function HomePage({params}) {

    let selectedCategory;
    // const { results: topRatedMovies } = await getTopRatedMovies();  // bu yöntem yerine
    // const { results: popularMovies } = await getPopularMovies();

    // // const topRatedPromise = getTopRatedMovies(); // burası ayrı işlemleyip, hızlandırmak için
    // // const popularPromise = getPopularMovies();
    // // const categoryPromise = getCategories();

    const [{ results: topRatedMovies}, { results: popularMovies}, { genres: categories } ] = await Promise.all([
        // // topRatedPromise,
        // // popularPromise,
        // // categoryPromise
        getTopRatedMovies(),
        getPopularMovies(),
        getCategories(),
    ]);

    if(params.category?.length > 0) {
        const { results } = await getSingleCategory(params.category[0]);
        selectedCategory = results;
    }

    return ( 
        <HomeContainer 
        topRatedMovies={topRatedMovies}
        popularMovies={popularMovies}
        categories={categories}
        selectedCategory={{
            id: params.category?.[0] ?? "",
            movies: selectedCategory ? selectedCategory.slice(2,9) : [],
        }} />
    );
}



export default HomePage;