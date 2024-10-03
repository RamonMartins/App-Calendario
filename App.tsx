import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return(
    <SafeAreaProvider style={{backgroundColor: 'rgb(30, 30, 30)'}}>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <AppRoutes/>
        </NavigationContainer>
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
