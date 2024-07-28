import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'Learning Redux Toolkit is great'
    },

    {
        id: '2',
        title: 'Slice....',
        content: 'The more I say Slice, the more I want pizza'
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        newPost:  {
            reducer(state, action) {
            state.push(action.payload);
        },
        prepare(title, content, userId)  {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }
    }
}
})

export const selectAllPosts = (state) => state.posts;

export const { newPost } = postsSlice.actions;

export default postsSlice.reducer;