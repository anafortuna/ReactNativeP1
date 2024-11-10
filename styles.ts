import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start', 
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    headerOptions: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingRight: 5,
    },
    storiesName: {
        marginTop: 5, // Espaço entre a imagem e o nome
        fontSize: 14, // Tamanho da fonte // Negrito, opcional
        textAlign: 'center', // Alinha o nome ao centro
        color: '#fff',
    },
    stories: {
        width: '100%',
        paddingLeft: 10,
        alignContent: 'center',
        paddingVertical: 10,
    },
    storiesCard: {
        marginRight: 14,
        padding: 2,
    },
    storiesCardImage: {
        width: 64,
        height: 64,
    },
    storiesCardBorder: {
        padding: 3, // Espaço preto entre a imagem e a borda colorida
        borderWidth: 2,
        borderColor: '#C13584',
        borderRadius: 50,
    },
    content: {
        marginBottom: 10,
    },
    contentHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 60,
        alignItems: 'center',
    },
    contentHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentHeaderImg: {
        width: 40,
        height: 40,
    },
    contentHeaderImgText: {
        color: '#fff',
    },
    contentImg: {
        marginVertical: 5,
    },
    contentFeed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 50,
        paddingLeft: 5,
    },
    contentLeft: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    contentText: {
        paddingHorizontal: 5,
        paddingTop: 5,
    },
    textLikes: {
        color: '#fff',
        fontWeight: 'bold',
        padding: 5,
    },
    comment: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    },
    textSubtitleTitle: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textSubtitle: {
        color: '#fff',
        paddingLeft: 5,
    },
    textComment: {
        paddingLeft: 5,
        color: '#A9A9A9',
    },
    timeComment: {
        color: '#A9A9A9',
    },
    footer: {
        borderTopColor: '#A9A9A9',
        borderTopWidth: 0.18,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: '#000', 
    },
    contentFooter: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    footerImg: {
        width: 30,
        height: 30,
        borderRadius: 50, 
        resizeMode: 'cover', 
    },
    imgPlus: {
        tintColor: "#fff",
        width: 25,
        height: 25,
    },
})