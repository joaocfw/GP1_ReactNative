import React, { FC } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type CardProps = {
    item: {
        image: string;
    };
};

export const MovieCard: FC<CardProps> = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.movieCardContainer}>
            <Image source={{ uri: item.image }} style={styles.movieCardImage} />
        </TouchableOpacity>
    );
};