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
})