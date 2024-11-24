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
  const maxLength = 15

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
                    : "https://bitslog.com/wp-content/uploads/2013/01/unknown-person1.gif", 
                }}
                style={styles.castCardImage}
              />
            </View>
             <Text style={styles.castCardText}>
              {item.name.length > maxLength
                ? `${item.name.slice(0, maxLength)}...`
                : item.name}
            </Text>
            <Text style={styles.castCardText}>
              {item.character.length > maxLength
                ? `${item.character.slice(0, maxLength)}...`
                : item.character}
            </Text>
          </View>
        )}
      />
    </View>
  )
}
