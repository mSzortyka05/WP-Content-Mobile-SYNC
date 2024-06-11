import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './components/AppNavigator/AppNavigator';
import { AxiosProvider } from './components/AxiosProvider/AxiosProvider';

export default function App() {
  return (
    <AxiosProvider>
      <AppNavigator />
    </AxiosProvider>
  );
}

