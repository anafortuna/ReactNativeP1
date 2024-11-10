import React from 'react'
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import { styles } from './stylesPag2'
import Search from './src/assets/search.png'
import House from './src/assets/house.png'
import Union from './src/assets/union.png'
import Add from './src/assets/add.png'
import foto from './src/assets/foto.png'
import Imagem from './src/assets/image.png'

const DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: Imagem,
    },
]
export default function App() {

    return <View style={styles.container}>
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
                <Image source={House} />
                <Image source={Search} />
                <Image style={styles.imgPlus} source={Add} />
                <Image source={Union} />
                <Image source={foto} style={styles.footerImg} />
            </View>
        </View>
    </View>
}