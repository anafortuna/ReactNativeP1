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
        borderWidth: 2,
        borderColor: '#C13584',
        borderRadius: 50,
        padding: 10,
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
    contentFooterLeft: {
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
        marginBottom: 5,
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
    contentFooter: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 5,
        justifyContent: 'space-between',
    },
    footerImg: {
        width: 30,
        height: 30,
    },
})