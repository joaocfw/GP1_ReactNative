import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Linking, Alert, Modal } from "react-native";
import { styles } from "./styles";
import BackButton from '../../assets/BackButton.png';
import FavButton from '../../assets/FavButton.png';
import FavButtonRed from '../../assets/FavButtonRed.png'
import PlayButton from '../../assets/PlayButton.png';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigation/types";
import { useFavorites } from "../../Context/FavoritesContext";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "MovieDetails">;

interface PageTopProps {
  image: string;
  title: string;
  trailerUrl: string | null;
  movieId: string;
  isFavorite: boolean; 
}

export const PageTop: React.FC<PageTopProps> = ({ image, title, trailerUrl, movieId, isFavorite }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { addFavorite, removeFavorite } = useFavorites();
  const [modalVisible, setModalVisible] = useState(false); 
  const [modalMessage, setModalMessage] = useState("");
  const [modalImage, setModalImage] = useState<any>(null);  

  const BackHome = () => {
    navigation.navigate("HomeMain");
  };

  const handlePlayPress = () => {
    if (trailerUrl) {
      Linking.openURL(trailerUrl);
    }
  };

  const handleFavoritePress = () => {
    if (isFavorite) {
      removeFavorite(movieId);
      setModalMessage("Filme removido dos favoritos!");  // Definindo a mensagem
      setModalImage(require('../../assets/FavRemove.png')); // Definindo imagem de "removido"
    } else {
      addFavorite({
        id: movieId,
        image,
      });
      setModalMessage("Filme adicionado aos favoritos!");  // Definindo a mensagem
      setModalImage(require('../../assets/FavAdd.png')); // Definindo imagem de "adicionado"
    }
    setModalVisible(true);  // Mostra o modal
  };

  const closeModal = () => {
    setModalVisible(false); 
  }

  return (
    <View style={styles.pageTopContainer}>
      <Image source={{ uri: image }} style={styles.pageTopImage} />
      <TouchableOpacity activeOpacity={0.7} style={styles.pageTopBackButton} onPress={BackHome}>
        <Image source={BackButton} style={styles.pageTopBackButtonImg} />
      </TouchableOpacity>
      <View style={styles.itensContainer}>
        <Text style={styles.pageTopText}>{title}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.pageTopFavButton}
            onPress={handleFavoritePress}
          >
            <Image source={isFavorite ? FavButtonRed : FavButton} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.pageTopPlayButton}
            onPress={handlePlayPress}
          >
            <Image source={PlayButton} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {modalImage && <Image source={modalImage} style={styles.modalImage} />}
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};