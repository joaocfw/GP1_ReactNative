import React from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { MovieCard } from "../MovieCard";
import { MovieListText } from "../MovieListTitle";

type HomeListProps = {
    data: Array<{ id: string; image: string;}>;
    title: string;
};
export const HomeList: React.FC<HomeListProps> = ({ data, title } ) => {
    return (
        <View style={styles.movieListContainer}> 
        <MovieListText> {title} </MovieListText>
        <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => <MovieCard item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
        />
        </View>
    );
};
