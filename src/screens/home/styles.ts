import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgb(30, 30, 30)'
  },
  header: {
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTopo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: 'center'
  },
  lista: {
    flex: 1,
    backgroundColor: 'rgb(60, 60, 60)',
    color: "black",
    rowGap: 30,
    padding: 10
  },
  titulo: {
    flex: 1,
    fontSize: 25,
    color: 'white'
  },
  btnAdd: {
    backgroundColor: '#28a745',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 30
  },
  textBtn: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "white",
    paddingBottom: 3,
    paddingLeft: 1
  },
  textVazio: {
    fontSize: 16,
    alignSelf: 'center',
    color: "white"
  }
});
