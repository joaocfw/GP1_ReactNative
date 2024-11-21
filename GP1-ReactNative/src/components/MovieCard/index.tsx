import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export interface CardProps {
    item: {
        image: string;
    };
};

export const MovieCard: React.FC<CardProps> = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.movieCardContainer}>
            <Image source={{ uri: item.image }} style={styles.movieCardImage} />
        </TouchableOpacity>
    );
};