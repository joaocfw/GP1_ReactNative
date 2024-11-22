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
    flexDirection: "column",  
    justifyContent: "flex-start", 
    paddingHorizontal: 20,  
    paddingTop: 10,  
  },
  pageTopText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row", 
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
