import React, { useState } from "react";
import { Button, Image, View, Text } from "react-native";
import { Body } from "../../components/Body";
import favoritos_vazio from "../../assets/favoritos_vazio.png";
import Card from "../../components/Card";
import { styles } from "./styles";

type FavoriteItem = {
    id: string;
    image: any;
    isChecked: boolean;
};

const Favorites = () => {

    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
    const [removed, setRemoved] = useState(false);

    //adicionar aos favoritos
    const addFavorite = (image: any) => {
        setFavorites([...favorites, { id: Math.random().toString(), image: image, isChecked: false },
        ]);
        setRemoved(false);
    }

    //remover dos favoritos
    const removeFavorite = (id: any) => {
        setFavorites(favorites.filter((favorite) => favorite.id !== id));
        setRemoved(true);
    };

    //atualizar checkbox
    const checkboxFavorites = (id: String) => {
        setFavorites(favorites.map((favorite) =>
            favorite.id === id ?
                { ...favorite, isChecked: !favorite.isChecked }
                : favorite

        ))
    };

    return <Body>
        <View style={styles.cardsContainer}>
            {
                removed && (
                    <View style={styles.removedContainer}>
                        <Image source={favoritos_vazio} style={styles.cardImage} />
                        <Text style={styles.removedText}>Favorito removido com sucesso!</Text>

                    </View>
                )}

            <Button title="Adicionar aos favoritos" onPress={addFavorite} />

            <View style={styles.cardsContainer}>
                {favorites.map((favorite) => (
                    <Card
                        key={favorite.id}
                        image={favorite.image}
                        isChecked={favorite.isChecked}
                        onCheck={() => checkboxFavorites(favorite.id)}
                        onRemove={() => removeFavorite(favorite.id)}
                    />
                ))}
            </View>
        </View>
    </Body>

}

export default Favorites;