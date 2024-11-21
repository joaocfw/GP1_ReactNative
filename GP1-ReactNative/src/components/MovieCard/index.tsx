import React, { FC } from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

type CardProps = {
    image: ImageSourcePropType; 
};

export const MovieCard: FC<CardProps> = ({ image }) => {
    return (
        <View style={styles.movieCardContainer}>
            <Image source={image} style={styles.movieCardImage} />
        </View>
    );
};