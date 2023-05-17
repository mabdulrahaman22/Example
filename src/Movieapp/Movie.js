import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Movielist from './Movielist';
import Movielistheading from './Movielistheading';
import Search from './Search';
import Addfavourites from './Addfavourites';
import Removefavourites from './Removefavourites';
const Movie = () => {
	const [movies, setMovies] = useState([]); 
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);


    const getMovieRequest = async (searchValue)=>{
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;


        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {

            setMovies(responseJson.Search);
        }
    };
    useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		setFavourites(movieFavourites);
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

    const addFavourieMovie = (movie) =>{
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList)
    };

    const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList)
	};
    
    return (
		<div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
				<Movielistheading heading='Movies' />
				<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
                <Movielist 
                movies={movies} 
                favouriteComponent={Addfavourites}
                handleFavouritesClick={addFavourieMovie} />

			</div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
				<Movielistheading heading='Favourites' />
			</div>
			<div className='row'>
				<Movielist movies={favourites}
                handleFavouritesClick={removeFavouriteMovie} 
                favouriteComponent={Removefavourites} />
			</div>
		</div>
	);
};

export default Movie;