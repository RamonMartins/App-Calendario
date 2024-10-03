import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useState, useCallback } from 'react';
import { styles } from './styles';
import Card from '../../components/card';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { LembreteGetAll } from '../../storage/lembreteGetAll';
import { Cadastro } from '../../@types/global';
import { AddressBook } from 'phosphor-react-native';


export default function Home() {
    const [lembretes, setLembretes] = useState<Cadastro[]>([])

    useFocusEffect(
        useCallback(() => {
            async function Atualizar(){
                try {
                    let dadosStorage = await LembreteGetAll()
                    if (dadosStorage == null){
                        dadosStorage = []
                    }
                    const dataHoje = new Date()
                    const listaTemp = dadosStorage.map(item => {
                        const subtracaoDatas = (item.dataAniver.setFullYear(dataHoje.getFullYear()) - dataHoje.getTime())
                        const diasRestantes = Math.ceil(subtracaoDatas / 86400000)
                        if (diasRestantes >= 0){
                            return {
                                ...item,
                                diasRestantes: String(diasRestantes) // Verifica se o número é positivo e atribui o valor
                            }
                        }else{
                            return {
                                ...item,
                                diasRestantes: 'a' // Se não for positivo, atribui uma letra, pois em ordenação números ficam na frente de letras
                            }
                        }
                    })

                    // Filtra apenas as datas que ainda não passaram
                    const listaFiltrada = listaTemp.filter(pessoas => pessoas.diasRestantes != 'a')
                    // Organizando a lista em ordem crescente
                    const listaOrganizada = listaFiltrada.sort((a,b) => a.diasRestantes.localeCompare(b.diasRestantes))
                    // Atualizando o valor do State que vai para a FlatList
                    setLembretes([...listaOrganizada])
                } catch (error) {
                    console.log(error)
                }
            }
            
            Atualizar()
        }, [])
    )

    const navigation = useNavigation()
    function Navegar() {
        navigation.navigate('CadastroScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={ styles.headerTopo }
                    source={ require('../../../assets/icon.png') }
                />
                <View style={styles.headerText}>
                    <Text style={styles.titulo}>Lembrete de Aniversários</Text>
                    <TouchableOpacity style={styles.btnAdd} onPress={Navegar}>
                        <AddressBook size={30} color='#fff' weight='duotone'/>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                style={styles.lista}
                data={lembretes}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Card
                        id={item.id}
                        nome={item.nome}
                        dataAniver={item.dataAniver}
                        diasRestantes={item.diasRestantes}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <Text style={styles.textVazio}>Nenhum cadastro feito.</Text>}
            />
        </View>
    );
}
