import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">
export interface CardProps {
    item: {
        id: string;
        image: string;
    }
}

export const Card: React.FC<CardProps> = ({ item }) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
   
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.CardContainer} onPress={() => navigation.navigate('MovieDetails',  { movieId: item.id })}>
            <Image source={{ uri: item.image }} style={styles.CardImage} />
        </TouchableOpacity>
    )
}