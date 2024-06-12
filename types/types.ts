//types.ts
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DimensionValue } from "react-native";


export type PageChangerParams = {
  page: keyof RootStackParamList;
  params?: Record<string, any>; // You can make this more specific based on your actual parameters
};

export type RootStackParamList = {
  Home: undefined;
  Guide: undefined;
  SetUp: undefined;
  Main: undefined;
};

export interface PageSwitchTemplateProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >; //typy do dopracowania
  children: JSX.Element;
}

export interface DefaultPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, any>;
}

