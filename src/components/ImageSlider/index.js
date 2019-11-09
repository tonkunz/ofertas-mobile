import React from 'react'
import { FlatList, StyleSheet, Image, View, Dimensions } from 'react-native'

export default function ImageSlider({ images }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={images}
        keyExtractor={item => images.indexOf(item).toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image style={styles.thumbnail} source={{ uri: item.url }} />
          </View>
        )}
      />
    </View>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    marginBottom: 30
  },

  list: {
    paddingHorizontal: 5
  },

  listItem: {
    marginRight: 2
  },

  thumbnail: {
    width: width - 30,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 2
  }
})
