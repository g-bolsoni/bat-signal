import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    button: {
        borderRadius: 12,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: '#4d4d4d',
        marginVertical: 5,
        elevation: 13
    },
    buttonDisabled: {
        borderRadius: 12,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: '#4d4d4d',
        marginVertical: 5,
        elevation: 0,
        opacity: 0.5
    },
    image: {
        width: 200,
        height: 200,
        objectFit: 'contain'
    },
    containerImage: {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        borderColor: '#4d4d4d',
        borderRadius: 12,
        borderWidth: 1,
    }
});