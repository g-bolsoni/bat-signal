import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

import batImg from '../../../assets/bat-logo.png';

interface IBatHome {
    openForm: boolean;
    setOpenForm: (open: boolean) => void;
}

export function BatHome({ openForm, setOpenForm }: IBatHome) {

    const handleOpenForm = () => {
        setOpenForm(!openForm);
    };

    return (
        <>
            <View style={styles.containerImage}>
                <Image
                    source={batImg}
                    style={styles.image}
                />
            </View>
            <Pressable style={styles.button} onPress={handleOpenForm} >
                <Text style={styles.buttonText} >
                    Ativar Bat Sinal
                </Text>
            </Pressable>
        </>
    );
}