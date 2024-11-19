import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import { Body } from "../../components/Body";
import favoritos_vazio from "../../assets/favoritos_vazio.png";
import Card from "../../components/Card";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [removed, setRemoved] = useState(false);

    //adicionar aos favoritos
    const addFavorite = (image) => {
        setFavorites([...favorites, {id: Math.random(), img, isChecked: false}]);
    };

    //remover dos favoritos
    const removeFavorite = (id) => {
        setFavorites(favorites.filter((favorite) => favorite.id !== id));
        setRemoved(true);
    };

    //atualizar checkbox
    const checkboxFavorites = (id) => {
        setFavorites(favorites.map((favorite) => 
            favorite.id === id ? 
        {...favorite, isChecked: !favorite.isChecked} 
        : favorite
        ));
    };

    return <Body> 
        <View style={}>
            {
                removed &&(
                    <View style={styles.removedContainer}>
                    <Image source={favoritos_vazio} style={styles.cardImageimage} />
                    <Text>
                        Removido dos favoritos com sucesso!
                    </Text>
                    </View>
                )}
            
        <Button title="Adicionar aos favoritos" onPress={() => addFavorite()} />
           
            <View styles={styles.cardsContainer}>
                {favorites.map((favorite)=>(
                    <Card
                    key={favorite.id}
                    image={favorite.image}
                    isChecked={favorite.isChecked}
                    onCheckbox={() => checkboxFavorites(favorite.id)}
                    onRemove={() => removeFavorite(favorite.id)}
                    />
                ))}
            </View>
        </View>
    </Body>
    
}

export default Favorites;