import React from "react";
import { Image } from "react-native";
import Body from "../../components/Body";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";
import { HomeList } from "../../components/HomeList";
import { styles } from './styles'
import { ScrollView } from "react-native-gesture-handler";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">

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
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
            <Body customStyle={{}}>
                <Image source={{ uri: 'https://lunetas.com.br/wp-content/uploads/2023/07/5-brincadeiras-inspiradas-em-filmes-para-fazer-com-as-criancas-portal-lunetas.jpg' }} style={styles.mainImage} />
                <HomeList title='Ação' data={DATA} />
            </Body>
    )
}