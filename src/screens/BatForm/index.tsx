import React, { useState } from 'react';

import { styles } from './styles';
import { Alert, Button, Pressable, Text, TextInput, View } from 'react-native';

interface IBatHome {
    openForm: boolean;
    setOpenForm: (open: boolean) => void;
}

export function BatForm({ openForm, setOpenForm }: IBatHome) {
    const [name, setName] = useState('');
    const [problem, setProblem] = useState('');
    const [location, setLocation] = useState('');

    const handleOpenForm = () => {
        if (name.length <= 0 && problem.length <= 0 && location.length <= 0) return;
        setName('');
        setProblem('');
        setLocation('');
        setOpenForm(!openForm);
    };

    return (
        <>
            <View style={styles.containerInputs}>
                <View style={styles.viewInputs}>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={(text) => setName(text)}
                        placeholder='Insira seu nome'
                        value={name}
                    />
                </View>
                <View style={styles.viewInputs}>
                    <TextInput
                        style={styles.inputs}
                        value={problem}
                        onChangeText={(text) => setProblem(text)}
                        placeholder='O que está acontencendo?'
                    />
                </View>
                <View style={styles.viewInputs}>
                    <TextInput
                        style={styles.inputs}
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                        placeholder='Onde que está acontecendo?'
                    />
                </View>
            </View>

            <Pressable style={styles.button} onPress={handleOpenForm} >
                <Text style={styles.buttonText} >
                    Ativar Bat Sinal
                </Text>
            </Pressable>
        </>
    );
}