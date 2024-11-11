import React from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles'
import Logo from './src/assets/logo.png'
import Stroke from './src/assets/stroke.png'
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
import Perfil from './src/assets/fotoPerfil.png'
import PerfilFooter from './src/assets/fotoPerfil2.png'
import Down from './src/assets/down.png'
import Message from './src/assets/message.png'
import Imagem1 from './src/assets/1.png'
import Imagem2 from './src/assets/2.png'
import Imagem3 from './src/assets/3.png'
import Imagem4 from './src/assets/4.png'

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Perfil,
    name: "Seu story",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
    name: "Ana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Carla",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "João",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Marta",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto,
    name: "Ana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Carla",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto3,
    name: "João",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto4,
    name: "Marta",
  },
]

const FEED = [
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'Ana',
    foto: foto, 
    pontos: Points, 
    imagemPost: Imagem1, 
    curtidas: 221,
    legenda: 'Comentário aqui',
    autorLegenda: 'Ana',
    tempoPostagem: 'Há 22 horas',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'Carla',
    foto: foto2, 
    pontos: Points, 
    imagemPost: Imagem2, 
    curtidas: 221,
    legenda: 'Comentário aqui',
    autorLegenda: 'Carla',
    tempoPostagem: 'Há 22 horas',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'João',
    foto: foto3,
    pontos: Points, 
    imagemPost: Imagem3, 
    curtidas: 221,
    legenda: 'Comentário aqui',
    autorLegenda: 'João',
    tempoPostagem: 'Há 22 horas',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'Marta',
    foto: foto4, 
    pontos: Points, 
    imagemPost: Imagem4, 
    curtidas: 221,
    legenda: 'Comentário aqui',
    autorLegenda: 'Marta',
    tempoPostagem: 'Há 22 horas',
  },
];
export default function App() {

  return <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={Logo} />
        <Image source={Down} style={styles.downIcon} />
      </View>
      <View style={styles.headerOptions}>
        <Image source={Stroke} />
        <Image source={Message} style={styles.messageIcon}/>
      </View>
    </View>
    <View style={styles.stories}>
      <FlatList
        horizontal={true}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.storiesCard} key={item.id}>
            <View style={styles.storiesCardBorder}>
              <Image source={item.photoURL} style={styles.storiesCardImage} />
            </View>
            <Text style={styles.storiesName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
    <FlatList
      data={FEED}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <View style={styles.storiesCard}>
                <View style={styles.storiesCardBorder}>
                  <Image source={item.foto} style={styles.contentHeaderImg} />
                </View>
              </View>
              <Text style={styles.contentHeaderImgText}>{item.nome}</Text>
            </View>
            <Image source={item.pontos} />
          </View>
          <View>
            <Image style={styles.contentImg} source={item.imagemPost} />
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
            <Text style={styles.textLikes}>{item.curtidas} curtidas</Text>
            <View style={styles.comment}>
              <Text style={styles.textSubtitleTitle}>{item.autorLegenda}</Text>
              <Text style={styles.textSubtitle}>{item.legenda}</Text>
            </View>
            <Text style={styles.textComment}>Ver todos os comentários</Text>
            <View style={styles.comment}>
              <Text style={styles.timeComment}>{item.tempoPostagem} . </Text>
              <Text style={styles.textSubtitleTitle}>Ver tradução</Text>
            </View>
          </View>
        </View>
      )}
    />
    <View style={styles.footer}>
      <View style={styles.contentFooter}>
        <Image source={House} />
        <Image source={Search} />
        <Image style={styles.imgPlus} source={Add} />
        <Image source={Union} />
        <Image source={PerfilFooter} style={styles.footerImg} />
      </View>
    </View>
  </View>
}

