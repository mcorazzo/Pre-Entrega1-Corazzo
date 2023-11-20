import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#EBEBEB', '#AC77E4']} // Define los colores del degradado
      style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('./assets/logo.png')} // Ruta a tu imagen de icono
          style={styles.icon}
        />
      </View>
      <Text style={styles.text1}>
        Bienvenido a tu App Mobile
      </Text>
      <Text>Hola Coder!!! - Mariano Corazzo</Text>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 20, // Espacio entre el icono y el texto
  },
  icon: {
    width: 100, // Ancho de la imagen del icono
    height: 100, // Alto de la imagen del icono
    resizeMode: 'contain', // Ajuste la imagen al tamaño del contenedor
  },
  text1: {
    fontSize: 20,
    fontFamily: 'monospace', // Utiliza una fuente monoespaciada genérica
    fontWeight: 'bold', // Puedes aplicar negrita si lo deseas
    textAlign: 'center', // Alinea el texto al centro si es necesario    
  },
});
