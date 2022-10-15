import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import create from 'zustand'
import {enableES5} from "immer"
enableES5();
import produce  from'immer';
 

 export const useVacineStore = create((set) => ({
    vaccines: [], // Estado atual das vacinas
    addVaccine:(vaccine)=>set(
        produce((draft)=>{
            draft.vaccines.push(vaccine)
        
        })
        
    ),
      

}));