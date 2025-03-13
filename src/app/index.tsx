import { View, Text, StyleSheet, Alert,  } from "react-native"

import { Button } from "../components/button"

export default function Index() {

  function handleMessage() {
    console.log('teste')
    const name = 'Matheus'
    Alert.alert(`Olá, ${name}`)
  }
  return (
    <View style= { styles.container }>
      <Text style= { styles.title }>Olá, Matheus!</Text>

      <Button title="Entrar" onPress={handleMessage}/>
      <Button title="Sair"/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold"
  }
})