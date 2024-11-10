import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
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
        width: '100%',
        marginBottom: 10,
    },
    contentHeader: {
        marginTop: 25,
        height: 52,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    contentHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    contentHeaderImg: {
        width: 40,
        height: 40,
    },
    contentHeaderImgText: {
        color: '#fff'
    },
    contentImg: {
        marginVertical: 5,
    },
    contentFeed: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
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
        marginBottom: 3,
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
        position: 'static',
    },
    contentFooter: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'space-between',
    },
    footerImg: {
        width: 30,
        height: 30, // Certifique-se de que a altura seja igual à largura
        borderRadius: 50, // Ajuste para que a imagem tenha bordas arredondadas completas
        resizeMode: 'cover', // Garante que a imagem ocupe todo o espaço sem cortes
    },
    imgPlus: {
        tintColor: "#fff",
        width: 25,
        height: 25,
    },
})