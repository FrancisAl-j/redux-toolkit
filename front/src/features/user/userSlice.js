import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Francis'
    },

    {
        id: '2',
        name: 'Kiko'
    },

    {
        id: '3',
        name: 'Al-j'
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer