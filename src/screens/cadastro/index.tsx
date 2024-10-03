import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { TextInputMask } from "react-native-masked-text"
import { styles } from "./styles"
import { useCallback, useState } from "react"
import { CaretLeft } from "phosphor-react-native"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import Toast, { BaseToast, ErrorToast, ToastConfig, ToastConfigParams } from 'react-native-toast-message';
import { LembreteCreate } from "../../storage/lembreteCreate"
import { LembreteGetAll } from "../../storage/lembreteGetAll"
import { Cadastro } from "../../@types/global"
import { dataFormatada } from "../../components/converter_data/converterData"
import DateTimePicker from '@react-native-community/datetimepicker';



export default function CadastroContatos(){
    const [contatos, setContatos] = useState<Cadastro[]>()
    const [mostrarForm, setMostrarForm] = useState(false)
    const [chave, setChave] = useState(0)

    const [open, setOpen] = useState<boolean>(false)
    const [date, setDate] = useState<Date>(new Date())

    const navigation = useNavigation()
    function voltarTela(){
      navigation.goBack()
    }

    function irDetalhes(id: number){
      navigation.navigate('DetalhesScreen', {lembreteId: id})
    }

    function ShowCadastro(){
      setMostrarForm(true)
    }

    function HideCadastro(){
      setMostrarForm(false)
      // Limpar campos
      setTempInputs({
        nome: "",
        data: "",
      })
    }

    useFocusEffect(
      useCallback(() => {
        const buscaLembretes = async () => {
            let dadosStorage = await LembreteGetAll()
            if (dadosStorage == null){
                dadosStorage = []
            }
            dadosStorage.sort((a,b) => a.nome.localeCompare(b.nome))
            setContatos(dadosStorage)
        }
        buscaLembretes()
    }, [chave]))

    const toastConfig: ToastConfig = {
      success: ({ text1, text2, ...rest }: ToastConfigParams<any>) => (
        <BaseToast
          {...rest}
          style={{ borderLeftColor: 'green', backgroundColor: 'rgb(240, 240, 240)' }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          text1Style={{
            fontSize: 17,
            fontWeight: 'bold'
          }}
          text2Style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'rgb(80, 80, 80)'
          }}
          text1={text1}
          text2={text2}
        />
      ),
      error: ({ text1, text2, ...rest }: ToastConfigParams<any>) => (
        <ErrorToast
          {...rest}
          style={{ borderLeftColor: 'red', backgroundColor: 'rgb(240, 240, 240)' }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          text1Style={{
            fontSize: 17,
            fontWeight: 'bold'
          }}
          text2Style={{
            fontSize: 15,
            fontWeight: '600',
            color: 'rgb(80, 80, 80)'
          }}
          text1={text1}
          text2={text2}
        />
      )
    }

    const [tempInputs, setTempInputs] = useState<{nome: string, data:string}>({
        nome: "",
        data:"",
    });

    async function adicionarLembrete(){

      const [dia, mes, ano] = tempInputs.data.split('/').map(Number)
      const dataInserida = new Date(ano, mes - 1, dia)

      if(tempInputs.nome == "" || tempInputs.data == ""){
          Toast.show({
            type: 'error',
            text1: "Atenção",
            text2: "Preencha todos os campos."
          })
          return
      }

      if(tempInputs.data.length == 10){
          Keyboard.dismiss()

          // Adiciona nova entrada no AsyncStorage
          let dadosGuardados = await LembreteGetAll()
          if (dadosGuardados == null){
            dadosGuardados = []
          }

          const novaEntrada = {
            id: dadosGuardados.length + 1,
            nome: tempInputs.nome,
            dataAniver: dataInserida,
            diasRestantes: ''
          }

          try {
            await LembreteCreate(novaEntrada)
            setChave(chave + 1)
            
          } catch (error) {
            console.log(error)
          }
          
          HideCadastro()
          
          Toast.show({
              type: 'success',
              text1: "Adicionado",
              text2: "Lembrete adicionado com sucesso!"
          })

          console.log(await LembreteGetAll())
          return
      }

      Toast.show({
        type: 'error',
        text1: "Atenção",
        text2: "Preencha a data no formato DD/MM/AAAA."
      }) 
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>

            <View style={styles.header}>
              <View style={styles.subheader}>
                <TouchableOpacity onPress={voltarTela}>
                  <CaretLeft color="#fff" size={32} />
                </TouchableOpacity>
                {mostrarForm &&
                  <Text style={styles.titulo}>Cadastrar Contato</Text>
                }
                {!mostrarForm &&
                  <Text style={styles.titulo}>Contatos cadastrados</Text>
                }
              </View>
              {!mostrarForm &&
                <TouchableOpacity style={styles.btnShow} onPress={ShowCadastro}>
                  <Text style={styles.textShow}>+</Text>
                </TouchableOpacity>
              }
            </View>
            
            
            {mostrarForm && 
              <View style={styles.subsubcontainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    onChangeText={text => setTempInputs({...tempInputs, nome:text})}
                    value={tempInputs.nome}
                    placeholderTextColor={'rgb(150, 150, 150)'}
                />
                <TextInputMask
                    maxLength={10}
                    style={styles.inputDate}
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    onChangeText={text => setTempInputs({...tempInputs, data:text})}
                    value={tempInputs.data}
                    placeholder='Data do aniversário'
                    placeholderTextColor={'rgb(150, 150, 150)'}
                />

                <View style={styles.botoes}>
                  <TouchableOpacity style={styles.btnCancelar} onPress={HideCadastro}>
                    <Text style={styles.textBtn}>Cancelar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnAdd} onPress={adicionarLembrete}>
                    <Text style={styles.textBtn}>Cadastrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            
            
            <View style={styles.subcontainer}>
              
              <FlatList
                  style={styles.lista}
                  data={contatos}
                  keyExtractor={item => String(item.id)}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => irDetalhes(item.id)}>
                        <View style={styles.card}>
                            <View style={styles.letreiro}>
                                <Text style={styles.textLetreiro}>{ item.nome.charAt(0) }</Text>
                            </View>
                            
                            <View style={styles.textosCard}>
                                <Text style={styles.textNome}>{ item.nome }</Text>
                                <Text style={styles.textData}>Data do aniversário: { dataFormatada(item.dataAniver) }</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                  )}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={() => <Text>Nenhum cadastro feito.</Text>}
              />
              
            </View>

            <Toast config={toastConfig} /* position="top" */ />

          </View>
        </TouchableWithoutFeedback>
    )
}