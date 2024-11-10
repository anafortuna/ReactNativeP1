import React from 'react'
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from './styles'
import Logo from './src/assets/logo.png'
import Stroke from './src/assets/stroke.png'
import Message from './src/assets/message.png'
import foto from './src/assets/foto.png'
import foto2 from './src/assets/foto2.png'
import foto3 from './src/assets/foto3.png'
import foto4 from './src/assets/foto4.png'
import Points from './src/assets/points.png'
import Imagem from './src/assets/image.png'
import Bookmark from './src/assets/Bookmark.png'
import Heart from './src/assets/Heart.png'
import Comment from './src/assets/Comment.png'
import Share from './src/assets/Share.png'
import House from './src/assets/house.png'
import Search from './src/assets/search.png'
import Union from './src/assets/union.png'
import Add from './src/assets/add.png'

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
    name: "Ciclana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Ciclana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "Ciclana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Ciclana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Ciclana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "Ciclana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Ciclana",
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
            <View style={styles.storiesCardBorder}>
              <Image source={item.item.photoURL} style={styles.storiesCardImage} />
            </View>
            <Text style={styles.storiesName}> {item.item.name} </Text>
          </View>
        )}
      />
    </View>
    <View style={styles.content}>
      <View style={styles.contentHeader}>
        <View style={styles.contentHeaderLeft}>
          <View style={styles.storiesCard}>
            <View style={styles.storiesCardBorder}>
              <Image source={foto} style={styles.contentHeaderImg} />
            </View>
          </View>
          <Text style={styles.contentHeaderImgText}>Fulana</Text>
        </View>
        <Image source={Points} />
      </View>
      <View>
        <Image style={styles.contentImg} source={Imagem} />
      </View>
      <View style={styles.contentFeed}>
        <View style={styles.contentLeft}>
          <Image source={Heart} />
          <Image source={Comment} />
          <Image source={Share} />
        </View>
        <Image source={Bookmark} />
      </View>
      <View style={styles.contentText}>
        <Text style={styles.textLikes}>221 curtidas</Text>
        <View style={styles.comment}>
          <Text style={styles.textSubtitleTitle}>Ciclana</Text>
          <Text style={styles.textSubtitle}>Comentário aqui</Text>
        </View>
        <Text style={styles.textComment}>Ver todos os comentários</Text>
        <View style={styles.comment}>
          <Text style={styles.timeComment}>Há 22 horas . </Text>
          <Text style={styles.textSubtitleTitle}>Ver tradução</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.contentFooter}>
          <Image source={House} />
          <Image source={Search} />
          <Image style={styles.imgPlus} source={Add} />
          <Image source={Union} />
          <Image source={foto} style={styles.footerImg} />
        </View>
      </View>
    </View>
  </View>
}

