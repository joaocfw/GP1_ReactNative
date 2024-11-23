import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useFavorites } from '../../Context/FavoritesContext';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/types';
import { Card } from '../../components/Card';
import Body from '../../components/Body';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Favoritos = () => {
    const { favorites } = useFavorites();
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <Body customStyle={{}}>
            <Text style={styles.titulo}>Favoritos</Text>

            {favorites.length === 0 ? (
                <Text style={styles.semFavoritos}>Você ainda não tem filmes favoritos</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={styles.lista}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                onPress={() => navigation.navigate("MovieDetails", { movieId: item.id.toString() })}
                            >
                                <Card
                                    item={{
                                        id: item.id.toString(),
                                        image: item.image,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </Body>
    );
};

export default Favoritos;
