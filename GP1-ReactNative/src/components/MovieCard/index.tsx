import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">
export interface CardProps {
    item: {
        image: string;
    }
}

export const MovieCard: React.FC<CardProps> = ({ item }) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
   
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.movieCardContainer} onPress={() => navigation.navigate('MovieDetails')}>
            <Image source={{ uri: item.image }} style={styles.movieCardImage} />
        </TouchableOpacity>
    )
}