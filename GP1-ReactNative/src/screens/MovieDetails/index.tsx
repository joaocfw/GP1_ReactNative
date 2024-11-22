import React, { useEffect, useState } from "react"
import { Image, Text, View, ScrollView } from "react-native"
import Body from "../../components/Body"
import { PageTop } from "../../components/PageTop"
import { MovieListText } from "../../components/MovieListTitle"
import { styles } from "./styles"
import { CastMembers } from "../../components/CastMembers"
import { getMovieDetails, getMovieCast, getMovieTrailer } from "../../services/apiTMDB"

export const MovieDetails = ({ route }: { route: any }) => {
    const { movieId } = route.params
    const [movieDetails, setMovieDetails] = useState<any>(null);
    const [cast, setCast] = useState<any[]>([])
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMovieDetails(movieId)
                const details = response.data

                const castResponse = await getMovieCast(movieId)
                const castList = castResponse.data.cast

                const trailerResponse = await getMovieTrailer(movieId)
                const trailer = trailerResponse.data.results.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                  )
        
                setTrailerUrl(trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null);
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
                    trailerUrl={trailerUrl}
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
