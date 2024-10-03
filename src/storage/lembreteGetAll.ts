import AsyncStorage from "@react-native-async-storage/async-storage"
import { LEMBRETE_COLLECTION } from "./@StorageConfig"
import { Cadastro } from "../@types/global"

export async function LembreteGetAll(){
    try {
        const stringObtida = await AsyncStorage.getItem(LEMBRETE_COLLECTION)

        let stringConvertida:Cadastro[] = []
        if (stringObtida != null){
            stringConvertida = JSON.parse(stringObtida)
        }

        const dataAtualizada = stringConvertida.map(item => {
            const dataFormatada = new Date(item.dataAniver)
            return {
                ...item,
                dataAniver: dataFormatada
            }
        })
        
        return dataAtualizada

    } catch (error) {
        console.log(error)
    }
}