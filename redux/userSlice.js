import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
    email: null,
    userUID: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initialValues,
    reducers: {
        reducerSetVaccine: (state, action) => {
            state.email = action.payload.email
            state.userUID=action.payload.userUID

        }
    }
})

export const { reducerSetUser } = userSlice.actions

export default userSlice.reducer