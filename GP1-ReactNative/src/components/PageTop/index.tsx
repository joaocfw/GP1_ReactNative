import React from "react";
import { View, Image, Text, TouchableOpacity, Linking, Alert } from "react-native";
import { styles } from "./styles";
import BackButton from '../../assets/BackButton.png';
import FavButton from '../../assets/FavButton.png';
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
}

export const PageTop: React.FC<PageTopProps> = ({ image, title, trailerUrl, movieId }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  const BackHome = () => {
    navigation.navigate("HomeMain");
  };

  const handlePlayPress = () => {
    if (trailerUrl) {
      Linking.openURL(trailerUrl);
    }
  };

  const handleFavoritePress = () => {
    const isAlreadyFavorite = favorites.some((item) => item.id === movieId);

    if (isAlreadyFavorite) {
      removeFavorite(movieId);
      Alert.alert("Favoritos", "Filme removido dos favoritos!");
    } else {
      addFavorite({
        id: movieId,
        image,
      });
      Alert.alert("Favoritos", "Filme adicionado aos favoritos!");
    }
  };


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
            <Image source={FavButton} />
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
    </View>
  );
};
