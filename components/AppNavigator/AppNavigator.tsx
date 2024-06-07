import React, {useCallback, useContext, useEffect} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePageProps, PageSwitchTemplateProps, RootStackParamList } from '../../types/types';
import HomeScreen from '../HomeScreen/HomeScreen';





const PageSwitchTemplate: React.FC<PageSwitchTemplateProps> = ({ navigation, children}) => {
  const pageChanger = (page: keyof RootStackParamList, params?: any) => {
    navigation.navigate(page, params);
  };

  return React.cloneElement(children, {pageSwitcher: pageChanger });
};

export const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <PageSwitchTemplate navigation={navigation}>
          <HomeScreen/>
    </PageSwitchTemplate>

  );
}

// export const PostByCategoryPage: React.FC<any> = ({ navigation, route }) => {
//   const { category } = route.params;
//   return (
//     <PageSwitchTemplate navigation={navigation}>
//       <PostByCategoryScreen category={category}/>
//     </PageSwitchTemplate>
//   );
// };

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
       <Stack.Navigator
         screenOptions={{
           headerShown: false
         }}
       >
         <Stack.Screen name="Home" component={HomePage} options={{headerBackVisible: false, gestureEnabled: false}}  />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;