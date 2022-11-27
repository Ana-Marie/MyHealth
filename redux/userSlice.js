import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
    email: null,
    userID: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialValues,
    reducers: {
        reducerSetUser: (state, action) => {
            state.email = action.payload.email
            state.userID=action.payload.userID

        }
    }
})

export const { reducerSetUser } = userSlice.actions

export default userSlice.reducer