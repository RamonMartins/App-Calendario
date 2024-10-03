import AsyncStorage from "@react-native-async-storage/async-storage"
import { LEMBRETE_COLLECTION } from "./@StorageConfig"

export async function LembreteClean(){
    try {
        await AsyncStorage.removeItem(LEMBRETE_COLLECTION)
    } catch (error) {
        console.log(error)
    }
}