import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import create from 'zustand'
import { enableES5 } from "immer"
enableES5();
import produce from 'immer';


export const useVacineStore = create((set) => ({
    vaccines: [], // Estado atual das vacinas
    addVaccine: (vaccine) => set(
        produce((draft) => {
            draft.vaccines.push(vaccine)

        })

    ),
    updateVaccine: (vacina, index) => set(

        produce((draft) => {
            let vaccine = draft.vaccines[index];
            console.log(vacina);
            vaccine = {
                vaccineName: vacina.vaccineName,
                vaccinationDate: vacina.vaccinationDate,
                dose: vacina.dose,
                nextVaccination: vacina.nextVaccinationDate,
                comprovante: vacina.comprovante,

            };
            console.log(vaccine);
           
        })
    ),
    removeVaccine:(index)=> set(
        produce((draft)=>{
            draft.vaccines.splice(index,1);
        })
    )



}));