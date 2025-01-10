import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    openPrivacy: false,
};

const privacySlice = createSlice({
    name: 'privacy',
    initialState,
    reducers: {
        setOpenPrivacy(state, action) {
            state.openPrivacy = action.payload;
            document
                .querySelector('.header')
                .classList.remove('header--hidden');
        },
    },
});

export const {setOpenPrivacy} = privacySlice.actions;

export const privacy = (state) => state.privacy.openPrivacy;

export default privacySlice.reducer;
