import React from 'react'
import { FlatList, Image, View } from 'react-native'

import styles from './styles'

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
