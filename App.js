import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa los iconos

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setMessage('Por favor, llenar los campos.');
    } else if (!emailRegex.test(email)) {
      setMessage('Correo no válido.');
    } else {
      setMessage('Login iniciado');
      // Aquí puedes manejar el inicio de sesión
      console.log('Correo:', email);
      console.log('Contraseña:', password);
    }

    // Borra el mensaje después de 3 segundos
    setTimeout(() => {
      setMessage('');
    }, 3000); // 3000 milisegundos = 3 segundos
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo_negro.png')} style={styles.logo} />
      <Text style={styles.subTitle}>Ingrese los datos</Text>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <TextInput
        placeholder='User@gmail.com'
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='Contraseña'
          style={styles.passwordInput} // Usa el nuevo estilo
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize='none'
        />
        <TouchableOpacity 
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer} // Estilo para el contenedor del icono
        >
          <Icon 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={25} // Tamaño del icono
            color='gray' 
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250, // Ajusta el ancho del logo
    height: 100, // Ajusta la altura del logo
    resizeMode: 'contain', // Asegura que la imagen se ajuste dentro del contenedor sin recortarse
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  },
  textInput: {
    paddingStart: 30,
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  passwordContainer: {
    position: 'relative', // Permite que el icono se posicione dentro del contenedor
    width: '80%',
    marginTop: 20,
  },
  passwordInput: {
    paddingStart: 30,
    paddingEnd: 50, // Espacio para el icono
    padding: 10,
    width: '100%',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  iconContainer: {
    position: 'absolute', // Coloca el icono sobre el campo de entrada
    right: 10, // Mueve el icono hacia la derecha
    top: '50%', // Centra verticalmente
    transform: [{ translateY: -12 }], // Ajusta la posición vertical del icono
  },
  button: {
    width: '80%',
    backgroundColor: '#34434D',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    color: 'red',
    marginBottom: 20,
  },
});
