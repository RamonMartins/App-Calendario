import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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