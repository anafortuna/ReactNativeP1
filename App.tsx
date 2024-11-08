import React from 'react'
import { Image, View } from 'react-native';
import { styles } from './styles'
import Logo from './src/assets/logo.png'
import Stroke from './src/assets/stroke.png'
import Message from './src/assets/message.png'
export default function App() {

  return <View style={styles.container}>
    <View style={styles.header}>
      <Image source={Logo} />
      <View style={styles.headerOptions}>
        <Image source={Stroke} />
        <Image source={Message} />
      </View>
    </View>
  </View >
}

