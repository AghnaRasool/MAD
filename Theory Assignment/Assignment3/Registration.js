import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from the new package

export default function Registeration({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      alert('Registration successful');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error storing data:', error);
      alert('Registration failed. Please try again.');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.Body}>
        <View style={styles.view1}>
          
          <View style={styles.overlay}>
            <Text style={{ ...styles.title, marginTop: 50 }}>Register</Text>
            <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} style={styles.textinput} />
            <TextInput
              placeholder="Password"
              style={styles.textinput}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={handleRegistration}>
              <View style={{ ...styles.buttonContainer }}>
                <Text style={{ ...styles.text, textAlign: "center", fontSize: 16, fontWeight: "bold" }}>Register</Text>
              </View>
            </Pressable>
            <Text style={{ ...styles.text, textAlign: "center", marginLeft: 50 }}>Already Have An Account?</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Body: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: 50,
    borderRadius: 30,
  },
  view1: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'Black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textinput: {
    backgroundColor: 'white',
    opacity: 0.4,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'black',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 10,
    padding: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    margin:20,
    marginLeft:70,
    padding: 0,
    width: 180,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: 'red',
    borderWidth: 3,
  },
  text: {
    color: 'black',
    fontSize: 12,
    margin: 10,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "transparent",
    marginLeft:50
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});