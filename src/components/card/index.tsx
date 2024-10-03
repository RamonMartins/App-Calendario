import { View, Text, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { useNavigation } from "@react-navigation/native"
import { Cadastro } from "../../@types/global"

let textoFinal = ''

export default function Card(valor: Cadastro){
    const diasRestantes = Number(valor.diasRestantes)
    
    if (diasRestantes >= 2){
        textoFinal = String(diasRestantes) + " dias para a Festa."
    }else if (diasRestantes == 1){
        textoFinal = String(diasRestantes) + " dia para a Festa."
    }else if (diasRestantes == 0){
        textoFinal = "Hoje é o dia da Festa!"
    }else{
        textoFinal = "A Festa já passou."
    }

    const navigation = useNavigation()
    function Navegar(){
        navigation.navigate('DetalhesScreen', { lembreteId: valor.id })
    }

    return(
        <TouchableOpacity onPress={Navegar}>
            <View style={styles.card}>
                <View style={styles.letreiro}>
                    <Text style={styles.textLetreiro}>{ valor.nome.charAt(0) }</Text>
                </View>
                
                <View style={styles.textosCard}>
                    <Text style={styles.textNome}>{ valor.nome }</Text>
                    <Text style={styles.textData}>{ textoFinal }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
