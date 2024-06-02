import { configureStore } from '@reduxjs/toolkit';
import audioClipReducer from './audioClipSlice';

const store = configureStore({
  reducer: {
    audioClips: audioClipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
