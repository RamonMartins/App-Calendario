import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { CaretLeft } from "phosphor-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LembreteGetAll } from "../../storage/lembreteGetAll";
import { useEffect, useState } from "react";
import { Cadastro } from "../../@types/global";
import { LembreteRemove } from "../../storage/lembreteRemove";
import { dataFormatada } from "../../components/converter_data/converterData";

type RotaParam = {
    lembreteId: number
}

export default function Detalhes(){

    const navigation = useNavigation()
    function Navegar(){
        navigation.goBack()
    }

    const {lembreteId} = useRoute().params as RotaParam
    const [lembrete, setLembrete] = useState<Cadastro>()

    useEffect(() => {
        const buscaLembretes = async () => {
            let dadosStorage = await LembreteGetAll()
            if (dadosStorage == null){
                dadosStorage = []
            }
            const lembreteEncontrado = dadosStorage.find(pessoa => pessoa.id === lembreteId)
            setLembrete(lembreteEncontrado)
        }
        buscaLembretes()
    }, [])

    function removerLembrete() {
        Alert.alert("Remover", "Confirma a exclusão deste lembrete?", [
            {
                text: "Sim",
                onPress: async () => {
                    await LembreteRemove(lembreteId)
                    navigation.goBack()
                }
            },
            {
                text: "Não"
            }
        ])
    }

    if (!lembrete) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={Navegar}>
                        <CaretLeft color="#fff" size={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.textNaoEncontrado}>Lembrete não encontrado</Text>
                </View>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={Navegar}>
                    <CaretLeft color="#fff" size={32}/>
                </TouchableOpacity>
                <Text style={styles.titulo}>Detalhes</Text>
            </View>

            <View style={styles.subcontainer}>
                <View style={styles.dados}>
                    <View style={styles.label}>
                        <Text style={styles.rotulo}>Nome: </Text>
                        <Text style={styles.valor}>{lembrete.nome}</Text>
                    </View>
                    <View style={styles.label}>
                        <Text style={styles.rotulo}>Data de aniversário: </Text>
                        <Text style={styles.valor}>{dataFormatada(lembrete.dataAniver)}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.btnRemover} onPress={removerLembrete}>
                    <Text style={styles.textRemover}>Remover Lembrete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}