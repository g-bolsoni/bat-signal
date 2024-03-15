import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BatHome } from './src/screens/BatHome';
import { BatForm } from './src/screens/BatForm';
import { useState } from 'react';

export default function App() {
  const [openForm, setOpenForm] = useState(true);

  return (
    <View style={styles.container}>
      {openForm ? <BatForm openForm={openForm} setOpenForm={setOpenForm} /> : <BatHome openForm={openForm} setOpenForm={setOpenForm} />}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
});
