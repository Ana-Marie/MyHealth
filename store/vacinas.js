
import create from 'zustand'



export const useVacineStore = create((set,get) => ({
    vaccines: [],
    addVaccine: (vaccine) => {
        const {vaccines} = get() 


        vaccines.push(vaccine) 
        set({
            vaccines
        })
    },
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