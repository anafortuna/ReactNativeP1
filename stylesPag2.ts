import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center', 
        paddingBottom: 105,
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 35,
        paddingVertical: 10,
        marginHorizontal: 15,
        backgroundColor: '#262626',
        marginTop: 10,
        borderRadius: 10,
        height: 40,
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
        gap: 3,
        width: '100%',
    },
    feedImg: {
        width: 130,
        height: 130,
        marginHorizontal: 1.5,
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
        backgroundColor: '#121212', 
        paddingVertical: 8,
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
    footerIcon: {
        tintColor: "#fff",
        width: 25,
        height: 25,
    },
})