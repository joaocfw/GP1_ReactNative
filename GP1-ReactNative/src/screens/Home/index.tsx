import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView, FlatList, Dimensions } from "react-native";
import Body from "../../components/Body";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";
import { HomeList } from "../../components/HomeList";
import { styles } from './styles'
import HeaderHome from '../../assets/HeaderHome.png'
import { getPopularMovies } from "../../services/apiTMDB";
export const Home = () => {
    const [popularMovies, setPopularMovies] = useState<any[]>([]); // Estado para armazenar filmes populares
    const windowWidth = Dimensions.get("window").width; // Largura da tela

    // Buscar filmes populares assim que o componente for montado
    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await getPopularMovies();
                const formattedMovies = response.data.results.map((movie: any) => ({
                    id: movie.id.toString(),
                    source: { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }, // Formatar imagem do filme
                }));
                setPopularMovies(formattedMovies); // Atualizar o estado com filmes populares
            } catch (error) {
                console.error("Erro ao buscar filmes populares:", error);
            }
        };

        fetchPopularMovies(); // Chama a função para buscar filmes populares
    }, []); // O array vazio faz a requisição apenas uma vez, ao carregar o componente

    return (

        <Body customStyle={{}}>
            <ScrollView>
                <View style={styles.headerHome}>
                    <Image source={HeaderHome} />
                    <Text style={styles.headerHomeText}> Bem-vindo, Fulano.</Text>
                </View>
                <View style={{ marginBottom: 10, width: windowWidth, height: 500}}>
                    <FlatList
                        data={popularMovies}
                        horizontal
                        pagingEnabled  // Ativa a rolagem de uma imagem por vez
                        showsHorizontalScrollIndicator={false} // Remove o indicador de rolagem
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={{ width: windowWidth, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={item.source} style={{width: windowWidth,  height: 500, resizeMode: 'stretch'}} />
                            </View>
                        )}
                    />
                </View>
                <HomeList genreId={28} title="Filmes de Ação" />
                <HomeList genreId={35} title="Filmes de Comédia" />
                <HomeList genreId={27} title="Filmes de Terror" />
            </ScrollView>
        </Body>
    )
}

export default Home;