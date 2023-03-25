import { configureStore } from '@reduxjs/toolkit';
import searchedReducer from '../search/searchedSlice'


const store = configureStore({
    reducer: {
        searched: searchedReducer,
    },
});

export default store

// create an component with list to display (list of searched), each searched item will be a separate component that will have link to comments, pic etc, 
// will try to let user sort by, and search with using options like dont show posts that were already visited