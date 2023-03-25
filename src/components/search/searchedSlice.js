import { createSlice } from '@reduxjs/toolkit';

const searchedSlice = createSlice({
    name: 'searched',
    initialState: {

    }, 
    reducers: {
        loadSearch: {
            reducer(state, action) {
                state.search = action.payload;
            }, 
            prepare(search) {
                return { payload: search };
            }
        }
    }
});

export const { loadSearch } = searchedSlice.actions;
export const selectAllSearched = state => state.searched.search
export default searchedSlice.reducer