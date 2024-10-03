import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(30, 30, 30)"
    },
    subcontainer: {
        flex: 1,
        backgroundColor: 'rgb(60, 60, 60)',
        padding: 20
    },
    subsubcontainer: {
        width: '85%',
        rowGap: 10,
        paddingBottom: 15,
        alignSelf: 'center'
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    subheader: {
        flexDirection: 'row'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20
    },
    input: {
        width: '100%',
        backgroundColor: "rgb(220, 220, 220)",
        height: 40,
        borderRadius: 7,
        paddingLeft: 8
    },
    inputDate: {
        width: '100%',
        backgroundColor: "rgb(220, 220, 220)",
        height: 40,
        borderRadius: 7,
        paddingLeft: 8
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnShow: {
        backgroundColor: '#28a745',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 30
    },
    textShow: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "white",
        paddingBottom: 3,
        paddingLeft: 1
    },
    btnAdd: {
        backgroundColor: '#28a745',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        width: 'auto',
        borderRadius: 5
    },
    textBtn: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    btnCancelar: {
        backgroundColor: 'gray',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        width: 'auto',
        borderRadius: 5
    },
    lista: {
        flex: 1,
        backgroundColor: 'rgb(60, 60, 60)',
        color: "black",
        rowGap: 30,
        padding: 10
    },
    card: {
        flexDirection: "row",
        columnGap: 15,
        marginBottom: 15,
        backgroundColor: 'rgb(30, 30, 30)',
        padding: 15,
        borderRadius: 8
    },
    letreiro: {
        backgroundColor: 'rgb(210, 210, 210)',
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLetreiro: {
        fontSize: 25
    },
    textosCard: {
        flex: 1,
        flexDirection: 'column'
    },
    textNome: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    textData: {
        fontSize: 14,
        color: 'white'
    }  
})