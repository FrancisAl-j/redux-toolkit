import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice.js';
import postsReducer from '../features/posts/postSlice.js';
import userReducer from '../features/user/userSlice.js'

export const store = configureStore({
    reducer: {
        //counter: counterReducer,
        posts: postsReducer,
        users: userReducer
    },
})
