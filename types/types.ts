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
  LogIn: undefined;
  SignUp: undefined;
  Main: undefined;
  Excercises: { description: string };
  NewFlashcard: undefined;
  FlashcardsList: { range: string };
  FlashcardsSet: { id: number };
  Auth: undefined;
  Notes: undefined
  CreatePost: undefined
  UserExercises: {description: string}
  PostByCategory: {description: string}
  Exams: undefined
  AddExam: undefined
};

export interface PageSwitchTemplateProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >; //typy do dopracowania
  children: JSX.Element;
}

export interface HomePageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

export interface LogInPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "LogIn">;
}

export interface MainProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Main">;
}

export interface SignUpPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignUp">;
}

export interface AuthPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Auth">;
}

export interface ExcercisesPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Excercises">;
  route: {
    params: {
      searchableText: string;
    };
  };
}

export interface NewFlashcardPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "NewFlashcard">;
}

export interface IStylesVariable {
  LogoSize: number;
  ButtonSize: DimensionValue | undefined;
  InputSize: number;
}
