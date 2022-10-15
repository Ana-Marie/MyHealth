import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import create from 'zustand'

 export const useVacineStore = create((set, get) => ({
    arrayVacinas: [], // Estado atual das vacinas
    criarVacina: (vacina) => {
        const { arrayVacinas } = get() // Pega o array de arrayVacinas
        set({ arrayVacinas: arrayVacinas.push(vacina) }) // adicina a nova vacina no array
    }
}))



const Test = () => {

    const { arrayVacinas, criarVacina } = useVacineStore()

    const objetoVacina = {
        nome: "Vacina 1",
        data: new Date()
    }

    const salvaVacina = () => {



    }


    // async 
    // sync 

    const Item = ({ vacina, index }) => {
        return (
            <TouchableOpacity onPress={() => navition.navite('EditarVacina', { vacinaIndex: index })}>
                <Text>{vacina.nome}</Text>

            </TouchableOpacity>
        )
    }

    return <>
        <TouchableOpacity onPress={() => criarVacina(objetoVacina)}>
            <Text>Test</Text>

            <FlatList
                data={arrayVacinas}
                renderItem={({ item, index }) => <Item vacina={item} index={index} />}

            />

        </TouchableOpacity>
    </>
}
