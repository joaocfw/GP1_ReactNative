import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import Body from "../../components/Body";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";
import { HomeList } from "../../components/HomeList";
import { styles } from './styles'
import HeaderHome from '../../assets/HeaderHome.png'
export const Home = () => {

    return (
        <Body customStyle={{}}>
            <ScrollView>
                <View style={styles.headerHome}>
                    <Image source={HeaderHome} />
                    <Text style={styles.headerHomeText}> Bem-vindo, Fulano.</Text>
                </View>
                <Image source={{ uri: 'https://lunetas.com.br/wp-content/uploads/2023/07/5-brincadeiras-inspiradas-em-filmes-para-fazer-com-as-criancas-portal-lunetas.jpg' }} style={styles.mainImage} />
                <HomeList genreId={28} title="Filmes de Ação" />
                <HomeList genreId={35} title="Filmes de Comédia" />
                <HomeList genreId={27} title="Filmes de Terror" />
            </ScrollView>
        </Body>
    )
}

export default Home;