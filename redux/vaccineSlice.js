import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
    id:null,
    vaccineName: null,
    vaccinationDate: null,
    dose: null,
    nextVaccination: null,
    comprovante: null,
}
export const vaccineSlice = createSlice({
    name: 'vaccine',
    initialState: initialValues,
    reducers: {
        reducerSetVaccine: (state, action) => {
            state.id = action.payload.id,
            state.vaccineName =  action.payload.vaccineName,
            state.vaccinationDate= action.payload.vaccinationDate,
            state.dose= action.payload.dose,
            state.nextVaccination=action.payload.nextVaccination,
            state.comprovante=action.payload.comprovante

        }
    }
})

export const { reducerSetVaccine } = vaccineSlice.actions

export default vaccineSlice.reducer