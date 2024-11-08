import React from 'react'
import { FlatList, Image, View } from 'react-native';
import { styles } from './styles'
import Logo from './src/assets/logo.png'
import Stroke from './src/assets/stroke.png'
import Message from './src/assets/message.png'
import foto from './src/assets/foto.png'
import foto2 from './src/assets/foto2.png'
import foto3 from './src/assets/foto3.png'
import foto4 from './src/assets/foto4.png'

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
  },
]
export default function App() {

  return <View style={styles.container}>
    <View style={styles.header}>
      <Image source={Logo} />
      <View style={styles.headerOptions}>
        <Image source={Stroke} />
        <Image source={Message} />
      </View>
    </View>
    <View style={styles.stories}>
      <FlatList
        horizontal={true}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={item => (
          <View style={styles.storiesCard} key={item.item.id}>
            <Image source={item.item.photoURL} style={styles.storiesCardImage} />
          </View>

        )}
      />
    </View>
  </View >
}

