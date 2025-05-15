import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentScreen: 'home',
    deviceType: 'desktop', // 'mobile' | 'tablet' | 'desktop'
};

const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setCurrentScreen(state, action) {
            state.currentScreen = action.payload;
        },
        setDeviceType(state, action) {
            state.deviceType = action.payload;
        },
    },
});

export const {setCurrentScreen, setDeviceType} = screenSlice.actions;

export const selectCurrentScreen = (state) => state.screen.currentScreen;
export const selectDeviceType = (state) => state.screen.deviceType;

export const isMobile = (state) => state.screen.deviceType === 'mobile';
export const isTablet = (state) => state.screen.deviceType === 'tablet';
export const isDesktop = (state) => state.screen.deviceType === 'desktop';

export default screenSlice.reducer;
