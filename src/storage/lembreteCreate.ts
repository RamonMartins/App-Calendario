import AsyncStorage from "@react-native-async-storage/async-storage"
import { LEMBRETE_COLLECTION } from "./@StorageConfig"
import { LembreteGetAll } from "./lembreteGetAll"
import { Cadastro } from "../@types/global"

export async function LembreteCreate(novoLembrete: Cadastro){
    try{
        // Coleta os objetos gravados no Storage já convertendo de String para Objeto
        let registrosLocal = await LembreteGetAll()
        if (registrosLocal == null){
            registrosLocal = []
        }
        
        // Converte dados antigos e a nova entrada de objeto para String
        const novoSalve = JSON.stringify([...registrosLocal, novoLembrete])

        // Guarda as entradas já presentes com a nova entrada
        await AsyncStorage.setItem(LEMBRETE_COLLECTION, novoSalve)
    }catch(error){
        console.log(error)
    }
}