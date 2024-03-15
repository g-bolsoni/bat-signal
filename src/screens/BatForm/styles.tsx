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
    viewInputs: {
        width: '100%',
        height: 48,
        borderRadius: 12,
        borderColor: '#4d4d4d',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: '100%',
        height: 48,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInputs: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        width: '100%',
        marginBottom: 60,
    }
});