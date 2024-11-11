import React from 'react'
import { FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './stylesPag2'
import Search from './src/assets/search.png'
import House from './src/assets/casa.png'
import Union from './src/assets/union.png'
import Add from './src/assets/add.png'
import foto from './src/assets/fotoPerfil2.png'
import Imagem1 from './src/assets/1.png'
import Imagem2 from './src/assets/2.png'
import Imagem3 from './src/assets/3.png'
import Imagem4 from './src/assets/4.png'
import Imagem5 from './src/assets/5.png'
import Imagem6 from './src/assets/6.png'
import Imagem7 from './src/assets/7.png'
import Imagem8 from './src/assets/8.png'
import Imagem9 from './src/assets/9.png'
import Imagem10 from './src/assets/10.png'
import Imagem11 from './src/assets/11.png'
import Imagem12 from './src/assets/12.png'
import Imagem13 from './src/assets/13.png'
import Imagem14 from './src/assets/14.png'
import Imagem15 from './src/assets/15.png'
import Imagem16 from './src/assets/16.png'
import Imagem17 from './src/assets/17.png'
import Imagem18 from './src/assets/18.png'
import Imagem19 from './src/assets/19.png'
import Imagem20 from './src/assets/20.png'
import Imagem21 from './src/assets/21.png'
import Imagem22 from './src/assets/22.png'
import Imagem23 from './src/assets/23.png'
import Imagem24 from './src/assets/24.png'
import Procurar from './src/assets/procurar.png'

const DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem1,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem2,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem3,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem4,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem5,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem6,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem7,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem8,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem9,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem10,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem11,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem12,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem13,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem14,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem15,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem16,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem17,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem18,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem19,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem20,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem21,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem22,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem23,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem24,
    },
]
export default function App() {

    return <View style={styles.container}>
        <StatusBar backgroundColor='#121212' barStyle='light-content' />
        <View style={styles.inputContainer}>
            <Image source={Search} style={styles.inputIcon} />
            <TextInput
                style={styles.input}
                placeholderTextColor={'#939393'}
                placeholder='Pesquisar'
            />
        </View>
        <View style={styles.feed}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                numColumns={3}
                contentContainerStyle={styles.flatListContent}
                renderItem={item => (
                    <Image source={item.item.photoURL} style={styles.feedImg} />
                )}
            />
        </View>
        <View style={styles.footer}>
            <View style={styles.contentFooter}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={House} style={styles.footerIcon} />
                </TouchableOpacity>
                <Image source={Procurar} style={styles.footerIcon} />
                <TouchableOpacity activeOpacity={0.6}>
                    <Image style={styles.footerIcon} source={Add} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={Union} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={foto} style={styles.footerImg} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
}