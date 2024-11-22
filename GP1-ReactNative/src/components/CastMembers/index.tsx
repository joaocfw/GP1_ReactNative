import React from "react"
import { FlatList, View, Image } from "react-native"
import { styles } from "./styles"

export const CastMembers = () => {

    const DATA = [
        {
            id: Math.random().toString(36).substring(2, 27),
            imageURL: 'https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg',
        },
        {
            id: Math.random().toString(36).substring(2, 27),
            imageURL: 'https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg',
        },
    ]

    return (
        <View style={styles.castListContainer}>
            <FlatList
                horizontal={true}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.castCard} key={item.id}>
                        <View style={styles.castCardBorder}>
                            <Image source={{ uri: item.imageURL }} style={styles.castCardImage} />
                        </View>
                    </View>
                )}
            />
        </View>
    )
}
