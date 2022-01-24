import React, { useState, useEffect, useRef, useReducer } from 'react';
import Header from './components/Header/';
import FetchedImagesSection from './components/FetchedImages/FetchedImagesSection';
import FavouritesSection from './components/Favourites/FavouritesSection';
import Footer from './components/Footer';
import fetchImagesByCount from './api';
import fetchSavedImages from './helpers/fetchSavedImages';
import saveImages from './helpers/saveImages';
import { initialState, fetchReducer } from './reducers/fetchReducer';
import './index.css';

function App() {
    const [favourites, setFavourites] = useState([]);
    const [searchCount, setSearchCount] = useState(0);
    const [likedShown, setLikedShown] = useState(false);
    const [btnAnimated, setBtnAnimated] = useState(false);
    const [fetchState, dispatch] = useReducer(fetchReducer, initialState);
    const firstRender = useRef(true);

    const fetchImagesHandler = async count => {
        dispatch({ type: 'FETCH_START' });
        try {
            const response = await fetchImagesByCount(count);
            if (response.status !== 200) {
                throw new Error('Something went wrong, cannot fetch images');
            }
            const images = response.data;
            dispatch({ type: 'FETCH_SUCCESS', payload: images });
        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message });
        }
    };

    const handleFavourites = image => {
        if (!favourites.find(favImage => favImage.url === image.url)) {
            const newFavouritesList = [...favourites, image];
            setFavourites(newFavouritesList);
            saveImages(newFavouritesList);
        } else {
            const newFavouritesList = favourites.filter(favImage => favImage.url !== image.url);
            setFavourites(newFavouritesList);
            saveImages(newFavouritesList);
        }
    };

    const clearFavourites = () => {
        setFavourites([]);
        saveImages([]);
    };

    const getSavedImages = async () => {
        try {
            const response = await fetchSavedImages();
            const savedFavourites = await JSON.parse(response.data.body);
            if (savedFavourites) {
                setFavourites(savedFavourites);
            }
        } catch (err) {
            throw new Error('Something went wrong, cannot fetch saved images');
        }
    };

    useEffect(() => {
        getSavedImages();
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        fetchImagesHandler(searchCount);
    }, [searchCount]);

    useEffect(() => {
        setBtnAnimated(true);
        setTimeout(() => {
            setBtnAnimated(false);
        }, 200);
    }, [favourites]);

    const fetchResultProp = { results: fetchState.results, error: fetchState.error, isLoading: fetchState.isLoading };
    const favouriteProp = { favourites, handleFavourites, clearFavourites, hideFavourites: () => setLikedShown(false) };
    const countProp = { searchCount, setSearchCount };

    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="flex flex-col justify-center">
                <Header btnAnimated={btnAnimated} showFavourites={() => setLikedShown(true)} />
                <FetchedImagesSection
                    fetchResultProp={fetchResultProp}
                    favouriteProp={favouriteProp}
                    countProp={countProp}
                />
                {likedShown && <FavouritesSection fetchResultProp={fetchResultProp} favouriteProp={favouriteProp} />}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
