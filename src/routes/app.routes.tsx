import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/home"
import CadastroContatos from "../screens/cadastro"
import Detalhes from "../screens/detalhes"

const StackDoApp = createNativeStackNavigator()
const { Navigator, Screen } = StackDoApp

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="HomeScreen"
                component={Home}
                
            />

            <Screen
                name="CadastroScreen"
                component={CadastroContatos}
                
            />

            <Screen
                name="DetalhesScreen"
                component={Detalhes}
                
            />

        </Navigator>
    )
}