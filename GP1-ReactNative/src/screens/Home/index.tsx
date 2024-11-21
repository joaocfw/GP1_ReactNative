import React from "react";
import { Image, Text, View } from "react-native";
import Body from "../../components/Body";
import { HomeList } from "../../components/HomeList";
import { styles } from './styles'
import HeaderHome from '../../assets/HeaderHome.png'


const DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        image: 'https://lumiere-a.akamaihd.net/v1/images/garland_intl_teaser2_poster_brazil_c487c296.jpeg',
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        image: 'https://lumiere-a.akamaihd.net/v1/images/garland_intl_teaser2_poster_brazil_c487c296.jpeg',
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        image: 'https://lumiere-a.akamaihd.net/v1/images/garland_intl_teaser2_poster_brazil_c487c296.jpeg',
    },
];
export const Home = () => {

    return (
            <Body customStyle={{}}>
                <View style={styles.headerHome}>
                    <Image source={HeaderHome} />
                    <Text style={styles.headerHomeText}> Bem-vindo, Fulano.</Text>
                </View>
                <Image source={{ uri: 'https://lunetas.com.br/wp-content/uploads/2023/07/5-brincadeiras-inspiradas-em-filmes-para-fazer-com-as-criancas-portal-lunetas.jpg' }} style={styles.mainImage} />
                <HomeList title='Ação' data={DATA} />
            </Body>
    )
}

export default Home;