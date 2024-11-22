import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import Body from "../../components/Body"
import { PageTop } from "../../components/PageTop";
import { MovieListText } from "../../components/MovieListTitle";
import { styles } from "./styles";
import { CastMembers } from "../../components/CastMembers";
export const MovieDetails = () => {

    return (

        <Body customStyle={{}}>
            <ScrollView>
                <PageTop />
                <View>
                    <MovieListText> Descrição </MovieListText>
                    <Text style={styles.descricaoText}> "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                </View>
                <View>
                    <MovieListText> Elenco </MovieListText>
                    <CastMembers/>
                </View>
            </ScrollView>
        </Body>
    )
}

export default MovieDetails;