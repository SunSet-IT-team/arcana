import {configureStore} from '@reduxjs/toolkit';
import buyFormReducer from './slices/buyFormSlice';
import contactFormReducer from './slices/contactFormSlice';
import privacyReducer from './slices/privacySlice';
import profileMethodReducer from './slices/profileMethodSlice';
import resultsReducer from './slices/resultsSlice';
import screenReducer from './slices/screenSlice';

export const store = configureStore({
    reducer: {
        results: resultsReducer,
        contactForm: contactFormReducer,
        buyForm: buyFormReducer,
        privacy: privacyReducer,
        profileMethod: profileMethodReducer,
        screen: screenReducer,
    },
});
