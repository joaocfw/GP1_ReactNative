import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView, ActivityIndicator } from "react-native";
import Body from "../../components/Body";
import { PageTop } from "../../components/PageTop";
import { MovieListText } from "../../components/MovieListTitle";
import { styles } from "./styles";
import { CastMembers } from "../../components/CastMembers";
import { getMovieDetails, getMovieCast, getMovieTrailer } from "../../services/apiTMDB";
import Star from '../../assets/Star.png';
import StarHalf from '../../assets/StarHalfFilled.png';
import StarFilled from '../../assets/StarFilled.png';

interface RouteParams {
    route: {
        params: {
            movieId: string;
        };
    };
}

interface MovieDetailsType {
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
}

export const MovieDetails = ({ route }: RouteParams) => {
    const { movieId } = route.params;
    const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(null);
    const [cast, setCast] = useState<any[]>([]);
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMovieDetails(movieId.toString());
                const details = response.data;

                const castResponse = await getMovieCast(movieId.toString());
                const castList = castResponse.data.cast;

                const trailerResponse = await getMovieTrailer(movieId.toString());
                const trailer = trailerResponse.data.results.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );

                setTrailerUrl(trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null);
                setMovieDetails(details);

                if (Array.isArray(castList)) {
                    setCast(castList.slice(0, 10));
                } else {
                    console.error("O elenco não está no formato esperado.");
                }
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar os dados do filme:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [movieId]);

    if (loading) {
        return (
            <Body customStyle={{ justifyContent: "center", alignItems: 'center' }}>
                <ActivityIndicator size="large" color='#fff' />
            </Body>
        );
    }

    if (!movieDetails) {
        return (
            <Body customStyle={{ justifyContent: "center", alignItems: 'center' }}>
                <MovieListText>Detalhes do filme não encontrados.</MovieListText>
            </Body>
        );
    }

    const renderStars = (rating: number) => {
        const filledStars = Math.floor(rating / 2);
        const halfStar = rating % 2 >= 1;
        const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

        let stars = [];

        for (let i = 0; i < filledStars; i++) {
            stars.push(<Image key={`filled-${i}`} source={StarFilled} style={styles.star} />);
        }

        if (halfStar) {
            stars.push(<Image key="half" source={StarHalf} style={styles.star} />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Image key={`empty-${i}`} source={Star} style={styles.star} />);
        }

        return stars;
    };

    return (
        <Body customStyle={{}}>
            <ScrollView>
                <PageTop
                    image={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                    title={movieDetails.title}
                    trailerUrl={trailerUrl}
                    movieId={movieId}
                />
                <View>
                    <MovieListText>Descrição</MovieListText>
                    <Text style={styles.descricaoText}>{movieDetails.overview}</Text>
                </View>
                <View>
                    <MovieListText>Elenco</MovieListText>
                    <CastMembers data={cast} />
                </View>
                <View>
                    <MovieListText>Avaliação</MovieListText>
                    <View style={styles.starContainer}>
                        {renderStars(movieDetails.vote_average)}
                        <Text style={styles.averageText}>{movieDetails.vote_average.toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>
        </Body>
    );
};

export default MovieDetails;
