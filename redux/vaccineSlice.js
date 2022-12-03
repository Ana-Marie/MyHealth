import { createSlice } from "@reduxjs/toolkit";
const initialValues = {
    id:null,
    vaccineName: '',
    vaccinationDate: '',
    dose: null,
    nextVaccination:'',
    comprovante:'empty',
    pathComprovante:null,
    latitude:0,
    longitude:0,
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
            state.comprovante=action.payload.comprovante,
            state.pathComprovante=action.payload.pathComprovante,
            state.latitude= action.payload.latitude,
            state.longitude=action.payload.longitude

        }
    }
})

export const { reducerSetVaccine } = vaccineSlice.actions

export default vaccineSlice.reducer