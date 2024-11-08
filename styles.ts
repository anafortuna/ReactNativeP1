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
        marginTop: 40,
    },
    headerOptions: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingRight: 5,
    },
    stories: {
        width: '100%',
        paddingLeft: 10,
        alignContent: 'center',
        paddingVertical: 10,
    },
    storiesCard: {
        borderWidth: 2,
        borderColor: '#C13584',
        borderRadius: 50,
        marginRight: 14,
        padding: 2,
    },
    storiesCardImage: {
        width: 64,
        height: 64,
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
    },
    textComment: {
        color: '#fff',
    },
})