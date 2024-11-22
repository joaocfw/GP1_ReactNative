import React from "react"
import { FlatList, View, Image, Text } from "react-native"
import { styles } from "./styles"

interface CastMembersProps {
  data: Array<{
    id: number
    profile_path: string | null
    name: string
    character: string
  }>
}

export const CastMembers: React.FC<CastMembersProps> = ({ data }) => {
  return (
    <View style={styles.castListContainer}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.castCard}>
            <View style={styles.castCardBorder}>
              <Image
                source={{
                  uri: item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : "https://via.placeholder.com/200x300", 
                }}
                style={styles.castCardImage}
              />
            </View>
              <Text style={styles.castCardText}>{item.name}</Text>
              <Text style={styles.castCardText}>{item.character}</Text>
          </View>
        )}
      />
    </View>
  )
}
