import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import Body from "../../components/Body"
import { PageTop } from "../../components/PageTop";
export const MovieDetails = () => {

    return (

        <Body customStyle={{}}>
            <ScrollView>
               <PageTop/>
            </ScrollView>
        </Body>
    )
}

export default MovieDetails;