import React, { useEffect, useState } from "react"
import { Image, Text, View, ScrollView, FlatList, Dimensions, TouchableOpacity, Button } from "react-native"
import Body from "../../components/Body"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../Navigation/types"
import { useNavigation } from "@react-navigation/native"
import { HomeList } from "../../components/HomeList"
import { styles } from './styles'
import HeaderHome from '../../assets/HeaderHome.png'
import { getPopularMovies } from "../../services/apiTMDB"
import { useAuth } from "../../Context/ContextSignIn"

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">
export const Home = () => {
    const [popularMovies, setPopularMovies] = useState<{ id: string; source: { uri: string } }[]>([]);
    const windowWidth = Dimensions.get("window").width 
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { user } = useAuth();

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await getPopularMovies();
                const formattedMovies = response.data.results.map((movie: any) => ({
                    id: movie.id.toString(),
                    source: { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }, 
                }));
                setPopularMovies(formattedMovies)
            } catch (error) {
                console.error("Erro ao buscar filmes populares:", error)
            }
        };

        fetchPopularMovies()
    }, [])

    const SignOut = () => {
        navigation.navigate("SignIn")
    }

    return (

        <Body customStyle={{}}>
            <ScrollView>
                <View style={styles.headerHome}>
                    <Image source={HeaderHome} />
                    <Text style={styles.headerHomeText}> Bem-vindo, {user?.nome}.</Text>
                    <Button title="sair" onPress={SignOut} />
                </View>
                <View style={{ marginBottom: 10, width: windowWidth, height: 500}}>
                    <FlatList
                        data={popularMovies}
                        horizontal
                        pagingEnabled  
                        showsHorizontalScrollIndicator={false} 
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={1} style={{ width: windowWidth, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('MovieDetails', { movieId: item.id})}>
                                <Image source={item.source} style={{width: windowWidth,  height: 500, resizeMode: 'stretch'}} />
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <HomeList genreId={28} title="Filmes de Ação"/>
                <HomeList genreId={12} title="Filmes de Aventura"/>
                <HomeList genreId={16} title="Filmes de Animação"/>
                <HomeList genreId={35} title="Filmes de Comédia"/>
                <HomeList genreId={80} title="Filmes de Crime"/>
                <HomeList genreId={18} title="Filmes de Drama"/>
                <HomeList genreId={10751} title="Filmes para toda a Família"/>
                <HomeList genreId={14} title="Filmes de Fantasia"/>
                <HomeList genreId={878} title="Filmes de Ficção Científica"/>
                <HomeList genreId={53} title="Filmes de Guerra"/>
                <HomeList genreId={10749} title="Filmes de Romance"/>
                <HomeList genreId={27} title="Filmes de Terror"/>
            </ScrollView>
        </Body>
    )
}

export default Home;