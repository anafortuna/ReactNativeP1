import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'flex-start', 
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 35,
        paddingVertical: 10,
        marginHorizontal: 15,
        backgroundColor: '#262626',
        marginTop: 50,
        borderRadius: 15,
    },
    inputIcon: {
        position: 'absolute',
        left: 10,
        width: 15,
        height: 15,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        color: '#fff',
    },
    feed: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    flatListContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
    },
    feedImg: {
        width: 120,
        height: 120,
        marginHorizontal: 2,
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