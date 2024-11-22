import React from "react";
import { View, Text, Image, Modal, TouchableOpacity, FlatList } from "react-native";
import Body from "../../components/Body";
import favoritos_vazio from "../../assets/favoritos_vazio.png";
import Card from "../../components/Card";
import CustomTitle from "../../components/Title";
import { styles } from "./styles";
import { useFavorites } from '../../Context/FavoritesContext'
import favorito_removido from "../../assets/favorito_removido.png";


export const Favorites = () => {
    const { favorites, addFavorite, removeFavorite, checkboxFavorites, modalVisible, setModalVisible } = useFavorites();

    return (
        <Body customStyle={{}}>
            <CustomTitle title="Favoritos" iconSource={require("../../../src/assets/image 2.png")} />
            <View style={styles.cardsContainer}>
                {favorites && favorites.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Image source={favoritos_vazio} style={styles.cardImage} />
                        <Text style={styles.emptyText}>Nenhum favorito adicionado ainda!</Text>
                    </View>
                ) : (
                    <FlatList
                        data={favorites || []}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Card
                                image={item.image}
                                isChecked={item.isChecked}
                                onCheck={() => checkboxFavorites(item.id)}
                                onRemoved={() => removeFavorite(item.id)}
                            />
                        )}
                    />
                )}
            </View>

            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={favorito_removido} style={styles.modalImage} />
                        <Text style={styles.modalText}>Favorito(s) Removido(s) com sucesso!</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </Body>
    );
};

export default Favorites;
