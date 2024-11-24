import React, { useEffect, useState } from "react";
import { Image, Text, View, FlatList, Dimensions, TextInput, TouchableOpacity } from "react-native";
import Body from "../../components/Body";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Search/styles";
import { searchMovies } from "../../services/apiTMDB";
import { useAuth } from "../../Context/ContextSignIn";
import image7 from "../../assets/image 7.png";
import { Card } from "../../components/Card";
import CustomTitle from "../../components/Title";
import HeaderSignOut from "../../components/HeaderSignOut";
import { MovieListText } from "../../components/MovieListTitle";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">;

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { user } = useAuth();
    const numColumns = 3;

    const fillWithEmptyItems = (data: any[], numColumns: number) => {
        const totalItems = Math.ceil(data.length / numColumns) * numColumns;
        return [...data, ...Array(totalItems - data.length).fill({ id: "empty", empty: true })];
    };

    const handleSearch = async (query: string) => {
        setSearchQuery(query);

        if (!query.trim()) {
            setFilteredMovies([]);
            return;
        }

        setLoading(true);
        try {
            const response = await searchMovies(query);
            const formattedMovies = response.data.results.map((movie: any) => ({
                id: movie.id,
                source: { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` },
                title: movie.title,
            }));
            setFilteredMovies(formattedMovies);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        } finally {
            setLoading(false);
        }
    };

    const SignOut = () => {
        navigation.navigate("SignIn");
    };

    return (
        <Body customStyle={{}}>
            <View style={styles.headerHome}>
                <CustomTitle title="Pesquisar" iconSource={require("../../../src/assets/image 2.png")} />
                <HeaderSignOut userName={user?.nome || "Usuário"} onSignOut={SignOut} />
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquise por nome ou gênero"
                    placeholderTextColor="#fff"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <MovieListText>Resultados</MovieListText>

            {loading && <Text style={styles.loadingText}>Carregando...</Text>}

            {searchQuery.trim() && filteredMovies.length > 0 ? (
                <FlatList
                    data={fillWithEmptyItems(filteredMovies, numColumns)}
                    numColumns={numColumns}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        item.empty ? (
                            <View style={{ flex: 1 }} />
                        ) : (
                            <View style={{ flex: 1, marginTop: 10 }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    onPress={() => navigation.navigate("MovieDetails", { movieId: item.id })}
                                >
                                    <Card
                                        item={{
                                            id: item.id,
                                            image: item.source.uri,
                                        }}
                                    />
                                    <Text style={styles.movieTitle}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                />
            ) : (
                !loading && (
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 200 }}>
                        <Image source={image7} />
                        <Text style={styles.noResultsText}>Nenhum resultado encontrado</Text>
                    </View>
                )
            )}
        </Body>
    );
};

export default Search;
