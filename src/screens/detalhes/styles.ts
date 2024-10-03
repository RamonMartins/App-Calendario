import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 30, 30)'
    },
    header: {
        flexDirection: 'row',
        padding: 10
    },
    titulo: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        color: "white"
    },
    subcontainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgb(60, 60, 60)'
    },
    dados: {
        flex: 1,
        rowGap: 10
    },
    label: {
        flexDirection: 'row'
    },
    rotulo: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "white"
    },
    valor: {
        fontSize: 16,
        color: "white"
    },
    btnRemover: {
        backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 17,
        width: '85%',
        borderRadius: 5
    },
    textRemover: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textNaoEncontrado: {
        color: '#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 16
    }
})