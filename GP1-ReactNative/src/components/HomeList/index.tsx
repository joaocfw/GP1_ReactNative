import React, { useEffect, useState } from "react"
import { FlatList, View, Text, StyleSheet } from "react-native"
import { MovieCard } from "../MovieCard"
import { MovieListText } from "../MovieListTitle"
import { getMoviesByGenre } from "../../services/apiTMDB"
import { styles } from "./styles"
interface Movie {
  id: string;
  image: string;
}

interface HomeListProps {
  genreId: number 
  title: string
}

export const HomeList: React.FC<HomeListProps> = ({ genreId, title }) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviesByGenre(genreId)
        const formattedMovies = response.data.results.map((movie: any) => ({
          id: movie.id.toString(),
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }))
        setMovies(formattedMovies)
      } catch (error) {
        console.error("Erro ao buscar filmes do gênero:", error);
      }
    }

    fetchMovies() 
  }, [genreId])

    return (
        <View style={styles.movieListContainer}> 
        <MovieListText> {title} </MovieListText>
        <FlatList
            horizontal
            data={movies}
            renderItem={({ item }) => <MovieCard item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
        />
        </View>
    )
}
