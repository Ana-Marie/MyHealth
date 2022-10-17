import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import create from 'zustand'
import { enableES5 } from "immer"
// enableES5();
// import produce from 'immer';


export const useVacineStore = create((set,get) => ({
    vaccines: [], // Estado atual das vacinas
    addVaccine: (vaccine) => {
        const {vaccines} = get() 


        vaccines.push(vaccine) 
        set({
            vaccines
        })
    },
    // updateVaccine: (vacina, index) => set(

        // produce((draft) => {
        //     let vaccine = draft.vaccines[index];
        //     console.log(vacina);
        //     vaccine = {
        //         vaccineName: vacina.vaccineName,
        //         vaccinationDate: vacina.vaccinationDate,
        //         dose: vacina.dose,
        //         nextVaccination: vacina.nextVaccinationDate,
        //         comprovante: vacina.comprovante,

        //     };
        //     console.log(vaccine);
           
        // })
    // ),
    updateVaccine: (vacina, index) => {

        let { vaccines } = get()

        let newVaccines = [...vaccines]

        newVaccines.splice(index,1,vacina)

        set({
            vaccines: newVaccines
        })
    },
    removeVaccine:(index)=> {
        let {vaccines} = get()
        let newVaccines = [...vaccines]
        newVaccines.splice(index,1)
        set({
            vaccines: newVaccines
        })
    }



}));