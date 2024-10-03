import AsyncStorage from "@react-native-async-storage/async-storage";
import { LEMBRETE_COLLECTION } from "./@StorageConfig";
import { LembreteGetAll } from "./lembreteGetAll";

export async function LembreteRemove(lembreteID: number){
    try {
        let dadosStorage = await LembreteGetAll()

        if (dadosStorage == null){
            dadosStorage = []
        }

        const dadosAtualizados = dadosStorage.filter(item => item.id != lembreteID)

        const dadosConvertidos = JSON.stringify(dadosAtualizados)

        await AsyncStorage.setItem(LEMBRETE_COLLECTION, dadosConvertidos)

    } catch (error) {
        console.log(error)
    }
}