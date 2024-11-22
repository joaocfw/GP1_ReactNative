import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import FavButton from '../../assets/FavButton.png'
import PlayButton from '../../assets/PlayButton.png'

export const PageTop = () => {
    return (
        <View style={styles.pageTopContainer}>
            < Image source={{ uri: 'https://lunetas.com.br/wp-content/uploads/2023/07/5-brincadeiras-inspiradas-em-filmes-para-fazer-com-as-criancas-portal-lunetas.jpg' }} style={styles.pageTopImage} />
            <View style={styles.itensContainer}>
                <Text style={styles.pageTopText}> Nome do Filme </Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.pageTopFavButton}>
                    <Image source={FavButton} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.pageTopPlayButton}>
                    <Image source={PlayButton} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
