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
})