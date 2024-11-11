import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center', 
        paddingBottom: 135,
        width: '100%',
    },
    inputContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 35,
        paddingVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#363636',
        marginTop: 40,
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
    },
    feedImg: {
        width: 120,
        height: 120,
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
        backgroundColor: '#000', 
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