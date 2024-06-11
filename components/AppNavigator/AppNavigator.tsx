import React, {useCallback, useContext, useEffect} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultPageProps, PageSwitchTemplateProps, RootStackParamList } from '../../types/types';
import HomeScreen from '../HomeScreen/HomeScreen';
import GuideScreen from '../GuideScreen/GuideScreen';
import SetUpScreen from '../SetUpScreen/SetUpScreen';





const PageSwitchTemplate: React.FC<PageSwitchTemplateProps> = ({ navigation, children}) => {
  const pageChanger = (page: keyof RootStackParamList, params?: any) => {
    navigation.navigate(page, params);
  };

  return React.cloneElement(children, {pageSwitcher: pageChanger });
};

export const HomePage: React.FC<DefaultPageProps> = ({ navigation }) => {
  return (
    <PageSwitchTemplate navigation={navigation}>
          <HomeScreen/>
    </PageSwitchTemplate>

  );
}
export const GuidePage: React.FC<DefaultPageProps> = ({ navigation }) => {
    return (
      <PageSwitchTemplate navigation={navigation}>
            <GuideScreen/>
      </PageSwitchTemplate>
  
    );
  }

  export const SetUpPage: React.FC<DefaultPageProps> = ({ navigation }) => {
    return (
      <PageSwitchTemplate navigation={navigation}>
            <SetUpScreen/>
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
         <Stack.Screen name="Home" component={HomePage} />
         <Stack.Screen name="Guide" component={GuidePage} />
         <Stack.Screen name="SetUp" component={SetUpPage} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;