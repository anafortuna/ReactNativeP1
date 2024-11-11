import React, { useState } from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import Logo from './src/assets/logo2.png'
import Stroke from './src/assets/stroke.png'
import foto from './src/assets/foto.png'
import foto2 from './src/assets/foto2.png'
import foto3 from './src/assets/foto3.png'
import foto4 from './src/assets/foto4.png'
import foto5 from './src/assets/Perfil1.png'
import foto6 from './src/assets/Perfil2.png'
import foto7 from './src/assets/Perfil3.png'
import foto8 from './src/assets/Perfil4.png'
import Points from './src/assets/points.png'
import Bookmark from './src/assets/Bookmark.png'
import BookmarkFilled from './src/assets/BookmarkFilled.png'
import Heart from './src/assets/Heart.png'
import RedHeart from './src/assets/redHeart.png'
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
import Imagem1 from './src/assets/Image1.png'
import Imagem2 from './src/assets/Image2.png'
import Imagem3 from './src/assets/Image3.png'
import Imagem4 from './src/assets/Image4.png'

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Perfil,
    name: "Seu story",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto5,
    name: "Ana",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto8,
    name: "Júlia",
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
    name: "Verônica",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto6,
    name: "Sabrina",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto7,
    name: "Maurício",
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: foto2,
    name: "Carla",
  },
]

const FEED = [
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'Ana',
    foto: foto5,
    imagemPost: Imagem1,
    curtidas: 221,
    legenda: 'Work work work',
    autorLegenda: 'Ana',
    tempoPostagem: 'Há 8 horas',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'Júlia',
    foto: foto8,
    imagemPost: Imagem2,
    curtidas: 154,
    legenda: 'Fim de tarde *.*',
    autorLegenda: 'Júlia',
    tempoPostagem: 'Há 15 horas',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'João',
    foto: foto3,
    imagemPost: Imagem3,
    curtidas: 325,
    legenda: 'Viagem com ela s2',
    autorLegenda: 'João',
    tempoPostagem: 'Há 18 horas',
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    nome: 'Marta',
    foto: foto4,
    imagemPost: Imagem4,
    curtidas: 102,
    legenda: 'Um sonho',
    autorLegenda: 'Marta',
    tempoPostagem: 'Há 22 horas',
  },
];

export default function App() {
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});
  const [likes, setLikes] = useState<{ [key: string]: number }>(
    FEED.reduce((acc, item) => {
      acc[item.id] = item.curtidas; // Inicializa o número de curtidas com o valor inicial
      return acc;
    }, {} as { [key: string]: number })
  );
  const [savedItems, setSavedItems] = useState<{ [key: string]: boolean }>({});

  const toggleSave = (itemId: string) => {
    setSavedItems((prevSavedItems) => ({
      ...prevSavedItems,
      [itemId]: !prevSavedItems[itemId],
    }));
  }; 

  const toggleLike = (itemId: string) => {
    setLikedItems((prevLikedItems) => {
      const isLiked = prevLikedItems[itemId];

      // Atualiza o número de curtidas
      setLikes((prevLikes) => ({
        ...prevLikes,
        [itemId]: isLiked ? prevLikes[itemId] - 1 : prevLikes[itemId] + 1,
      }));

      return {
        ...prevLikedItems,
        [itemId]: !isLiked,
      };
    });
  };

  return <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={Logo} style={styles.logoImg} />
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={Down} style={styles.downIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerOptions}>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={Stroke} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={Message} style={styles.messageIcon} />
        </TouchableOpacity>
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
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={Points} />
            </TouchableOpacity>
          </View>
          <View>
            <Image style={styles.contentImg} source={item.imagemPost} />
          </View>
          <View style={styles.contentFeed}>
            <View style={styles.contentLeft}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => toggleLike(item.id)}
              >
                <Image
                  source={likedItems[item.id] ? RedHeart : Heart} style={styles.heartIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={Comment} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={Share} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.6}
            onPress={() => toggleSave(item.id)}>
              <Image  source={savedItems[item.id] ? BookmarkFilled : Bookmark} style={styles.bookIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentText}>
            <Text style={styles.textLikes}>{likes[item.id]} curtidas</Text>
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
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={Search} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image style={styles.imgPlus} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={Union} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={PerfilFooter} style={styles.footerImg} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
}

