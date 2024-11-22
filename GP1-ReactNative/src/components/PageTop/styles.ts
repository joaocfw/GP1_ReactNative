import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageTopContainer: {
    flexDirection: "column",
    width: "100%",
    height: 500,
  },
  pageTopImage: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  itensContainer: {
    backgroundColor: "rgba(22, 22, 22, 0.5)",
    position: "absolute",
    top: 350,
    width: "100%",
    height: 'auto',
    flexDirection: "column",  // Organiza os itens na coluna
    justifyContent: "flex-start",  // Alinha os itens do topo
    paddingHorizontal: 20,  // Para adicionar um pouco de espaçamento lateral
    paddingTop: 10,  // Para garantir que o título não fique encostado no topo
  },
  pageTopText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",  // Organiza os botões em linha
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  pageTopFavButton: {
    marginRight: 20,
  },
  pageTopBackButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  pageTopBackButtonImg: {
    width: 20,
    height: 20,
  },
  pageTopPlayButton: {
    marginLeft: 20,
  },
});
