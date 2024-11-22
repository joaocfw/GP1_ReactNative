import React, { useEffect, useState } from "react"
import { Image, Text, View, ScrollView } from "react-native"
import Body from "../../components/Body"
import { PageTop } from "../../components/PageTop"
import { MovieListText } from "../../components/MovieListTitle"
import { styles } from "./styles"
import { CastMembers } from "../../components/CastMembers"
import { getMovieDetails, getMovieCast } from "../../services/apiTMDB"

export const MovieDetails = ({ route }: { route: any }) => {
    const { movieId } = route.params

    const [movieDetails, setMovieDetails] = useState<any>(null);
    const [cast, setCast] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMovieDetails(movieId);
                const details = response.data;

                const castResponse = await getMovieCast(movieId);
                const castList = castResponse.data.cast;
        
                setMovieDetails(details)

                if (Array.isArray(castList)) {
                    setCast(castList.slice(0, 10))
                } else {
                    console.error("O elenco não está no formato esperado.")
                }
            } catch (error) {
                console.error("Erro ao carregar os dados do filme:", error)
            }
        }

        fetchData()
    }, [movieId])

    if (!movieDetails) return <Text>Carregando...</Text>

    return (
        <Body customStyle={{}}>
            <ScrollView>
                <PageTop
                    image={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                    title={movieDetails.title}
                />
                <View>
                    <MovieListText> Descrição </MovieListText>
                    <Text style={styles.descricaoText}>{movieDetails.overview}</Text>
                </View>
                <View>
                    <MovieListText> Elenco </MovieListText>
                    <CastMembers data={cast} />
                </View>
            </ScrollView>
        </Body>
    )
}

export default MovieDetails
