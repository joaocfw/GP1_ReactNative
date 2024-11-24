import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useFavorites } from '../../Context/FavoritesContext';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigation/types';
import { Card } from '../../components/Card';
import Body from '../../components/Body';
import NoFavorites from '../../assets/NoFavorites.png'
import HeaderSignOut from '../../components/HeaderSignOut';
import CustomTitle from '../../components/Title';
import { useAuth } from "../../Context/ContextSignIn";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Favoritos = () => {
    const { favorites } = useFavorites();
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { user } = useAuth();

    const SignOut = () => {
        navigation.navigate("SignIn");
    };

    return (
        <Body customStyle={{}}>
            <View style={styles.headerHome}>
                <CustomTitle title="Favoritos" iconSource={require("../../../src/assets/image 2.png")} />
                <HeaderSignOut userName={user?.nome || "Usuário"} onSignOut={SignOut} />
            </View>
            {favorites.length === 0 ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                    <Image source={NoFavorites} />
                    <Text style={styles.noResultsText}>Nenhum resultado encontrado</Text>
                </View>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id}
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
                                onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
                            >
                                <Card
                                    item={{
                                        id: item.id,
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
